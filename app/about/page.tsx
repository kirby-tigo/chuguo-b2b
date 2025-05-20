import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Users, Award, TrendingUp, Leaf, ThumbsUp, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅 */}
      <div className="relative h-[400px] overflow-hidden">
        <Image 
          src="/placeholder.svg?height=400&width=1200&query=fruit wholesale market aerial view" 
          alt="楚果集采" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">关于楚果集采</h1>
            <p className="text-xl">连接全球优质水果产地，为批发商提供一站式采购解决方案</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* 公司简介 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">公司简介</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              楚果集采是一家专注于水果批发领域的B2B电商平台，致力于为批发商和连锁门店提供优质的水果采购服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p>
                楚果集采成立于2018年，总部位于湖北武汉，是一家专注于水果批发领域的B2B电商平台。我们致力于通过互联网技术，连接全球优质水果产地和批发商，打造高效透明的水果供应链生态系统。
              </p>
              <p>
                经过多年发展，楚果集采已建立起覆盖全国的供应网络，与500多家优质供应商达成长期合作，服务超过5万家批发商和连锁门店客户。我们提供超过2000种水果品类，月交易额突破1亿元。
              </p>
              <p>
                我们的使命是"让水果采购更简单"，通过数字化、标准化的服务，帮助批发商降低采购成本，提高运营效率，实现业务增长。未来，楚果集采将继续深耕水果批发领域，不断创新服务模式，为行业发展贡献力量。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/contact">联系我们</Link>
                </Button>
                <Button variant="outline" className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600" asChild>
                  <Link href="/suppliers">成为供应商</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image 
                src="/placeholder.svg?height=400&width=600&query=fruit wholesale business meeting" 
                alt="楚果集采团队" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
        
        {/* 发展历程 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">发展历程</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从创立至今，楚果集采不断创新发展，成为水果批发领域的领先平台
            </p>
          </div>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            
            <div className="space-y-12">
              {[
                { 
                  year: "2018年", 
                  title: "公司成立", 
                  content: "楚果集采在武汉成立，开始探索水果批发B2B模式" 
                },
                { 
                  year: "2019年", 
                  title: "业务拓展", 
                  content: "业务覆盖华中地区，与100家供应商建立合作，服务超过5000家批发商" 
                },
                { 
                  year: "2020年", 
                  title: "技术升级", 
                  content: "推出自主研发的供应链管理系统，实现订单全流程数字化管理" 
                },
                { 
                  year: "2021年", 
                  title: "全国布局", 
                  content: "业务扩展至全国主要城市，建立6个区域运营中心，月交易额突破3000万" 
                },
                { 
                  year: "2022年", 
                  title: "供应链升级", 
                  content: "建立冷链物流体系，提升配送效率和水果新鲜度，客户满意度提升30%" 
                },
                { 
                  year: "2023年", 
                  title: "战略融资", 
                  content: "完成B轮融资，估值10亿元，加速全国市场布局和技术研发投入" 
                },
              ].map((milestone, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2 px-8">
                    <div className={`${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.content}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 border-4 border-white"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 核心优势 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">核心优势</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              楚果集采凭借强大的供应链能力和专业的服务团队，为客户提供卓越的采购体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10" />,
                title: "严格的品控标准",
                content: "所有水果均经过严格的品质检测，从源头把控质量，确保每一批水果都新鲜优质。我们建立了完善的溯源体系，让您对每一个水果的来源都一目了然。"
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "规模化采购优势",
                content: "依托强大的供应链网络和规模化采购能力，我们能够为客户提供更具竞争力的价格和更稳定的供应，帮助您降低采购成本，提高经营效益。"
              },
              {
                icon: <Leaf className="h-10 w-10" />,
                title: "绿色环保理念",
                content: "我们倡导绿色环保的采购理念，优先选择使用环保包装，减少塑料使用，并支持可持续农业发展，为行业树立绿色标杆。"
              },
              {
                icon: <ThumbsUp className="h-10 w-10" />,
                title: "专业的售后服务",
                content: "我们拥有专业的客服团队，为您提供7*12小时的在线咨询服务，解决您在采购过程中遇到的各种问题，确保您的采购体验无忧顺畅。"
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "高效的物流配送",
                content: "自建冷链物流体系，确保水果在运输过程中保持最佳状态。我们承诺在确认订单后48小时内发货，让您的商品快速到达。"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "一站式解决方案",
                content: "除了优质的水果供应，我们还为客户提供门店管理系统、营销策划、品牌建设等全方位支持，帮助您的业务实现可持续发展。"
              },
            ].map((advantage, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* 团队介绍 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">管理团队</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们拥有一支经验丰富、专业高效的管理团队，致力于为客户创造最大价值
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "张志远",
                position: "创始人兼CEO",
                bio: "曾任某知名电商平台供应链总监，拥有15年水果行业经验",
                image: "/placeholder.svg?height=300&width=300&query=asian business man ceo portrait"
              },
              {
                name: "李明",
                position: "COO",
                bio: "曾任某大型农产品集团运营总监，专注供应链优化和运营管理",
                image: "/placeholder.svg?height=300&width=300&query=asian business man coo portrait"
              },
              {
                name: "王晓华",
                position: "CTO",
                bio: "前某知名科技公司技术总监，拥有丰富的B2B平台开发经验",
                image: "/placeholder.svg?height=300&width=300&query=asian business woman cto portrait"
              },
              {
                name: "赵琳",
                position: "CMO",
                bio: "曾任某知名营销机构副总裁，擅长B2B市场策略和品牌建设",
                image: "/placeholder.svg?height=300&width=300&query=asian business woman cmo portrait"
              },
            ].map((member, i) => (
              <Card key={i} className="border-none shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-emerald-600 mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* 企业文化 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">企业文化</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们的企业文化是我们的灵魂和指引，塑造着我们的行为和决策
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image 
                src="/placeholder.svg?height=400&width=600&query=diverse business team meeting in modern office" 
                alt="楚果集采企业文化" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">使命</h3>
                <p className="text-muted-foreground">让水果采购更简单，助力客户业务增长</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">愿景</h3>
                <p className="text-muted-foreground">成为中国领先的水果批发B2B平台，打造高效透明的水果供应链生态系统</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">核心价值观</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span><strong>诚信为本</strong> - 诚实守信，言行一致，是我们的立业之本</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span><strong>客户至上</strong> - 以客户需求为中心，持续创造价值</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span><strong>创新驱动</strong> - 拥\
