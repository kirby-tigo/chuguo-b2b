"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

export default function PromotionsClient() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">促销活动</h1>

        {/* 活动列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "2023年秋季水果采购节",
              image: "/placeholder.png",
              date: "2023-10-15",
              time: "09:00-17:00",
              location: "广州国际会展中心",
              status: "进行中",
              statusColor: "emerald",
              description:
                "本次采购节汇集了全国各地的优质水果供应商，提供丰富的采购选择和优惠价格。现场还将举办多场行业论坛和对接会。",
            },
            {
              id: 2,
              title: "水果供应链管理培训",
              image: "/placeholder.png",
              date: "2023-10-20",
              time: "14:00-17:00",
              location: "深圳湾科技生态园",
              status: "即将开始",
              statusColor: "blue",
              description:
                "本次培训将深入讲解水果供应链管理的关键环节，包括采购、仓储、物流等，帮助您提升供应链效率。",
            },
            {
              id: 3,
              title: "水果零售经营研讨会",
              image: "/placeholder.png",
              date: "2023-10-25",
              time: "10:00-16:00",
              location: "上海浦东新区",
              status: "即将开始",
              statusColor: "blue",
              description:
                "研讨会将分享水果零售行业的最新趋势和成功案例，探讨如何提升门店运营效率和客户体验。",
            },
            {
              id: 4,
              title: "水果进出口贸易对接会",
              image: "/placeholder.png",
              date: "2023-11-01",
              time: "09:30-16:30",
              location: "北京国际贸易中心",
              status: "即将开始",
              statusColor: "blue",
              description:
                "对接会将邀请国内外水果贸易商参与，提供贸易洽谈和合作机会，促进水果进出口业务发展。",
            },
            {
              id: 5,
              title: "水果冷链物流技术展",
              image: "/placeholder.png",
              date: "2023-11-05",
              time: "10:00-17:00",
              location: "成都国际会展中心",
              status: "即将开始",
              statusColor: "blue",
              description:
                "展会展示最新的水果冷链物流技术和设备，包括温控系统、包装材料、运输工具等，助力提升物流效率。",
            },
            {
              id: 6,
              title: "水果品质管理培训",
              image: "/placeholder.png",
              date: "2023-11-10",
              time: "13:30-16:30",
              location: "杭州西湖文化广场",
              status: "即将开始",
              statusColor: "blue",
              description:
                "培训将介绍水果品质管理的标准和实践，帮助您建立完善的品质管理体系，提升产品竞争力。",
            },
          ].map((event) => (
            <Card key={event.id} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
                <Badge
                  className={`absolute top-2 right-2 bg-${event.statusColor}-100 text-${event.statusColor}-800 hover:bg-${event.statusColor}-200`}
                >
                  {event.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                  <Link href={`/promotions/${event.id}`}>
                    查看详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 订阅活动通知 */}
        <div className="mt-16">
          <Card className="border-none shadow-md bg-gradient-to-r from-emerald-800 to-emerald-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">订阅活动通知</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  订阅我们的活动通知，第一时间获取最新活动信息，不错过任何商机。
                </p>
                <Button variant="secondary">立即订阅</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 