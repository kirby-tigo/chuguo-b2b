import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check } from "@/components/ui/check"
import {
  Store,
  Boxes,
  BarChart3,
  Truck,
  Users,
  ShieldCheck,
  Smartphone,
  Zap,
  Clock,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react"

export default function ChainStoreSolutionPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅 */}
      <div className="relative h-[400px] overflow-hidden">
        <Image src="/fruit-store-management-dashboard.png" alt="连锁门店解决方案" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/80 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 mb-4">连锁门店赋能</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">全方位连锁门店解决方案</h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                从供应链优化到数字化运营，果然好忙为水果连锁门店提供一站式解决方案，助力您的业务增长
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-white/90">
                  预约演示
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  联系顾问
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 解决方案概述 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">解决方案概述</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              果然好忙为连锁水果门店提供全方位的供应链和运营解决方案，帮助您降本增效，实现业务增长
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <Boxes className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">供应链优化</h3>
                <p className="text-muted-foreground mb-4">
                  整合优质供应商资源，提供高效的物流配送服务，确保门店能够以最优价格获取新鲜水果
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    集中采购优势
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    冷链物流配送
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    季节性产品规划
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">门店管理系统</h3>
                <p className="text-muted-foreground mb-4">
                  提供专业的门店管理系统，包括库存管理、销售统计、员工管理等功能，帮助门店实现数字化运营
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    实时库存监控
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    销售数据分析
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    员工绩效管理
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">数据分析与决策</h3>
                <p className="text-muted-foreground mb-4">
                  基于大数据分析，为连锁门店提供市场趋势、消费者偏好等洞察，辅助门店制定经营策略
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    市场趋势分析
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    消费者行为洞察
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Check className="h-3 w-3" />
                    </div>
                    智能补货建议
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 解决方案详情 */}
        <div className="mb-16">
          <Tabs defaultValue="supply-chain" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto p-0 bg-transparent mb-8">
              <TabsTrigger
                value="supply-chain"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                供应链优化
              </TabsTrigger>
              <TabsTrigger
                value="store-management"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                门店管理系统
              </TabsTrigger>
              <TabsTrigger
                value="data-analysis"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                数据分析与决策
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:border-emerald-600 border-b-2 border-transparent rounded-none py-3"
              >
                营销与会员管理
              </TabsTrigger>
            </TabsList>

            <TabsContent value="supply-chain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">供应链优化解决方案</h3>
                  <p className="text-muted-foreground">
                    果然好忙整合全国优质水果产地资源，建立高效的供应链网络，为连锁门店提供稳定、优质、价格合理的水果供应。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">冷链物流配送</h4>
                        <p className="text-sm text-muted-foreground">
                          自建冷链物流体系，确保水果在运输过程中保持最佳状态，减少损耗，提高商品质量。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">品质溯源体系</h4>
                        <p className="text-sm text-muted-foreground">
                          建立完善的产品溯源体系，从种植、采摘到配送全程可追溯，确保食品安全。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Boxes className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">集中采购优势</h4>
                        <p className="text-sm text-muted-foreground">
                          利用规模化采购优势，降低采购成本，为连锁门店提供更具竞争力的价格。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">了解详细供应链方案</Button>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/fruit-cold-storage-logistics.png" alt="供应链优化" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="store-management">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/placeholder-3mc4y.png" alt="门店管理系统" fill className="object-cover" />
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl font-bold">门店管理系统</h3>
                  <p className="text-muted-foreground">
                    果然好忙提供专业的门店管理系统，帮助连锁门店实现数字化运营，提高管理效率，降低运营成本。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Store className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">库存管理</h4>
                        <p className="text-sm text-muted-foreground">
                          实时监控库存状态，自动生成补货建议，避免缺货和积压，优化库存结构。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">员工管理</h4>
                        <p className="text-sm text-muted-foreground">
                          员工排班、绩效考核、培训管理等功能，提高员工工作效率和服务质量。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">销售分析</h4>
                        <p className="text-sm text-muted-foreground">
                          多维度销售数据分析，帮助门店了解销售趋势，优化商品结构和定价策略。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">申请系统演示</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data-analysis">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">数据分析与决策支持</h3>
                  <p className="text-muted-foreground">
                    果然好忙利用大数据技术，为连锁门店提供市场趋势、消费者偏好等洞察，辅助门店制定经营策略。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">市场趋势分析</h4>
                        <p className="text-sm text-muted-foreground">
                          分析水果市场价格走势、消费趋势，帮助门店把握市场机会，调整经营策略。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">消费者行为洞察</h4>
                        <p className="text-sm text-muted-foreground">
                          分析消费者购买习惯、偏好，帮助门店优化商品结构，提升客户满意度。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Boxes className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">智能补货建议</h4>
                        <p className="text-sm text-muted-foreground">
                          基于历史销售数据、季节因素、市场趋势等，生成智能补货建议，优化库存管理。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">获取数据分析样例</Button>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=business data analytics dashboard charts fruit market"
                    alt="数据分析与决策"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=fruit store marketing campaign customer loyalty program"
                    alt="营销与会员管理"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl font-bold">营销与会员管理</h3>
                  <p className="text-muted-foreground">
                    果然好忙提供全方位的营销支持和会员管理系统，帮助连锁门店提升品牌影响力，增强客户粘性。
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">会员管理系统</h4>
                        <p className="text-sm text-muted-foreground">
                          完善的会员管理系统，支持会员积分、等级、权益管理，提升客户忠诚度。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">营销活动支持</h4>
                        <p className="text-sm text-muted-foreground">
                          提供营销策划、活动执行、效果评估等全流程支持，帮助门店提升销售业绩。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">社群营销</h4>
                        <p className="text-sm text-muted-foreground">
                          帮助门店建立和运营微信群、公众号等社群，增强客户互动，提升复购率。
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">了解营销解决方案</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* 成功案例 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">成功案例</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">来看看我们的解决方案如何帮助连锁门店实现业务增长</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "鲜果一号连锁",
                logo: "/placeholder.svg?height=80&width=80&query=fruit store logo 1",
                content:
                  "通过果然好忙的供应链优化和门店管理系统，我们的采购成本降低了15%，库存周转率提高了30%，门店运营效率显著提升。",
                person: "李经理",
                position: "运营总监",
              },
              {
                company: "果然鲜水果超市",
                logo: "/placeholder.svg?height=80&width=80&query=fruit store logo 2",
                content:
                  "果然好忙的数据分析系统帮助我们更好地了解消费者需求，优化了商品结构，提高了毛利率，同时会员管理系统增强了客户粘性。",
                person: "张总",
                position: "创始人",
              },
              {
                company: "优鲜果业",
                logo: "/placeholder.svg?height=80&width=80&query=fruit store logo 3",
                content:
                  "作为一家拥有30多家门店的连锁企业，果然好忙的解决方案帮助我们实现了标准化管理，提高了品牌影响力，业务实现了快速增长。",
                person: "王老板",
                position: "CEO",
              },
            ].map((case_, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <Image src={case_.logo || "/placeholder.svg"} alt={case_.company} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{case_.company}</h3>
                      <p className="text-sm text-muted-foreground">
                        {case_.person} | {case_.position}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">"{case_.content}"</p>

                  <Button
                    variant="outline"
                    className="w-full border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
                  >
                    查看详细案例
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 解决方案优势 */}
        <div className="mb-16 bg-emerald-50 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">选择我们的优势</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">果然好忙为连锁门店提供的解决方案具有哪些独特优势</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Boxes className="h-6 w-6" />,
                title: "一站式解决方案",
                description: "从供应链到门店管理，从营销到数据分析，提供全方位的解决方案，满足连锁门店的各种需求。",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "提升运营效率",
                description: "通过数字化工具和流程优化，帮助门店提高运营效率，节省管理时间和成本。",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "数据驱动决策",
                description: "基于大数据分析，提供市场洞察和决策支持，帮助门店制定更科学的经营策略。",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "专业服务团队",
                description: "拥有专业的服务团队，提供实施培训、技术支持和运营指导，确保解决方案落地见效。",
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
            <p className="text-muted-foreground max-w-2xl mx-auto">了解更多关于我们连锁门店解决方案的常见问题</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "解决方案适合什么规模的连锁门店？",
                answer:
                  "我们的解决方案适合各种规模的连锁门店，从3-5家门店的小型连锁到50家以上的大型连锁，我们都有相应的解决方案。系统可根据企业规模和需求进行定制，确保适合您的业务发展阶段。",
              },
              {
                question: "实施解决方案需要多长时间？",
                answer:
                  "一般情况下，基础解决方案的实施周期为2-4周，包括系统部署、数据导入、人员培训等环节。完整解决方案的实施可能需要1-3个月，具体取决于企业规模和需求复杂度。我们会提供专业的实施团队，确保顺利过渡。",
              },
              {
                question: "如何保证水果的新鲜度和品质？",
                answer:
                  "我们建立了严格的品控体系和冷链物流网络，从源头把控质量，确保水果新鲜度。同时，我们的系统支持全程溯源，让您对每一批水果的来源和质量都一目了然。如果出现质量问题，我们有完善的售后处理机制。",
              },
              {
                question: "解决方案的费用是如何计算的？",
                answer:
                  "费用根据企业规模和选择的模块不同而有所差异。我们提供基础版、标准版和企业版三种套餐，您可以根据自身需求选择。我们也支持按月/按年付费的模式，降低初期投入。详细价格请联系我们的销售顾问获取定制方案。",
              },
              {
                question: "是否提供技术支持和培训？",
                answer:
                  "是的，我们提供全方位的技术支持和培训服务。包括系统使用培训、运营指导、技术问题解答等。我们有专业的客服团队，提供7*12小时的在线支持，确保您的业务顺利运行。",
              },
              {
                question: "如何开始使用果然好忙的解决方案？",
                answer:
                  "您可以通过官网预约演示，或直接联系我们的销售顾问。我们会安排专人了解您的需求，提供定制化的解决方案建议，并安排系统演示。确认合作后，我们会制定详细的实施计划，确保顺利上线。",
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
              <p className="mb-6">联系我们的解决方案顾问，获取针对您连锁门店的定制化方案和报价</p>

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
                    <p>solution@chuguo.com</p>
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
                  预约演示
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  下载方案手册
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] md:h-auto">
              <Image
                src="/placeholder.svg?height=500&width=600&query=business meeting fruit store chain management consultation"
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
