import React, { useRef, useState, useCallback, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export interface SlideCaptchaProps {
  onSuccess?: () => void
  onFail?: () => void
  successText?: string
  defaultText?: string
  failText?: string
  resetAfterSuccess?: boolean
  resetTimeout?: number
}

const SLIDER_WIDTH = 44 // px

const SlideCaptcha: React.FC<SlideCaptchaProps> = ({
  onSuccess,
  onFail,
  successText = "验证成功",
  defaultText = "请向右滑动滑块验证",
  failText = "验证失败，请重试",
  resetAfterSuccess = true,
  resetTimeout = 1000,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(0)
  const [status, setStatus] = useState<"default" | "success" | "fail">("default")
  const [text, setText] = useState(defaultText)
  const [trackWidth, setTrackWidth] = useState(320)

  const trackRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)

  // 动态获取滑动轨道宽度
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.offsetWidth)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 重置验证器状态
  const resetCaptcha = () => {
    setPosition(0)
    setStatus("default")
    setText(defaultText)
  }

  // 处理验证成功
  const handleSuccess = () => {
    setStatus("success")
    setText(successText)
    onSuccess?.()
  }

  // 处理验证失败
  const handleFail = () => {
    setStatus("fail")
    setText(failText)
    setTimeout(() => {
      resetCaptcha()
      onFail?.()
    }, 800)
  }

  // 拖动开始
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (status === "success") return;
    setIsDragging(true);
    startXRef.current =
      "touches" in e ? e.touches[0].clientX - position : (e as React.MouseEvent).clientX - position;
  };

  // 拖动中
  const handleDragging = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    let newPos = clientX - startXRef.current;
    newPos = Math.max(0, Math.min(newPos, trackWidth - SLIDER_WIDTH));
    setPosition(newPos);
  }, [isDragging, trackWidth]);

  // 拖动结束
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    // 判断是否到达终点
    if (position >= trackWidth - SLIDER_WIDTH) {
      handleSuccess();
    } else {
      handleFail();
    }
  }, [position, trackWidth]);

  // 用 useEffect 统一管理事件监听
  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("mousemove", handleDragging as any);
    window.addEventListener("touchmove", handleDragging as any);
    window.addEventListener("mouseup", handleDragEnd as any);
    window.addEventListener("touchend", handleDragEnd as any);
    return () => {
      window.removeEventListener("mousemove", handleDragging as any);
      window.removeEventListener("touchmove", handleDragging as any);
      window.removeEventListener("mouseup", handleDragEnd as any);
      window.removeEventListener("touchend", handleDragEnd as any);
    };
  }, [isDragging, handleDragging, handleDragEnd]);

  // 绿色进度条颜色
  const getBarColor = () => {
    if (status === "success") return "#10b981"
    if (status === "fail") return "#f87171"
    return "#10b981"
  }

  return (
    <div className="w-full flex flex-col items-center select-none">
      <div
        ref={trackRef}
        className="relative w-full h-11 bg-[#f5f5f5] rounded-lg border border-[#e0e0e0] flex items-center overflow-hidden"
      >
        {/* 绿色进度条 */}
        <div
          className="absolute left-0 top-0 h-11 rounded-lg transition-all duration-200 z-10"
          style={{
            width:
              position >= trackWidth - SLIDER_WIDTH
                ? "100%"
                : `${position + SLIDER_WIDTH}px`,
            background: getBarColor(),
            opacity: position > 0 || status !== "default" ? 1 : 0.15,
          }}
        />
        {/* 箭头按钮 */}
        <div
          className={`absolute top-0 h-11 w-11 flex items-center justify-center rounded-lg cursor-pointer z-20 select-none transition-all duration-200
            ${isDragging ? "shadow-xl scale-110" : "shadow"}`}
          style={{
            left: `${position}px`,
            background: getBarColor(),
          }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
        {/* 提示文字 */}
        <span
          className={`w-full text-center text-base pointer-events-none select-none transition-colors z-30 ${
            status === "success"
              ? "text-emerald-600"
              : status === "fail"
              ? "text-red-500"
              : "text-gray-400"
          }`}
          style={{ position: "relative" }}
        >
          {text}
        </span>
      </div>
    </div>
  )
}

export default SlideCaptcha; 