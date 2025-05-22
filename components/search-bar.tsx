"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    // 这里可以实现实际的搜索逻辑
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-3xl mx-auto mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="搜索水果、品牌或供应商..."
          className="pl-10 rounded-r-none h-12 border-r-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button type="submit" className="rounded-l-none h-12 px-6 bg-emerald-600 hover:bg-emerald-700">
        搜索
      </Button>
    </form>
  )
}
