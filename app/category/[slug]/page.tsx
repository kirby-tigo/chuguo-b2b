import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { SearchBar } from "@/components/search-bar"
import { FeaturedProducts } from "@/components/featured-products"
import { Pagination } from "@/components/pagination"
import Link from "next/link"
import Image from "next/image"
import { Filter, SlidersHorizontal, ArrowLeft } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// 分类数据
const categories = {
  imported: {
    name: "进口水果",
    description: "来自世界各地的优质进口水果，品种丰富，品质保障",
    image: "/imported-fruits-banner.png",
    subcategories: ["美国", "智利", "泰国", "澳大利亚", "新西兰", "南非"],
  },
  domestic: {
    name: "国产水果",
    description: "本地新鲜采摘的各类应季水果，从产地直达您的餐桌",
    image: "/chinese-domestic-fruits-banner.png",
    subcategories: ["海南", "山东", "新疆", "福建", "广西", "云南"],
  },
  tropical: {
    name: "热带水果",
    description: "香甜可口的热带特色水果，带给您不一样的味蕾体验",
    image: "/tropical-fruits-banner.png",
    subcategories: ["榴莲", "芒果", "菠萝", "椰子", "火龙果", "山竹"],
  },
  berries: {
    name: "浆果类",
    description: "营养丰富的各类新鲜浆果，富含抗氧化物质",
    image: "/placeholder.svg?height=300&width=1200&query=berries fruits banner",
    subcategories: ["草莓", "蓝莓", "树莓", "黑莓", "樱桃", "葡萄"],
  },
  citrus: {
    name: "柑橘类",
    description: "维C丰富的各类柑橘水果，酸甜可口，健康美味",
    image: "/placeholder.svg?height=300&width=1200&query=citrus fruits banner",
    subcategories: ["橙子", "柠檬", "柚子", "橘子", "金桔", "青柠"],
  },
  melons: {
    name: "瓜果类",
    description: "清爽多汁的各类瓜果，夏日解暑的最佳选择",
    image: "/placeholder.svg?height=300&width=1200&query=melon fruits banner",
    subcategories: ["西瓜", "哈密瓜", "香瓜", "木瓜", "甜瓜", "蜜瓜"],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories] || {
    name: "未知分类",
    description: "暂无描述",
    image: "/placeholder.svg",
    subcategories: [],
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[300px] overflow-hidden">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回全部商品
          </Link>
        </div>

        {/* 搜索栏 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <SearchBar />

          {/* 子分类 */}
          {category.subcategories.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium mb-3">子分类</h3>
              <div className="flex flex-wrap gap-2">
                {category.subcategories.map((subcat) => (
                  <Button
                    key={subcat}
                    variant="outline"
                    size="sm"
                    className="border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50"
                  >
                    {subcat}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* 筛选侧边栏 - 桌面版 */}
          <div className="space-y-6 hidden lg:block">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">筛选条件</h2>

                {/* 价格范围 */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">价格范围</h3>
                  <Slider defaultValue={[0, 100]} max={500} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>¥0</span>
                    <span>¥500+</span>
                  </div>
                </div>

                {/* 供应商评级 */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">供应商评级</h3>
                  <div className="space-y-2">
                    {["4星及以上", "3星及以上", "所有评级"].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {rating}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">应用筛选</Button>
              </CardContent>
            </Card>
          </div>

          {/* 商品列表 */}
          <div>
            {/* 排序和布局选项 */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">排序方式:</span>
                <Select defaultValue="default">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="默认排序" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">默认排序</SelectItem>
                    <SelectItem value="price-asc">价格从低到高</SelectItem>
                    <SelectItem value="price-desc">价格从高到低</SelectItem>
                    <SelectItem value="sales">销量优先</SelectItem>
                    <SelectItem value="rating">评分优先</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 移动端筛选按钮 */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    筛选
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="py-6">
                    <h2 className="font-semibold text-lg mb-4 flex items-center">
                      <SlidersHorizontal className="h-5 w-5 mr-2" />
                      筛选条件
                    </h2>

                    {/* 移动端筛选内容 */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">价格范围</h3>
                      <Slider defaultValue={[0, 100]} max={500} step={10} className="mb-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>¥0</span>
                        <span>¥500+</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">应用筛选</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* 商品网格 */}
            <FeaturedProducts />

            {/* 分页 */}
            <div className="mt-8 flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
