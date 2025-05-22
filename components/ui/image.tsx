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

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setIsError(true)
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