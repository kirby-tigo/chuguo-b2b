import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check } from "@/components/ui/check"
import {
  Store,
  BarChart3,
  Users,
  Smartphone,
  ShoppingBag,
  Truck,
  Calendar,
  Zap,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react"

export default function StoreOperationSupportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅 */}
      <div className="relative h-[400px] overflow-hidden">
        <Image src="/fruit-store-digital.png" alt="全方位门店运营支持" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/80 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 mb-4">连锁门店赋能</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">全方位门店运营支持</h1>
              <p className="text-xl text-white/90 mb-8">
                除了优质的水果供应，果然好忙还为连锁门店提供运营培训、营销策划、品牌建设等全方位支持，帮助门店提升竞争力，实现可持续发展。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-white/90">
                  预约咨询
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  查看成功案例
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 运营支持概述 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">运营支持概述</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              果然好忙为连锁水果门店提供全方位的运营支持，帮助门店提升运营效率，降低成本，增加收益
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">门店运营培训</h3>
                <p className="text-muted-foreground mb-4">
                  提供专业的门店运营培训，包括商品陈列、库存管理、员工培训等，帮助门店提升运营效率和顾客体验。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    商品陈列与展示
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    库存周转管理
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    员工技能培训
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">营销策划支持</h3>
                <p className="text-muted-foreground mb-4">
                  提供专业的营销策划支持，包括促销活动设计、节日营销、会员营销等，帮助门店吸引顾客，提升销售。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    促销活动设计
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    节日营销方案
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    会员营销策略
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">品牌建设支持</h3>
                <p className="text-muted-foreground mb-4">
                  提供专业的品牌建设支持，包括品牌定位、视觉形象设计、门店装修指导等，帮助门店打造差异化竞争优势。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    品牌定位咨询
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    视觉形象设计
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    门店装修指导
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">数字化转型支持</h3>
                <p className="text-muted-foreground mb-4">
                  提供专业的数字化转型支持，包括小程序开发、线上商城搭建、数字营销等，帮助门店拓展线上渠道，实现全渠道经营。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    小程序开发
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    线上商城搭建
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    数字营销指导
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 运营支持详情 */}
        <div className="mb-16">
          <Tabs defaultValue="store-operation" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto p-0 bg-transparent mb-8">
              <TabsTrigger
                value="store-operation"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                门店运营培训
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                营销策划支持
              </TabsTrigger>
              <TabsTrigger
                value="branding"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                品牌建设支持
              </TabsTrigger>
              <TabsTrigger
                value="digital"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                数字化转型支持
              </TabsTrigger>
            </TabsList>

            <TabsContent value="store-operation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">门店运营培训</h3>
                  <p className="text-muted-foreground">
                    果然好忙提供专业的门店运营培训，帮助连锁门店提升运营效率，降低成本，提高顾客满意度。我们的培训内容涵盖商品陈列、库存管理、员工培训等多个方面，由行业资深专家授课，结合实际案例，确保培训内容落地有效。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">商品陈列与展示</h4>
                        <p className="text-sm text-muted-foreground">
                          教授科学的商品陈列方法，提高商品展示效果，增加顾客购买欲望，提升单店销售额。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">库存周转管理</h4>
                        <p className="text-sm text-muted-foreground">
                          传授高效的库存管理方法，优化库存结构，提高周转率，降低损耗，提升利润率。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">员工技能培训</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的员工培训，包括水果知识、客户服务、销售技巧等，提升员工专业素养和服务水平。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">了解培训详情</Button>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/fruit-store-training.png" alt="门店运营培训" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/fruit-store-promotion.png" alt="营销策划支持" fill className="object-cover" />
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl font-bold">营销策划支持</h3>
                  <p className="text-muted-foreground">
                    果然好忙提供专业的营销策划支持，帮助连锁门店吸引顾客，提升销售。我们的营销团队拥有丰富的水果零售行业经验，能够根据不同门店的特点和目标客群，定制有效的营销方案。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">促销活动设计</h4>
                        <p className="text-sm text-muted-foreground">
                          设计吸引力强、转化率高的促销活动，包括价格促销、搭配促销、会员促销等多种形式。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">节日营销方案</h4>
                        <p className="text-sm text-muted-foreground">
                          根据不同节日特点，设计主题鲜明、吸引力强的节日营销方案，提升节日期间销售业绩。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">会员营销策略</h4>
                        <p className="text-sm text-muted-foreground">
                          设计科学的会员体系和营销策略，提高客户粘性和复购率，增加客户终身价值。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">查看营销案例</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="branding">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">品牌建设支持</h3>
                  <p className="text-muted-foreground">
                    果然好忙提供专业的品牌建设支持，帮助连锁门店打造差异化竞争优势。我们的品牌团队拥有丰富的品牌建设经验，能够从品牌定位、视觉形象、门店装修等多个维度，提供全方位的品牌建设支持。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">品牌定位咨询</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的品牌定位咨询服务，帮助门店明确目标客群、核心价值主张和品牌差异化优势。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">视觉形象设计</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的视觉形象设计服务，包括logo设计、色彩系统、宣传物料等，打造统一的品牌视觉形象。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Store className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">门店装修指导</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的门店装修指导，包括空间规划、陈列设计、灯光设计等，打造舒适的购物环境和统一的品牌形象。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">查看品牌案例</Button>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/modern-fruit-store.png" alt="品牌建设支持" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=fruit store digital transformation mobile app"
                    alt="数字化转型支持"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl font-bold">数字化转型支持</h3>
                  <p className="text-muted-foreground">
                    果然好忙提供专业的数字化转型支持，帮助连锁门店拓展线上渠道，实现全渠道经营。我们的数字化团队拥有丰富的互联网和零售行业经验，能够为门店提供全方位的数字化转型支持。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">小程序开发</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的小程序开发服务，帮助门店快速搭建线上销售渠道，实现线上下单、配送到家等功能。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">线上商城搭建</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的线上商城搭建服务，帮助门店建立自己的线上销售平台，减少对第三方平台的依赖。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">数字营销指导</h4>
                        <p className="text-sm text-muted-foreground">
                          提供专业的数字营销指导，包括社交媒体营销、内容营销、社群营销等，帮助门店提升线上曝光和转化。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">了解数字化方案</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* 成功案例 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">成功案例</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              看看我们的运营支持如何帮助连锁门店提升业绩，实现可持续发展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "鲜果一号连锁",
                logo: "/placeholder.svg?height=80&width=80&query=fruit store logo 1",
                content: "通过果然好忙的运营支持，我们的门店客流量提升了30%，客单价提升了20%，整体销售额提升了50%。",
                person: "李经理",
                position: "运营总监",
                image: "/placeholder.svg?height=200&width=300&query=modern fruit store interior customers shopping",
              },
              {
                company: "果然鲜水果超市",
                logo: "/placeholder.svg?height=80&width=80&query=fruit store logo 2",
                content:
                  "果然好忙的品牌建设支持帮助我们重新定位品牌，打造了全新的视觉形象，门店改造后，销售额提升了40%。",
                person: "张总",
                position: "创始人",
                image: "/placeholder.svg?height=200&width=300&query=fruit store brand redesign before after",
              },
              {
                company: "优鲜果业",
                logo: "/placeholder.svg?height=80&width=80&query=fruit store logo 3",
                content: "通过果然好忙的数字化转型支持，我们成功上线了小程序和线上商城，线上销售额占比从0提升到了30%。",
                person: "王老板",
                position: "CEO",
                image: "/placeholder.svg?height=200&width=300&query=fruit store mobile app online shopping",
              },
            ].map((case_, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={case_.image || "/placeholder.svg"} alt={case_.company} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                      <Image src={case_.logo || "/placeholder.svg"} alt={case_.company} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{case_.company}</h3>
                      <p className="text-sm text-muted-foreground">
                        {case_.person} | {case_.position}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3">"{case_.content}"</p>

                  <Button
                    variant="link"
                    className="p-0 h-auto text-emerald-600 hover:text-emerald-700 flex items-center"
                  >
                    查看详情
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-emerald-600 hover:bg-emerald-700">查看更多案例</Button>
          </div>
        </div>

        {/* 运营支持优势 */}
        <div className="mb-16 bg-emerald-50 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">我们的优势</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">果然好忙的运营支持具有哪些独特优势</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "专业团队",
                description:
                  "我们的运营支持团队由行业资深专家组成，拥有丰富的水果零售行业经验，能够提供专业的运营支持。",
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "定制方案",
                description: "我们根据不同门店的特点和需求，提供定制化的运营支持方案，确保方案的针对性和有效性。",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "全程陪伴",
                description: "我们提供从方案设计到执行落地的全程陪伴服务，确保运营支持方案能够有效落地实施。",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "数据驱动",
                description: "我们基于数据分析，提供科学的运营决策支持，帮助门店实现精细化运营和持续优化。",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "快速响应",
                description: "我们提供7*12小时的专业咨询服务，确保门店在运营过程中遇到的问题能够得到及时解决。",
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: "成效保障",
                description: "我们承诺运营支持的效果，如果未达到预期目标，我们将提供免费的方案调整和优化服务。",
              },
            ].map((advantage, i) => (
              <Card key={i} className="border-none shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">常见问题</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">了解更多关于我们运营支持的常见问题</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "运营支持服务的收费标准是什么？",
                answer:
                  "我们的运营支持服务根据门店规模和需求不同，收费标准也不同。基础运营培训服务包含在供应链服务中，免费提供。定制化的营销策划、品牌建设和数字化转型服务则根据具体需求单独报价。我们也提供包年服务套餐，性价比更高。详细价格请联系我们的客户经理获取。",
              },
              {
                question: "如何开始使用运营支持服务？",
                answer:
                  "您可以通过官网预约咨询，或直接联系我们的客户经理。我们会安排专业的运营顾问与您沟通，了解您的具体需求和痛点，然后提供定制化的运营支持方案。确认合作后，我们会制定详细的实施计划，并指派专人负责跟进服务的落地实施。",
              },
              {
                question: "运营支持服务适合什么规模的门店？",
                answer:
                  "我们的运营支持服务适合各种规模的连锁门店，从3-5家门店的小型连锁到50家以上的大型连锁，我们都有相应的解决方案。我们会根据门店的规模和需求，提供定制化的运营支持方案，确保方案的针对性和有效性。",
              },
              {
                question: "运营支持服务的实施周期是多久？",
                answer:
                  "不同类型的运营支持服务实施周期不同。基础运营培训通常在1-2周内完成，营销策划支持根据活动复杂度，通常在2-4周内完成，品牌建设支持通常在1-3个月内完成，数字化转型支持通常在3-6个月内完成。具体实施周期会根据门店的实际情况和需求进行调整。",
              },
              {
                question: "如何衡量运营支持服务的效果？",
                answer:
                  "我们会与客户共同设定明确的KPI指标，如客流量、客单价、销售额、毛利率等，定期跟踪和评估服务效果。我们也提供详细的数据分析报告，帮助客户了解服务带来的具体改善。如果未达到预期目标，我们将提供免费的方案调整和优化服务。",
              },
              {
                question: "是否提供持续的运营指导？",
                answer:
                  "是的，我们提供持续的运营指导服务。除了一次性的培训和咨询外，我们还提供定期的运营诊断、数据分析和优化建议，帮助门店持续提升运营水平。我们也有专业的客服团队，提供7*12小时的在线支持，解答门店在日常运营中遇到的各种问题。",
              },
            ].map((faq, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">准备开始？</h2>
              <p className="mb-6">联系我们的运营顾问，获取针对您门店的定制化运营支持方案</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">电话咨询</h3>
                    <p>400-123-4567（周一至周日 9:00-18:00）</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">邮件咨询</h3>
                    <p>operation@chuguo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">在线咨询</h3>
                    <p>点击右下角图标，立即开始在线咨询</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="secondary" size="lg">
                  预约咨询
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  下载服务手册
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] md:h-auto">
              <Image
                src="/placeholder.svg?height=500&width=600&query=business meeting fruit store operation consultation"
                alt="联系我们"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
