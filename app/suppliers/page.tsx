import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination } from "@/components/pagination"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Star, MapPin, Search, Filter, CheckCircle2 } from "lucide-react"

// 供应商名称与图片路径映射
const logoMap: Record<string, string> = {
  "阳光果园": "/sunshine-orchard.jpg",
  "绿源果业": "/green-source-fruits.jpg",
  "丰收果园": "/harvest-orchard.jpg",
  "热带果品": "/tropical-fruits-logo.png",
  "果然鲜": "/truly-fresh.jpg",
  "鲜果直供": "/fresh-fruit-direct.jpg",
  "优鲜果业": "/default-supplier.jpg",
  "果香四季": "/default-supplier.jpg",
  "果之源": "/default-supplier.jpg",
}

const suppliers = [
  {
    name: "阳光果园",
    location: "海南省海口市",
    specialty: "专营热带水果，主打榴莲、芒果等",
    rating: 4.8,
    reviews: 50,
    verified: true,
    tags: ["榴莲", "芒果", "苹果"],
  },
  {
    name: "绿源果业",
    location: "山东省烟台市",
    specialty: "苹果、梨等温带水果种植基地",
    rating: 4.9,
    reviews: 60,
    verified: true,
    tags: ["苹果", "梨", "芒果"],
  },
  {
    name: "鲜果直供",
    location: "广西壮族自治区南宁市",
    specialty: "南方特色水果批发供应商",
    rating: 4.7,
    reviews: 70,
    verified: true,
    tags: ["苹果", "梨", "柑橘"],
  },
  {
    name: "丰收果园",
    location: "福建省漳州市",
    specialty: "柑橘、龙眼等水果专业供应",
    rating: 4.6,
    reviews: 80,
    verified: true,
    tags: ["柑橘", "龙眼", "苹果"],
  },
  {
    name: "果然鲜",
    location: "云南省昆明市",
    specialty: "高原特色水果种植基地",
    rating: 4.9,
    reviews: 90,
    verified: true,
    tags: ["蓝莓", "草莓", "苹果"],
  },
  {
    name: "热带果品",
    location: "广东省湛江市",
    specialty: "进口水果专业代理",
    rating: 4.8,
    reviews: 100,
    verified: true,
    tags: ["菠萝", "榴莲", "苹果"],
  },
  {
    name: "优鲜果业",
    location: "四川省成都市",
    specialty: "有机水果种植基地",
    rating: 4.7,
    reviews: 55,
    verified: false,
    tags: ["葡萄", "樱桃", "苹果"],
  },
  {
    name: "果香四季",
    location: "陕西省西安市",
    specialty: "精品水果礼盒定制",
    rating: 4.6,
    reviews: 65,
    verified: false,
    tags: ["蓝莓", "草莓", "苹果"],
  },
  {
    name: "果之源",
    location: "辽宁省大连市",
    specialty: "北方特色水果供应商",
    rating: 4.5,
    reviews: 75,
    verified: false,
    tags: ["火龙果", "猕猴桃", "苹果"],
  },
]

export default function SuppliersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">供应商目录</h1>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索供应商名称或产品..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="供应商类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有类型</SelectItem>
                  <SelectItem value="grower">种植基地</SelectItem>
                  <SelectItem value="wholesaler">批发商</SelectItem>
                  <SelectItem value="importer">进口商</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="所在地区" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部地区</SelectItem>
                  <SelectItem value="north">华北地区</SelectItem>
                  <SelectItem value="east">华东地区</SelectItem>
                  <SelectItem value="south">华南地区</SelectItem>
                  <SelectItem value="southwest">西南地区</SelectItem>
                  <SelectItem value="northwest">西北地区</SelectItem>
                  <SelectItem value="northeast">东北地区</SelectItem>
                  <SelectItem value="central">华中地区</SelectItem>
                  <SelectItem value="international">国际</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                筛选
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-emerald-200">
              认证供应商
              <button className="ml-1 hover:bg-emerald-200 rounded-full p-0.5">×</button>
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200">
              4星及以上
              <button className="ml-1 hover:bg-blue-200 rounded-full p-0.5">×</button>
            </Badge>
            <Button variant="link" size="sm" className="text-muted-foreground h-auto p-0 ml-2">
              清除全部
            </Button>
          </div>
        </div>

        {/* 供应商分类标签 */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">全部供应商</TabsTrigger>
            <TabsTrigger value="featured">推荐供应商</TabsTrigger>
            <TabsTrigger value="domestic">国内供应商</TabsTrigger>
            <TabsTrigger value="international">国际供应商</TabsTrigger>
            <TabsTrigger value="new">新入驻供应商</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* 供应商列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {suppliers.map((supplier, i) => (
                <Card key={supplier.name} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-40 bg-gradient-to-r from-emerald-500 to-emerald-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                          <Image
                            src={logoMap[supplier.name] || "/default-supplier.jpg"}
                            alt={supplier.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {i % 3 === 0 && (
                        <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600">推荐</Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{supplier.name}</h3>
                        {supplier.verified && (
                          <Badge
                            variant="outline"
                            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-200 flex items-center gap-1"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            认证
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex mr-2">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${j < Math.round(supplier.rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({supplier.reviews})</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{supplier.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{supplier.specialty}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {supplier.tags.map((fruit) => (
                          <Badge key={fruit} variant="secondary" className="bg-gray-100">
                            {fruit}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                        <Link href={`/suppliers/${i + 1}`}>查看详情</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 分页 */}
            <div className="flex justify-center">
              <Pagination />
            </div>
          </TabsContent>

          <TabsContent value="featured">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">推荐供应商</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                这些是我们精心挑选的优质供应商，他们提供最优质的水果和最可靠的服务。
              </p>
              {/* 这里可以添加推荐供应商的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="domestic">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">国内供应商</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                来自全国各地的优质水果供应商，提供新鲜当季的国产水果。
              </p>
              {/* 这里可以添加国内供应商的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="international">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">国际供应商</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                来自世界各地的水果供应商，带来异国风味的优质进口水果。
              </p>
              {/* 这里可以添加国际供应商的具体内容 */}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">新入驻供应商</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                最近加入我们平台的新供应商，带来更多新鲜选择。
              </p>
              {/* 这里可以添加新入驻供应商的具体内容 */}
            </div>
          </TabsContent>
        </Tabs>

        {/* 供应商入驻信息 */}
        <Card className="border-none shadow-sm mb-8 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">成为我们的供应商</h2>
                <p className="mb-6">
                  加入果然好忙平台，连接全国数万批发商，拓展您的销售渠道，提升品牌影响力。我们提供专业的运营支持和营销推广，帮助您实现业务增长。
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/supplier-application">立即申请入驻</Link>
                </Button>
              </div>
              <div className="hidden md:block">
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>覆盖全国的销售网络</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>专业的供应链管理系统</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>高效的物流配送服务</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>定期的营销推广活动</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>安全可靠的交易保障</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
