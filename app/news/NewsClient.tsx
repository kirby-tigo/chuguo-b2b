"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pagination } from "@/components/pagination"
import { Search, Filter, Calendar, ArrowRight, User } from "lucide-react"

export default function NewsClient() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">行业资讯</h1>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索资讯..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="资讯分类" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有分类</SelectItem>
                  <SelectItem value="market">市场分析</SelectItem>
                  <SelectItem value="technology">物流技术</SelectItem>
                  <SelectItem value="retail">零售管理</SelectItem>
                  <SelectItem value="policy">政策法规</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                筛选
              </Button>
            </div>
          </div>
        </div>

        {/* 资讯分类标签 */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">全部资讯</TabsTrigger>
            <TabsTrigger value="market">市场分析</TabsTrigger>
            <TabsTrigger value="technology">物流技术</TabsTrigger>
            <TabsTrigger value="retail">零售管理</TabsTrigger>
            <TabsTrigger value="policy">政策法规</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* 头条资讯 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">头条资讯</h2>
              <Card className="border-none shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src="/placeholder.png"
                      alt="2023年全球水果贸易趋势分析"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">市场分析</Badge>
                    <h3 className="text-2xl font-bold mb-4">2023年全球水果贸易趋势分析</h3>
                    <p className="text-muted-foreground mb-6">
                      随着全球贸易环境的变化，水果进出口市场呈现新的发展趋势。本文分析了主要水果品类的贸易数据和未来市场预测，为行业参与者提供决策参考。
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>2023-10-15</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>张经理</span>
                      </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="/news/1">阅读全文</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* 最新资讯 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">最新资讯</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    id: 2,
                    title: "水果冷链物流技术创新与应用",
                    excerpt:
                      "冷链物流是保障水果新鲜度的关键环节。本文介绍了最新的水果冷链技术发展和在实际运输中的应用案例...",
                    image: "/placeholder.png",
                    date: "2023-09-28",
                    author: "李工程师",
                    category: "物流技术",
                    categoryColor: "blue",
                  },
                  {
                    id: 3,
                    title: "连锁水果店经营策略与挑战",
                    excerpt:
                      "随着消费升级，水果零售行业竞争加剧。本文分享了成功水果连锁店的经营策略和应对市场挑战的方法...",
                    image: "/placeholder.png",
                    date: "2023-09-10",
                    author: "王店长",
                    category: "零售管理",
                    categoryColor: "purple",
                  },
                  {
                    id: 4,
                    title: "2023年水果进出口政策解读",
                    excerpt:
                      "近期国家出台了一系列水果进出口相关政策。本文对这些政策进行了详细解读，并分析了对行业的影响...",
                    image: "/placeholder.png",
                    date: "2023-08-25",
                    author: "赵分析师",
                    category: "政策法规",
                    categoryColor: "amber",
                  },
                ].map((article) => (
                  <Card
                    key={article.id}
                    className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute top-2 left-2 bg-${article.categoryColor}-100 text-${article.categoryColor}-800 text-xs px-2 py-1 rounded`}
                      >
                        {article.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                          <Link href={`/news/${article.id}`}>阅读全文</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 更多资讯 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">更多资讯</h2>
              <div className="space-y-6">
                {[
                  {
                    id: 5,
                    title: "水果产业数字化转型趋势",
                    excerpt:
                      "数字化转型正在重塑水果产业链。本文探讨了水果产业数字化转型的主要趋势和成功案例，为企业提供转型思路。",
                    date: "2023-08-15",
                    author: "陈专家",
                    category: "市场分析",
                  },
                  {
                    id: 6,
                    title: "水果包装创新：环保与功能的平衡",
                    excerpt:
                      "随着环保意识的提升，水果包装面临创新挑战。本文介绍了几种兼顾环保与功能的水果包装创新方案。",
                    date: "2023-08-05",
                    author: "林设计师",
                    category: "物流技术",
                  },
                  {
                    id: 7,
                    title: "水果零售店选址策略",
                    excerpt: "选址是水果零售店成功的关键因素之一。本文分享了水果零售店选址的关键考量因素和成功案例。",
                    date: "2023-07-28",
                    author: "王店长",
                    category: "零售管理",
                  },
                ].map((article) => (
                  <Card key={article.id} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                          <Link href={`/news/${article.id}`}>
                            阅读全文
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 分页 */}
            <div className="flex justify-center">
              <Pagination />
            </div>
          </TabsContent>

          {/* 其他标签页内容 */}
          <TabsContent value="market">
            <div className="text-center py-12">
              <p className="text-muted-foreground">市场分析相关资讯正在整理中...</p>
            </div>
          </TabsContent>
          <TabsContent value="technology">
            <div className="text-center py-12">
              <p className="text-muted-foreground">物流技术相关资讯正在整理中...</p>
            </div>
          </TabsContent>
          <TabsContent value="retail">
            <div className="text-center py-12">
              <p className="text-muted-foreground">零售管理相关资讯正在整理中...</p>
            </div>
          </TabsContent>
          <TabsContent value="policy">
            <div className="text-center py-12">
              <p className="text-muted-foreground">政策法规相关资讯正在整理中...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 