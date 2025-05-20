import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "@/components/ui/check"
import { ArrowLeft, CalendarDays, Clock, Tag, Gift, AlertCircle, ShoppingCart } from "lucide-react"

export default function NewCustomerPromotionPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅 */}
      <div className="relative h-[400px] overflow-hidden">
        <Image src="/new-customer-promo-banner.png" alt="新客户专享优惠" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/80 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 mb-4">限时优惠</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">新客户专享优惠</h1>
              <p className="text-xl text-white/90 mb-8">
                首次采购满5000元，立减300元。优惠活动截止到本月底，抓紧行动吧！
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-white/90">
                  立即注册
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  了解更多
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link
            href="/promotions"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回所有促销活动
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* 主要内容 */}
          <div className="space-y-8">
            {/* 活动详情 */}
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">活动详情</h2>

                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    为了感谢新客户的信任与支持，楚果集采特推出新客户专享优惠活动。首次注册并采购满5000元，即可立减300元，让您的第一次采购更加划算！
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Tag className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">优惠力度</h4>
                        <p className="text-sm text-muted-foreground">
                          首次采购满5000元，立减300元，相当于6%的优惠力度。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">活动时间</h4>
                        <p className="text-sm text-muted-foreground">即日起至本月底（2023年12月31日）</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Gift className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">额外赠送</h4>
                        <p className="text-sm text-muted-foreground">首次采购还将获赠价值200元的水果品鉴礼盒一份。</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">使用期限</h4>
                        <p className="text-sm text-muted-foreground">优惠券自注册之日起30天内有效。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 参与步骤 */}
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">参与步骤</h2>

                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-emerald-100"></div>

                    <div className="space-y-8">
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          1
                        </div>
                        <h3 className="font-semibold text-lg mb-2">注册账号</h3>
                        <p className="text-muted-foreground">在楚果集采官网完成企业账号注册，提交相关资质材料。</p>
                      </div>

                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          2
                        </div>
                        <h3 className="font-semibold text-lg mb-2">等待审核</h3>
                        <p className="text-muted-foreground">
                          我们将在1-2个工作日内完成审核，并通过短信和邮件通知您审核结果。
                        </p>
                      </div>

                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          3
                        </div>
                        <h3 className="font-semibold text-lg mb-2">领取优惠券</h3>
                        <p className="text-muted-foreground">审核通过后，300元优惠券将自动发放到您的账户中。</p>
                      </div>

                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          4
                        </div>
                        <h3 className="font-semibold text-lg mb-2">下单使用</h3>
                        <p className="text-muted-foreground">
                          在下单结算时，系统将自动应用优惠券（订单金额需满5000元）。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 活动规则 */}
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">活动规则</h2>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">本活动仅限首次注册的新客户参与，每个企业仅限使用一次。</p>
                  </div>

                  <div className="flex gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">优惠券不可与其他优惠同时使用，不可兑换现金，不设找零。</p>
                  </div>

                  <div className="flex gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">优惠券适用于平台上所有商品，但不包含运费和其他服务费用。</p>
                  </div>

                  <div className="flex gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">如有订单取消或退货，优惠券金额将一并退回，且不再补发。</p>
                  </div>

                  <div className="flex gap-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">楚果集采保留对活动的最终解释权。</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 推荐商品 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">推荐商品</h2>

              <Tabs defaultValue="popular">
                <TabsList className="mb-6">
                  <TabsTrigger value="popular">热门商品</TabsTrigger>
                  <TabsTrigger value="seasonal">当季水果</TabsTrigger>
                  <TabsTrigger value="imported">进口水果</TabsTrigger>
                </TabsList>

                <TabsContent value="popular">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "泰国金枕头榴莲",
                        price: 89,
                        unit: "kg",
                        minOrder: 10,
                        image: "/placeholder-ujsr5.png",
                      },
                      {
                        name: "智利进口车厘子",
                        price: 128,
                        unit: "kg",
                        minOrder: 5,
                        image: "/fresh-cherries.png",
                      },
                      {
                        name: "新疆阿克苏苹果",
                        price: 15.8,
                        unit: "kg",
                        minOrder: 20,
                        image: "/red-apples.png",
                      },
                    ].map((product, i) => (
                      <Card
                        key={i}
                        className="overflow-hidden group border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <Link href={`/products/${i + 1}`} className="block relative">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex justify-between items-baseline mb-2">
                              <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-emerald-600">¥{product.price}</span>
                                <span className="text-xs text-muted-foreground">/{product.unit}</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                              <span>
                                最小起订: {product.minOrder}
                                {product.unit}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                                <ShoppingCart className="h-4 w-4 mr-1" />
                                加入购物车
                              </Button>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="seasonal">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">当季水果推荐内容</p>
                  </div>
                </TabsContent>

                <TabsContent value="imported">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">进口水果推荐内容</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 优惠券 */}
            <Card className="border-none shadow-md bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
              <CardContent className="p-8">
                <div className="relative">
                  <div className="absolute -left-2 top-1/2 w-4 h-8 bg-white rounded-r-full transform -translate-y-1/2"></div>
                  <div className="absolute -right-2 top-1/2 w-4 h-8 bg-white rounded-l-full transform -translate-y-1/2"></div>

                  <div className="text-center py-6 border-2 border-dashed border-white/50 rounded-lg">
                    <p className="text-sm font-medium mb-2">新客户专享优惠券</p>
                    <div className="text-4xl font-bold mb-2">¥300</div>
                    <p className="text-xs mb-4">订单满5000元可用</p>
                    <Button variant="secondary" size="sm">
                      立即注册领取
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-sm text-white/80">
                  <div className="flex justify-between mb-2">
                    <span>有效期</span>
                    <span>注册后30天内</span>
                  </div>
                  <div className="flex justify-between">
                    <span>使用条件</span>
                    <span>首次采购满5000元</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 新客户福利 */}
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">新客户专享福利</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-muted-foreground">300元优惠券</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-muted-foreground">价值200元水果品鉴礼盒</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-muted-foreground">专属客户经理一对一服务</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-muted-foreground">免费获取行业报告一份</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-muted-foreground">首月免费使用门店管理系统</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 注册表单 */}
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">快速注册</h3>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      公司名称
                    </label>
                    <Input id="company" placeholder="请输入公司名称" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      联系人姓名
                    </label>
                    <Input id="name" placeholder="请输入联系人姓名" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      手机号码
                    </label>
                    <Input id="phone" placeholder="请输入手机号码" />
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">立即注册</Button>

                  <p className="text-xs text-muted-foreground text-center">
                    注册即表示您同意我们的
                    <Link href="/terms" className="text-emerald-600 hover:underline mx-1">
                      服务条款
                    </Link>
                    和
                    <Link href="/privacy" className="text-emerald-600 hover:underline ml-1">
                      隐私政策
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* 客服联系 */}
            <Card className="border-none shadow-md bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">有疑问？联系我们</h3>

                <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-600" />
                    <span>400-123-4567</span>
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-emerald-600" />
                    <span>service@chuguo.com</span>
                  </p>

                  <p className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-emerald-600" />
                    <span>点击右下角图标，在线咨询</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// 添加缺失的图标组件
function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
