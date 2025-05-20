import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pagination } from "@/components/pagination"
import { Star, Quote, Search, Filter, Building, MapPin } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅 */}
      <div className="relative h-[300px] overflow-hidden">
        <Image src="/diverse-business-fruit.png" alt="客户评价" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/80 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white mb-4">客户评价</h1>
              <p className="text-xl text-white/90 mb-6">听听我们的客户怎么说，他们的成功故事是我们前进的动力</p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">500+ 满意客户</Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">4.8/5 平均评分</Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">92% 推荐率</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索客户评价..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="客户类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有客户</SelectItem>
                  <SelectItem value="chain">连锁门店</SelectItem>
                  <SelectItem value="wholesale">批发商</SelectItem>
                  <SelectItem value="supplier">供应商</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="评分" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有评分</SelectItem>
                  <SelectItem value="5">5星</SelectItem>
                  <SelectItem value="4">4星及以上</SelectItem>
                  <SelectItem value="3">3星及以上</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                筛选
              </Button>
            </div>
          </div>
        </div>

        {/* 客户评价分类标签 */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">全部评价</TabsTrigger>
            <TabsTrigger value="featured">精选评价</TabsTrigger>
            <TabsTrigger value="chain">连锁门店</TabsTrigger>
            <TabsTrigger value="wholesale">批发商</TabsTrigger>
            <TabsTrigger value="supplier">供应商</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* 精选评价 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">精选客户评价</h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    name: "张志远",
                    company: "鲜果一号连锁",
                    position: "创始人",
                    avatar: "/diverse-business-professional.png",
                    logo: "/fruit-company-logo-1.png",
                    content:
                      "作为一家拥有30多家门店的水果连锁企业，采购和供应链管理一直是我们的痛点。自从与果然好忙合作以来，我们的采购成本降低了15%，库存周转率提高了30%，极大地提升了我们的运营效率。果然好忙不仅提供优质的水果供应，还为我们提供了专业的门店管理系统和数据分析工具，帮助我们更好地了解市场趋势和消费者需求，优化商品结构，提高毛利率。他们的冷链物流确保了水果的新鲜度，客户满意度明显提升。我们非常满意与果然好忙的合作，他们是值得信赖的长期合作伙伴。",
                    rating: 5,
                    type: "chain",
                    featured: true,
                  },
                ].map((testimonial, i) => (
                  <Card key={i} className="border-none shadow-md">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
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
                              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                              <Image
                                src={testimonial.logo || "/placeholder.svg"}
                                alt={testimonial.company}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{testimonial.company}</p>
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

                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Building className="h-4 w-4" />
                            <span>连锁门店</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>广东省广州市</span>
                          </div>
                        </div>

                        <div className="md:w-2/3">
                          <div className="relative">
                            <Quote className="h-10 w-10 text-emerald-100 absolute -top-2 -left-2" />
                            <p className="text-muted-foreground relative z-10 pl-6">{testimonial.content}</p>
                          </div>

                          {testimonial.featured && (
                            <div className="mt-6 flex justify-end">
                              <Button
                                variant="outline"
                                className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
                              >
                                查看详细案例
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 更多客户评价 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">更多客户评价</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "李明",
                    company: "果然鲜水果超市",
                    position: "采购总监",
                    avatar: "/diverse-business-people-meeting.png",
                    content:
                      "果然好忙的供应链服务非常专业，他们的冷链物流确保了水果的新鲜度，客户满意度明显提升。平台的数据分析功能也帮助我们更好地了解市场趋势。",
                    rating: 5,
                    type: "chain",
                  },
                  {
                    name: "王晓华",
                    company: "优鲜果业",
                    position: "运营经理",
                    avatar: "/diverse-business-team.png",
                    content:
                      "作为一家拥有20多家门店的连锁企业，采购一直是我们的痛点。自从使用果然好忙平台，我们的采购成本降低了15%，果品损耗率也大幅下降。",
                    rating: 5,
                    type: "chain",
                  },
                  {
                    name: "赵琳",
                    company: "鲜果汇",
                    position: "CEO",
                    avatar: "/asian-business-woman-portrait.png",
                    content:
                      "与果然好忙合作一年多，水果品质稳定，价格合理，最重要的是他们提供的门店管理系统大大提升了我们的运营效率，强烈推荐！",
                    rating: 5,
                    type: "chain",
                  },
                  {
                    name: "陈强",
                    company: "果鲜多",
                    position: "采购经理",
                    avatar: "/asian-businessman-portrait.png",
                    content:
                      "果然好忙的产品种类丰富，质量有保障，价格也很合理。他们的订单处理速度快，物流配送及时，是值得信赖的合作伙伴。",
                    rating: 4,
                    type: "wholesale",
                  },
                  {
                    name: "刘芳",
                    company: "绿源果业",
                    position: "销售总监",
                    avatar: "/placeholder-y9fx7.png",
                    content:
                      "作为供应商，我们非常认可果然好忙的专业性和诚信。平台帮助我们对接了更多的客户，扩大了销售渠道，提高了品牌知名度。",
                    rating: 5,
                    type: "supplier",
                  },
                  {
                    name: "张伟",
                    company: "果鲜达",
                    position: "总经理",
                    avatar: "/asian-businessman-portrait-2.png",
                    content:
                      "果然好忙的平台非常易用，订单管理、库存查询、数据分析等功能一应俱全，大大提高了我们的工作效率。客服团队响应迅速，服务态度好。",
                    rating: 4,
                    type: "wholesale",
                  },
                  {
                    name: "周丽",
                    company: "鲜果家族",
                    position: "店长",
                    avatar: "/placeholder.svg?height=100&width=100&query=asian business woman portrait 3",
                    content:
                      "果然好忙提供的水果品质上乘，我们的顾客非常满意。他们的会员管理系统也帮助我们提高了客户粘性和复购率。",
                    rating: 5,
                    type: "chain",
                  },
                  {
                    name: "黄磊",
                    company: "果然好",
                    position: "创始人",
                    avatar: "/placeholder.svg?height=100&width=100&query=asian business man portrait 3",
                    content:
                      "果然好忙的供应链管理非常高效，从下单到配送，全程透明可追踪。他们的产品质量稳定，价格有竞争力，是理想的合作伙伴。",
                    rating: 4,
                    type: "wholesale",
                  },
                  {
                    name: "孙明",
                    company: "阳光果园",
                    position: "运营总监",
                    avatar: "/placeholder.svg?height=100&width=100&query=asian business man portrait 4",
                    content:
                      "通过果然好忙平台，我们的产品能够直接对接终端客户，减少了中间环节，提高了利润率。平台的结算也很及时，解决了我们的资金周转问题。",
                    rating: 5,
                    type: "supplier",
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
                          <p className="text-xs text-muted-foreground">{testimonial.position}</p>
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
                        <p className="text-muted-foreground relative z-10 pl-4 line-clamp-4">{testimonial.content}</p>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700">
                          阅读全文
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

          <TabsContent value="featured">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">精选客户评价</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                这些是我们精选的客户成功案例，展示了果然好忙如何帮助客户解决问题，提升业绩。
              </p>
              {/* 这里可以添加精选评价的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="chain">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">连锁门店评价</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                来自水果连锁门店客户的真实评价，了解我们如何帮助他们提升运营效率，降低成本。
              </p>
              {/* 这里可以添加连锁门店评价的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="wholesale">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">批发商评价</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                来自批发商客户的真实评价，了解我们如何帮助他们拓展业务，提高效率。
              </p>
              {/* 这里可以添加批发商评价的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="supplier">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">供应商评价</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                来自供应商合作伙伴的真实评价，了解我们如何帮助他们拓展销售渠道，提高品牌影响力。
              </p>
              {/* 这里可以添加供应商评价的具体内容 */}
            </div>
          </TabsContent>
        </Tabs>

        {/* 视频评价 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">视频评价</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "张志远",
                company: "鲜果一号连锁",
                position: "创始人",
                thumbnail: "/placeholder.svg?height=200&width=300&query=business interview video thumbnail",
                duration: "3:45",
              },
              {
                name: "李明",
                company: "果然鲜水果超市",
                position: "采购总监",
                thumbnail: "/placeholder.svg?height=200&width=300&query=business testimonial video thumbnail",
                duration: "2:30",
              },
              {
                name: "王晓华",
                company: "优鲜果业",
                position: "运营经理",
                thumbnail: "/placeholder.svg?height=200&width=300&query=customer review video thumbnail",
                duration: "4:12",
              },
            ].map((video, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`${video.name} 视频评价`}
                    width={400}
                    height={225}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-emerald-600 border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{video.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {video.company} | {video.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 分享您的故事 */}
        <div className="bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">分享您的故事</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            如果您是果然好忙的客户，我们很乐意听到您的使用体验和成功故事。您的反馈将帮助我们不断改进服务，也可能帮助其他企业解决类似的挑战。
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700">提交您的评价</Button>
        </div>
      </div>
    </div>
  )
}
