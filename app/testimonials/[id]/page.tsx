import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Building, MapPin, ArrowLeft, Calendar, BarChart3, TrendingUp, ThumbsUp } from "lucide-react"

// 模拟客户评价详情数据
const testimonialDetails = {
  id: "1",
  name: "张志远",
  company: "鲜果一号连锁",
  position: "创始人",
  avatar: "/diverse-business-professional.png",
  logo: "/fruit-company-logo-1.png",
  content:
    "作为一家拥有30多家门店的水果连锁企业，采购和供应链管理一直是我们的痛点。自从与果然好忙合作以来，我们的采购成本降低了15%，库存周转率提高了30%，极大地提升了我们的运营效率。果然好忙不仅提供优质的水果供应，还为我们提供了专业的门店管理系统和数据分析工具，帮助我们更好地了解市场趋势和消费者需求，优化商品结构，提高毛利率。他们的冷链物流确保了水果的新鲜度，客户满意度明显提升。我们非常满意与果然好忙的合作，他们是值得信赖的长期合作伙伴。",
  rating: 5,
  type: "chain",
  location: "广东省广州市",
  date: "2023-06-15",
  storeCount: 32,
  yearFounded: 2015,
  challenges: [
    "采购成本高，供应商管理复杂",
    "库存管理效率低，损耗率高",
    "缺乏数据分析工具，难以优化商品结构",
    "物流配送不稳定，影响水果新鲜度",
  ],
  solutions: [
    "集中采购平台，直连优质供应商",
    "智能库存管理系统，优化库存结构",
    "数据分析工具，提供市场洞察",
    "冷链物流配送，保障水果新鲜度",
  ],
  results: ["采购成本降低15%", "库存周转率提高30%", "损耗率降低40%", "客户满意度提升25%", "门店运营效率提升35%"],
  images: [
    "/placeholder.svg?height=300&width=500&query=modern fruit store interior",
    "/placeholder.svg?height=300&width=500&query=fruit store display counter",
    "/placeholder.svg?height=300&width=500&query=fruit store management system",
  ],
  featured: true,
}

export default function TestimonialDetailPage({ params }: { params: { id: string } }) {
  // 在实际应用中，这里会根据ID从API获取具体的评价详情
  const testimonial = testimonialDetails

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回所有评价
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* 主要内容 */}
          <div className="space-y-8">
            {/* 客户评价 */}
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{testimonial.name}</h1>
                      <p className="text-muted-foreground">
                        {testimonial.position} | {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                    {testimonial.type === "chain" ? "连锁门店" : testimonial.type === "wholesale" ? "批发商" : "供应商"}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{testimonial.rating}.0</span>
                </div>

                <div className="relative mb-8">
                  <Quote className="h-12 w-12 text-emerald-100 absolute -top-2 -left-2" />
                  <p className="text-lg text-muted-foreground relative z-10 pl-8">{testimonial.content}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>评价日期: {testimonial.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>地区: {testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>门店数量: {testimonial.storeCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 案例详情 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">案例详情</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 mb-4">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-4">面临的挑战</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {testimonial.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-4">解决方案</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {testimonial.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-4">
                      <ThumbsUp className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-4">成果</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {testimonial.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* 案例图片 */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">案例图片</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {testimonial.images.map((image, i) => (
                    <div key={i} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${testimonial.company} 案例图片 ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 公司信息 */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.company}</h3>
                    <p className="text-sm text-muted-foreground">成立于 {testimonial.yearFounded} 年</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">行业</span>
                    <span>水果零售</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">规模</span>
                    <span>{testimonial.storeCount} 家门店</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">地区</span>
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">合作时间</span>
                    <span>2 年</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 使用的解决方案 */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">使用的解决方案</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>供应链优化</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>门店管理系统</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>数据分析与决策</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>冷链物流配送</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">了解解决方案</Button>
                </div>
              </CardContent>
            </Card>

            {/* 相关评价 */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">相关评价</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "李明",
                      company: "果然鲜水果超市",
                      content: "果然好忙的供应链服务非常专业，他们的冷链物流确保了水果的新鲜度...",
                    },
                    {
                      name: "王晓华",
                      company: "优鲜果业",
                      content: "作为一家拥有20多家门店的连锁企业，采购一直是我们的痛点...",
                    },
                    {
                      name: "赵琳",
                      company: "鲜果汇",
                      content: "与果然好忙合作一年多，水果品质稳定，价格合理，最重要的是...",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">"{item.content}"</p>
                      <p className="text-xs font-medium">
                        {item.name} | {item.company}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                    <Link href="/testimonials">查看更多评价</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 联系我们 */}
            <Card className="border-none shadow-sm bg-emerald-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">想了解更多？</h3>
                <p className="text-sm text-muted-foreground mb-4">联系我们的解决方案顾问，获取针对您业务的定制化方案</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">联系顾问</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
