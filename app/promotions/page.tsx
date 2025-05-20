import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search-bar"
import { FeaturedProducts } from "@/components/featured-products"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, ArrowRight, Tag, Percent, Gift } from "lucide-react"

export default function PromotionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">促销活动</h1>

        {/* 搜索栏 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <SearchBar />
        </div>

        {/* 活动分类标签 */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">全部活动</TabsTrigger>
            <TabsTrigger value="seasonal">季节特惠</TabsTrigger>
            <TabsTrigger value="clearance">清仓特卖</TabsTrigger>
            <TabsTrigger value="new-customer">新客专享</TabsTrigger>
            <TabsTrigger value="bulk">批量优惠</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* 主要促销活动 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  id: 1,
                  title: "新客户专享优惠",
                  description: "首次采购满5000元，立减300元。优惠活动截止到本月底，抓紧行动吧！",
                  image: "/fruit-wholesale-coupon.png",
                  discount: "立减300元",
                  endDate: "2023-12-31",
                  type: "new-customer",
                  color: "from-emerald-800 to-emerald-600",
                },
                {
                  id: 2,
                  title: "夏季水果节",
                  description: "精选夏季热带水果，满1000减100，满2000减300，多买多省！",
                  image: "/summer-fruit-festival.png",
                  discount: "满2000减300",
                  endDate: "2023-08-31",
                  type: "seasonal",
                  color: "from-blue-800 to-blue-600",
                },
              ].map((promo) => (
                <Card key={promo.id} className="overflow-hidden border-none shadow-md">
                  <div className="relative h-[200px]">
                    <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-cover" />
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r opacity-90 p-6 flex flex-col justify-between text-white"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--${promo.color.split(" ")[0]}-color), var(--${promo.color.split(" ")[2]}-color))`,
                      }}
                    >
                      <div>
                        <Badge className="bg-white/20 hover:bg-white/30 mb-2">
                          {promo.type === "new-customer" ? "新客专享" : "季节特惠"}
                        </Badge>
                        <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
                        <p className="text-white/90">{promo.description}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center text-sm">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          <span>截止日期: {promo.endDate}</span>
                        </div>
                        <Button variant="secondary" size="sm" asChild>
                          <Link href={`/promotions/${promo.id}`}>查看详情</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* 其他促销活动 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  id: 3,
                  title: "进口水果清仓",
                  description: "精选进口水果特价清仓，低至5折起，数量有限，先到先得！",
                  icon: <Tag className="h-10 w-10" />,
                  discount: "低至5折",
                  endDate: "2023-07-15",
                  color: "bg-red-100 text-red-600",
                },
                {
                  id: 4,
                  title: "批发商专享折扣",
                  description: "单笔订单满10000元，享受额外9.5折优惠，长期有效。",
                  icon: <Percent className="h-10 w-10" />,
                  discount: "9.5折",
                  endDate: "长期有效",
                  color: "bg-amber-100 text-amber-600",
                },
                {
                  id: 5,
                  title: "会员积分兑换",
                  description: "使用积分兑换精美礼品或抵扣订单金额，100积分=10元。",
                  icon: <Gift className="h-10 w-10" />,
                  discount: "积分兑换",
                  endDate: "长期有效",
                  color: "bg-purple-100 text-purple-600",
                },
              ].map((promo) => (
                <Card key={promo.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${promo.color} flex items-center justify-center mb-4`}>
                      {promo.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                    <p className="text-muted-foreground mb-4">{promo.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{promo.endDate}</span>
                      </div>
                      <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                        <Link href={`/promotions/${promo.id}`} className="flex items-center">
                          查看详情
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 促销商品 */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">促销商品</h2>
                <Button
                  variant="outline"
                  className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
                  asChild
                >
                  <Link href="/products?promotion=true">查看全部</Link>
                </Button>
              </div>
              <FeaturedProducts />
            </div>
          </TabsContent>

          <TabsContent value="seasonal">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">季节特惠活动</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                根据时令精选当季最新鲜的水果，为您提供最优惠的价格和最佳的品质体验。
              </p>
              {/* 这里可以添加季节特惠的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="clearance">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">清仓特卖</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                精选商品限时特价清仓，低至5折起，数量有限，先到先得！
              </p>
              {/* 这里可以添加清仓特卖的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="new-customer">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">新客户专享</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                首次采购专享优惠，帮助您以更低的成本开始与我们的合作。
              </p>
              {/* 这里可以添加新客户专享的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="bulk">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">批量优惠</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                大批量采购专享折扣，采购越多，优惠越多，助力您的业务发展。
              </p>
              {/* 这里可以添加批量优惠的具体内容 */}
            </div>
          </TabsContent>
        </Tabs>

        {/* 促销活动规则 */}
        <Card className="border-none shadow-sm mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">活动规则说明</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>1. 所有促销活动均有特定的有效期，请在有效期内参与。</p>
              <p>2. 部分活动可能有最低订单金额要求，详情请查看具体活动说明。</p>
              <p>3. 促销优惠不可与其他优惠同时使用，系统将自动应用最优惠的方案。</p>
              <p>4. 如遇特殊情况，平台保留对活动进行调整或终止的权利。</p>
              <p>5. 如有任何疑问，请联系客服热线：400-123-4567。</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
