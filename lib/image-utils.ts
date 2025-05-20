export function getOptimizedImageUrl(src: string, width?: number, height?: number): string {
  if (!src) return "/placeholder.png"
  
  // 如果是外部图片，直接返回
  if (src.startsWith("http")) return src
  
  // 如果是占位符图片，直接返回
  if (src.includes("placeholder")) return src
  
  // 添加查询参数以支持图片优化
  const url = new URL(src, "http://localhost")
  if (width) url.searchParams.set("w", width.toString())
  if (height) url.searchParams.set("h", height.toString())
  url.searchParams.set("q", "75") // 设置质量参数
  
  return url.pathname + url.search
}

export function getImageSizes(containerWidth: number): string {
  if (containerWidth <= 640) return "100vw"
  if (containerWidth <= 1024) return "50vw"
  return "33vw"
}

export function getImagePlaceholder(width: number, height: number): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">
        Loading...
      </text>
    </svg>`
  ).toString("base64")}`
} 