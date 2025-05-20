"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

export default function TestimonialsClient() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">客户评价</h1>

        {/* 客户评价列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: "张经理",
              company: "某连锁水果店",
              avatar: "/placeholder.png",
              content:
                "通过果然好忙平台，我们成功对接了多个优质供应商，不仅降低了采购成本，还提高了水果品质。平台的供应链管理功能非常实用，帮助我们实现了库存的精准控制。",
              rating: 5,
              date: "2023-10-15",
            },
            {
              id: 2,
              name: "李总",
              company: "某水果批发商",
              avatar: "/placeholder.png",
              content:
                "果然好忙的B2B交易平台让我们的业务范围扩大了很多。平台上的供应商资源丰富，交易流程规范，资金安全有保障。特别是平台的物流配送服务，大大提高了我们的运营效率。",
              rating: 5,
              date: "2023-10-10",
            },
            {
              id: 3,
              name: "王店长",
              company: "某社区水果店",
              avatar: "/placeholder.png",
              content:
                "作为一家小型水果店，我们一直苦于找不到稳定的供应商。通过果然好忙平台，我们找到了合适的供应商，而且平台的价格透明，让我们能够更好地控制成本。",
              rating: 4,
              date: "2023-10-05",
            },
            {
              id: 4,
              name: "赵总",
              company: "某水果种植基地",
              avatar: "/placeholder.png",
              content:
                "果然好忙平台帮助我们打开了销售渠道，让我们的优质水果能够直接对接终端零售商。平台的交易流程简单，回款及时，是我们值得信赖的合作伙伴。",
              rating: 5,
              date: "2023-09-28",
            },
            {
              id: 5,
              name: "陈经理",
              company: "某水果电商",
              avatar: "/placeholder.png",
              content:
                "果然好忙的供应链解决方案非常专业，帮助我们优化了采购流程，提高了库存周转率。平台的数据分析功能也很实用，让我们能够更好地把握市场趋势。",
              rating: 5,
              date: "2023-09-20",
            },
            {
              id: 6,
              name: "林总",
              company: "某水果进出口公司",
              avatar: "/placeholder.png",
              content:
                "通过果然好忙平台，我们成功拓展了国内市场。平台的专业团队为我们提供了很多有价值的市场信息，帮助我们更好地了解国内市场需求。",
              rating: 4,
              date: "2023-09-15",
            },
          ].map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Badge
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        ★
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{testimonial.date}</p>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" />
                  <p className="text-gray-600 pl-6">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 分享您的故事 */}
        <div className="mt-16">
          <Card className="border-none shadow-md bg-gradient-to-r from-emerald-800 to-emerald-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">分享您的故事</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  我们期待听到您与果然好忙平台合作的故事。分享您的经验，帮助更多同行了解我们的服务。
                </p>
                <Button variant="secondary">分享评价</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 