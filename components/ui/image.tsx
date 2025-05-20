"use client"

import { useState } from "react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"

export interface ImageProps extends NextImageProps {
  fallbackSrc?: string
}

export function Image({ src, alt, fallbackSrc = "/placeholder.png", className, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // 日志：渲染时打印
  console.log("[Image组件] 渲染 src:", src, "alt:", alt, "props:", props)

  const handleLoad = (e: any) => {
    setIsLoading(false)
    setIsError(false)
    // 日志：加载成功
    console.log("[Image组件] 加载成功 src:", src)
    if (props.onLoad) props.onLoad(e)
  }

  const handleError = (e: any) => {
    setIsLoading(false)
    setIsError(true)
    // 日志：加载失败
    console.log("[Image组件] 加载失败 src:", src)
    if (props.onError) props.onError(e)
  }

  if (isError) {
    return (
      <NextImage
        src={fallbackSrc}
        alt={alt}
        className={cn("object-cover", className)}
        {...props}
      />
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn("object-cover", className, isLoading ? "opacity-50" : "opacity-100")}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  )
} 