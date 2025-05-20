import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { SearchBar } from "@/components/search-bar"
import { CategoryNav } from "@/components/category-nav"
import { FeaturedProducts } from "@/components/featured-products"
import { Pagination } from "@/components/pagination"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">全部商品</h1>

        {/* 搜索和分类 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <SearchBar />
          <CategoryNav />
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

                {/* 产地 */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">产地</h3>
                  <div className="space-y-2">
                    {["国产", "进口"].map((origin) => (
                      <div key={origin} className="flex items-center space-x-2">
                        <Checkbox id={`origin-${origin}`} />
                        <label
                          htmlFor={`origin-${origin}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {origin}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 产地详细 */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">详细产地</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["海南", "山东", "新疆", "福建", "广西", "云南", "泰国", "智利", "澳大利亚", "美国"].map(
                      (place) => (
                        <div key={place} className="flex items-center space-x-2">
                          <Checkbox id={`place-${place}`} />
                          <label
                            htmlFor={`place-${place}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {place}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* 季节 */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">季节</h3>
                  <div className="space-y-2">
                    {["春季", "夏季", "秋季", "冬季"].map((season) => (
                      <div key={season} className="flex items-center space-x-2">
                        <Checkbox id={`season-${season}`} />
                        <label
                          htmlFor={`season-${season}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {season}
                        </label>
                      </div>
                    ))}
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

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">热门供应商</h2>
                <div className="space-y-4">
                  {["阳光果园", "绿源果业", "鲜果直供", "丰收果园"].map((supplier) => (
                    <Link
                      key={supplier}
                      href={`/suppliers/${supplier}`}
                      className="block text-sm hover:text-emerald-600 transition-colors"
                    >
                      {supplier}
                    </Link>
                  ))}
                </div>
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

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">每页显示:</span>
                  <Select defaultValue="20">
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="20" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="40">40</SelectItem>
                      <SelectItem value="60">60</SelectItem>
                      <SelectItem value="80">80</SelectItem>
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

                      {/* 移动端筛选内容 - 与桌面版相同 */}
                      {/* 价格范围 */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3">价格范围</h3>
                        <Slider defaultValue={[0, 100]} max={500} step={10} className="mb-2" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>¥0</span>
                          <span>¥500+</span>
                        </div>
                      </div>

                      {/* 产地 */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3">产地</h3>
                        <div className="space-y-2">
                          {["国产", "进口"].map((origin) => (
                            <div key={origin} className="flex items-center space-x-2">
                              <Checkbox id={`mobile-origin-${origin}`} />
                              <label
                                htmlFor={`mobile-origin-${origin}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {origin}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 其他筛选条件... */}

                      <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">应用筛选</Button>
                    </div>
                  </SheetContent>
                </Sheet>
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
      </div>
    </div>
  )
}
