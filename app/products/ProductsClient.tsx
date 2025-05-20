"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pagination } from "@/components/pagination"
import { Search, Filter, ShoppingCart } from "lucide-react"
import { FeaturedProducts } from "@/components/featured-products"

export default function ProductsClient() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">全部商品</h1>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索商品..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="价格区间" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部价格</SelectItem>
                  <SelectItem value="0-100">0-100元</SelectItem>
                  <SelectItem value="100-500">100-500元</SelectItem>
                  <SelectItem value="500-1000">500-1000元</SelectItem>
                  <SelectItem value="1000+">1000元以上</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="分类" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部分类</SelectItem>
                  <SelectItem value="imported">进口水果</SelectItem>
                  <SelectItem value="domestic">国产水果</SelectItem>
                  <SelectItem value="tropical">热带水果</SelectItem>
                  <SelectItem value="berries">浆果类</SelectItem>
                  <SelectItem value="citrus">柑橘类</SelectItem>
                  <SelectItem value="melons">瓜果类</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                筛选
              </Button>
            </div>
          </div>
        </div>

        {/* 商品网格 */}
        <FeaturedProducts />

        {/* 分页 */}
        <div className="mt-8 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  )
} 