"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Image } from "@/components/ui/image"
import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { CategoryNav } from "@/components/category-nav"
import { FeaturedProducts } from "@/components/featured-products"
import { NewArrivals } from "@/components/new-arrivals"
import { PromotionBanner } from "@/components/promotion-banner"
import { SupplierShowcase } from "@/components/supplier-showcase"
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Percent,
  Users,
  BarChart3,
  Store,
  Boxes,
  Zap,
  Clock,
  Check,
  Star,
  Quote,
  FileText,
  Phone,
  Mail,
  MessageSquare,
  Award,
  TrendingUp,
  Leaf,
  ThumbsUp,
} from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { useEffect, useState } from "react"
import { getOptimizedImageUrl, getImageSizes } from "@/lib/image-utils"

export default function Home() {
  const { isLoggedIn } = useAuth()
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    setRefreshKey((k) => k + 1)
  }, [isLoggedIn])

  return (
    <div className="min-h-screen">
      {/* 主横幅 */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-emerald-700 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
              专业的B2B水果批发平台
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              果然好忙
              <span className="block text-emerald-300">新鲜直达，品质保障</span>
            </h1>
            <p className="text-lg text-white/80 max-w-md">连接全球优质水果产地，为批发商提供一站式采购解决方案</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-white/90" asChild>
                <Link href="/products">立即采购</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white/30"
                asChild
              >
                <Link href="/register">供应商入驻</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-[500px]">
            <Image src="/premium-fruits-hero.png" alt="新鲜水果展示" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* 搜索栏和分类导航 */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <SearchBar />
          <CategoryNav />
        </div>
      </div>

      {/* 平台优势 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "品质保障",
              desc: "严格把控品质，确保每一批水果新鲜优质",
              icon: <ShieldCheck className="h-6 w-6" />,
            },
            { title: "产地直供", desc: "直接对接产地，减少中间环节，价格更优惠", icon: <Truck className="h-6 w-6" /> },
            { title: "批量优惠", desc: "批量采购享受更多优惠，满足批发需求", icon: <Percent className="h-6 w-6" /> },
            { title: "专业服务", desc: "专业团队提供一对一采购咨询和售后服务", icon: <Users className="h-6 w-6" /> },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 为什么选择我们 */}
      <div className="bg-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">为什么选择果然好忙</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们致力于为批发商和连锁门店提供最优质的水果采购体验，成为您值得信赖的长期合作伙伴
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={getOptimizedImageUrl("/fruit-quality-inspection.png", 800, 400)}
                alt="水果质量检测"
                fill
                className="object-cover"
                sizes={getImageSizes(800)}
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">严格的品控标准</h3>
                  <p className="text-muted-foreground">
                    所有水果均经过严格的品质检测，从源头把控质量，确保每一批水果都新鲜优质。我们建立了完善的溯源体系，让您对每一个水果的来源都一目了然。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">规模化采购优势</h3>
                  <p className="text-muted-foreground">
                    依托强大的供应链网络和规模化采购能力，我们能够为客户提供更具竞争力的价格和更稳定的供应，帮助您降低采购成本，提高经营效益。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">绿色环保理念</h3>
                  <p className="text-muted-foreground">
                    我们倡导绿色环保的采购理念，优先选择使用环保包装，减少塑料使用，并支持可持续农业发展，为行业树立绿色标杆。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">专业的售后服务</h3>
                  <p className="text-muted-foreground">
                    我们拥有专业的客服团队，为您提供7*12小时的在线咨询服务，解决您在采购过程中遇到的各种问题，确保您的采购体验无忧顺畅。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 连锁门店赋能 */}
      <div className="bg-gradient-to-r from-emerald-50 to-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">连锁门店赋能</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              果然好忙为连锁水果门店提供全方位的供应链解决方案，助力门店降本增效，实现业务增长
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">门店管理系统</h3>
              <p className="text-muted-foreground mb-4">
                提供专业的门店管理系统，包括库存管理、销售统计、员工管理等功能，帮助门店实现数字化运营
              </p>
              <ul className="space-y-2 mb-4">
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
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">供应链优化</h3>
              <p className="text-muted-foreground mb-4">
                整合优质供应商资源，提供高效的物流配送服务，确保门店能够以最优价格获取新鲜水果
              </p>
              <ul className="space-y-2 mb-4">
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
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">数据分析与决策</h3>
              <p className="text-muted-foreground mb-4">
                基于大数据分析，为连锁门店提供市场趋势、消费者偏好等洞察，辅助门店制定经营策略
              </p>
              <ul className="space-y-2 mb-4">
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
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px]">
              <Image src="/fruit-store-digital.png" alt="连锁门店管理" fill className="object-cover rounded-xl" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">全方位门店运营支持</h3>
              <p className="text-muted-foreground">
                除了优质的水果供应，果然好忙还为连锁门店提供运营培训、营销策划、品牌建设等全方位支持，帮助门店提升竞争力，实现可持续发展。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span>提升运营效率</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>节省管理时间</span>
                </div>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/chain-store-solution">了解更多解决方案</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 促销活动横幅 */}
      <div className="mb-16">
        <PromotionBanner />
      </div>

      {/* 精选商品 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">精选商品</h2>
            <p className="text-muted-foreground">精心挑选的优质水果，满足您的批发需求</p>
          </div>
          <Button variant="ghost" className="group" asChild>
            <Link href="/products" className="flex items-center gap-2">
              查看全部
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <FeaturedProducts />
      </div>

      {/* 新品上市 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">新品上市</h2>
            <p className="text-muted-foreground">最新上架的时令水果，抢先体验</p>
          </div>
          <Button variant="ghost" className="group" asChild>
            <Link href="/products?category=new" className="flex items-center gap-2">
              查看全部
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <NewArrivals />
      </div>

      {/* 客户评价 */}
      <div className="bg-gradient-to-r from-emerald-50 to-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">客户评价</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              听听我们的客户怎么说，他们的成功故事是我们前进的动力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "李经理",
                company: "鲜果一号连锁",
                avatar: "/diverse-business-professional.png",
                content:
                  "与果然好忙合作一年多，水果品质稳定，价格合理，最重要的是他们提供的门店管理系统大大提升了我们的运营效率，强烈推荐！",
                rating: 5,
              },
              {
                name: "张总",
                company: "果然鲜水果超市",
                avatar: "/diverse-business-people-meeting.png",
                content:
                  "作为一家拥有20多家门店的连锁企业，采购一直是我们的痛点。自从使用果然好忙平台，我们的采购成本降低了15%，果品损耗率也大幅下降。",
                rating: 5,
              },
              {
                name: "王老板",
                company: "优鲜果业",
                avatar: "/diverse-business-team.png",
                content:
                  "果然好忙的供应链服务非常专业，他们的冷链物流确保了水果的新鲜度，客户满意度明显提升。平台的数据分析功能也帮助我们更好地了解市场趋势。",
                rating: 4,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-emerald-100 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground relative z-10 pl-4">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
              asChild
            >
              <Link href="/testimonials">查看更多客户评价</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 供应商展示 */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">优质供应商</h2>
              <p className="text-muted-foreground">严选全球优质水果供应商，保障品质与服务</p>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/suppliers" className="flex items-center gap-2">
                查看全部
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <SupplierShowcase />
        </div>
      </div>

      {/* 行业资讯 */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">行业资讯</h2>
            <p className="text-muted-foreground">了解最新水果行业动态，把握市场趋势</p>
          </div>
          <Button variant="ghost" className="group" asChild>
            <Link href="/news" className="flex items-center gap-2">
              查看全部
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "2023年全球水果贸易趋势分析",
              excerpt:
                "随着全球贸易环境的变化，水果进出口市场呈现新的发展趋势。本文分析了主要水果品类的贸易数据和未来市场预测...",
              image: "/fruit-market-trends.png",
              date: "2023-10-15",
              category: "市场分析",
            },
            {
              title: "水果冷链物流技术创新与应用",
              excerpt:
                "冷链物流是保障水果新鲜度的关键环节。本文介绍了最新的水果冷链技术发展和在实际运输中的应用案例...",
              image: "/fruit-cold-chain-logistics.png",
              date: "2023-09-28",
              category: "物流技术",
            },
            {
              title: "连锁水果店经营策略与挑战",
              excerpt: "随着消费升级，水果零售行业竞争加剧。本文分享了成功水果连锁店的经营策略和应对市场挑战的方法...",
              image: "/fruit-retail-store-management.png",
              date: "2023-09-10",
              category: "零售管理",
            },
          ].map((article, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                  <Link href={`/news/${i + 1}`}>阅读全文</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 常见问题 */}
      <div className="bg-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">常见问题</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">解答您关心的问题，帮助您更好地了解果然好忙平台</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>如何注册成为果然好忙的会员？</AccordionTrigger>
                  <AccordionContent>
                    注册成为果然好忙会员非常简单。点击网站右上角的"注册"按钮，填写公司信息、联系人信息和营业执照等资料，提交审核后，我们会在1-2个工作日内完成审核，并通过短信和邮件通知您审核结果。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>平台的最小起订量是多少？</AccordionTrigger>
                  <AccordionContent>
                    不同商品的最小起订量有所不同，一般在商品详情页面会标明具体的最小起订量。作为批发平台，我们的最小起订量通常会比零售渠道高，以确保批发价格的优势。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>平台支持哪些支付方式？</AccordionTrigger>
                  <AccordionContent>
                    我们支持多种支付方式，包括银行转账、支付宝企业支付、微信支付等。对于长期合作的客户，我们还提供账期支付服务，具体可与客户经理协商。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger>如何申请成为供应商？</AccordionTrigger>
                  <AccordionContent>
                    如果您是水果种植基地或供应商，希望入驻我们的平台，可以点击首页的"供应商入驻"按钮，填写相关资质材料并提交审核。我们的供应商管理团队会对您的资质进行评估，并在5个工作日内与您联系。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>平台的配送范围和时效是怎样的？</AccordionTrigger>
                  <AccordionContent>
                    我们目前的配送范围覆盖全国主要城市。一线城市通常在下单后24小时内送达，二三线城市为48小时内送达。偏远地区可能需要72小时。具体配送时效会在下单时根据您的收货地址显示。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>如果收到的水果质量有问题，如何处理？</AccordionTrigger>
                  <AccordionContent>
                    我们对所有商品的品质都有严格把控，但如果您收到的商品确实存在质量问题，请在收货后24小时内联系客服，并提供相关照片证明。我们会根据实际情况进行退换货或赔偿处理。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
              asChild
            >
              <Link href="/faq">查看更多问题</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 联系我们 */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">联系我们</h2>
            <p className="text-muted-foreground mb-8">
              无论您是有采购需求，还是想了解更多关于我们的服务，都欢迎随时联系我们。我们的专业团队将为您提供一对一的咨询服务。
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">客服热线</h3>
                  <p className="text-muted-foreground">400-123-8888（周一至周日 9:00-18:00）</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">电子邮箱</h3>
                  <p className="text-muted-foreground">service@chuguo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">在线客服</h3>
                  <p className="text-muted-foreground">点击右下角图标，立即开始在线咨询</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">商务合作</h3>
                  <p className="text-muted-foreground">business@chuguo.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/contact">联系我们</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image src="/customer-service.png" alt="客户服务团队" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* 数据统计 */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">值得信赖的批发平台</h2>
            <p className="text-emerald-100">数以万计的批发商选择果然好忙</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "优质供应商" },
              { number: "2,000+", label: "水果品类" },
              { number: "50,000+", label: "注册批发商" },
              { number: "100万+", label: "月交易额" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
