"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // 模拟搜索请求
    setTimeout(() => {
      // 这里可以实现实际的搜索逻辑，例如跳转到搜索结果页或过滤当前页面内容
      console.log("搜索查询:", searchQuery)
      setIsSearching(false)

      // 如果需要跳转到搜索结果页，可以使用以下代码
      // window.location.href = `/faq/search?q=${encodeURIComponent(searchQuery)}`

      // 或者使用 Next.js 的路由
      // router.push(`/faq/search?q=${encodeURIComponent(searchQuery)}`)
    }, 500)
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        placeholder="搜索您的问题..."
        className="pl-10 py-6 text-base border-emerald-200 focus-visible:ring-emerald-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700"
        disabled={isSearching}
      >
        {isSearching ? "搜索中..." : "搜索"}
      </Button>
    </form>
  )
}
