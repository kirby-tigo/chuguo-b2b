import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Image } from "@/components/ui/image"
import { Star, MapPin, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// 供应商数据，与列表页保持一致
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
    id: 1,
    name: "阳光果园",
    location: "海南省海口市",
    specialty: "专营热带水果，主打榴莲、芒果等",
    rating: 4.8,
    reviews: 50,
    verified: true,
    tags: ["榴莲", "芒果", "苹果"],
    intro: "海南本地大型热带水果种植基地，品质保障，量大从优。",
  },
  {
    id: 2,
    name: "绿源果业",
    location: "山东省烟台市",
    specialty: "苹果、梨等温带水果种植基地",
    rating: 4.9,
    reviews: 60,
    verified: true,
    tags: ["苹果", "梨", "芒果"],
    intro: "烟台苹果核心产区，供应全国各地，支持定制包装。",
  },
  {
    id: 3,
    name: "鲜果直供",
    location: "广西壮族自治区南宁市",
    specialty: "南方特色水果批发供应商",
    rating: 4.7,
    reviews: 70,
    verified: true,
    tags: ["苹果", "梨", "柑橘"],
    intro: "广西直采，物流高效，水果新鲜直达。",
  },
  {
    id: 4,
    name: "丰收果园",
    location: "福建省漳州市",
    specialty: "柑橘、龙眼等水果专业供应",
    rating: 4.6,
    reviews: 80,
    verified: true,
    tags: ["柑橘", "龙眼", "苹果"],
    intro: "福建优质水果产地，批发零售均可。",
  },
  {
    id: 5,
    name: "果然鲜",
    location: "云南省昆明市",
    specialty: "高原特色水果种植基地",
    rating: 4.9,
    reviews: 90,
    verified: true,
    tags: ["蓝莓", "草莓", "苹果"],
    intro: "云南高原气候，水果风味独特，品质上乘。",
  },
  {
    id: 6,
    name: "热带果品",
    location: "广东省湛江市",
    specialty: "进口水果专业代理",
    rating: 4.8,
    reviews: 100,
    verified: true,
    tags: ["菠萝", "榴莲", "苹果"],
    intro: "专注进口水果批发，渠道广泛，价格实惠。",
  },
  {
    id: 7,
    name: "优鲜果业",
    location: "四川省成都市",
    specialty: "有机水果种植基地",
    rating: 4.7,
    reviews: 55,
    verified: false,
    tags: ["葡萄", "樱桃", "苹果"],
    intro: "有机种植，绿色健康，品质认证。",
  },
  {
    id: 8,
    name: "果香四季",
    location: "陕西省西安市",
    specialty: "精品水果礼盒定制",
    rating: 4.6,
    reviews: 65,
    verified: false,
    tags: ["蓝莓", "草莓", "苹果"],
    intro: "礼盒定制，企业团购，节日送礼首选。",
  },
  {
    id: 9,
    name: "果之源",
    location: "辽宁省大连市",
    specialty: "北方特色水果供应商",
    rating: 4.5,
    reviews: 75,
    verified: false,
    tags: ["火龙果", "猕猴桃", "苹果"],
    intro: "大连本地水果，冷链直达，品质保障。",
  },
]

export function generateStaticParams() {
  return suppliers.map(s => ({ id: String(s.id) }))
}

export default function SupplierDetailPage({ params }: { params: { id: string } }) {
  const supplier = suppliers.find(s => String(s.id) === params.id)
  if (!supplier) return notFound()

  // 真实商品数据，字段与首页一致
  const allProducts = [
    {
      id: 1,
      name: "智利进口车厘子",
      price: 128,
      originalPrice: 158,
      unit: "kg",
      minOrder: 1,
      stock: 2000,
      sales: 2000,
      rating: 4.9,
      reviews: 126,
      images: ["/fresh-cherries.png"],
      description: "智利进口新鲜车厘子，果大肉厚，甜度高，适合高端水果店和餐饮采购。",
      origin: "智利",
      brand: "智利优选",
      shelfLife: "7天",
      storage: "冷藏",
      packaging: "泡沫箱+保鲜膜",
      isNew: true,
      isHot: true,
      supplierId: 1,
    },
    {
      id: 2,
      name: "泰国金枕头榴莲",
      price: 298,
      originalPrice: 358,
      unit: "个",
      minOrder: 1,
      stock: 500,
      sales: 1500,
      rating: 4.8,
      reviews: 98,
      images: ["/durian.png"],
      description: "泰国金枕头榴莲，肉厚核小，香气浓郁，适合高端水果店和餐饮采购。",
      origin: "泰国",
      brand: "泰国金枕头",
      shelfLife: "5天",
      storage: "常温/冷藏",
      packaging: "纸箱包装",
      isNew: true,
      supplierId: 2,
    },
    {
      id: 3,
      name: "澳洲脐橙",
      price: 88,
      originalPrice: 108,
      unit: "kg",
      minOrder: 1,
      stock: 3000,
      sales: 3000,
      rating: 4.7,
      reviews: 215,
      images: ["/navel-oranges.png"],
      description: "澳洲进口脐橙，果汁丰富，口感香甜，适合超市和批发采购。",
      origin: "澳大利亚",
      brand: "澳洲优选",
      shelfLife: "10天",
      storage: "冷藏",
      packaging: "泡沫箱包装",
      isHot: true,
      supplierId: 3,
    },
    {
      id: 4,
      name: "红富士苹果",
      price: 68,
      originalPrice: 88,
      unit: "kg",
      minOrder: 1,
      stock: 5000,
      sales: 5000,
      rating: 4.6,
      reviews: 87,
      images: ["/red-apples.png"],
      description: "山东烟台红富士苹果，果香浓郁，脆甜多汁，适合各类水果批发。",
      origin: "山东烟台",
      brand: "烟台果业",
      shelfLife: "15天",
      storage: "常温/冷藏",
      packaging: "纸箱包装",
      supplierId: 4,
    },
    // 可继续补充更多真实商品...
  ]
  let supplierProducts = allProducts.filter(p => p.supplierId === supplier.id)
  // 若不足6个，借用其他商品补足
  if (supplierProducts.length < 6) {
    const others = allProducts.filter(p => p.supplierId !== supplier.id)
    supplierProducts = [
      ...supplierProducts,
      ...others.slice(0, 6 - supplierProducts.length)
    ]
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-20">
      {/* 顶部横幅 */}
      <div className="w-full bg-gradient-to-r from-emerald-50 to-white rounded-b-3xl shadow-sm mb-10">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center gap-8">
          {/* 头像 */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border border-gray-100 shadow bg-white">
              <Image
                src={logoMap[supplier.name] || "/default-supplier.jpg"}
                alt={supplier.name}
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
          {/* 品牌信息区 */}
          <div className="flex-1 min-w-0 flex flex-col gap-3 justify-center">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{supplier.name}</h1>
              {supplier.verified && (
                <span className="flex items-center bg-blue-50 text-blue-600 text-sm px-2 py-0.5 rounded font-medium"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>已认证</span>
              )}
              <div className="flex items-center ml-2">
                <span className="flex text-yellow-400 mr-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 ${i <= Math.round(supplier.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />)}
                </span>
                <span className="font-semibold text-gray-700 mr-2 text-lg">{supplier.rating}</span>
                <span className="text-sm text-gray-400">({supplier.reviews}条评价)</span>
              </div>
            </div>
            <div className="text-lg text-gray-700 font-semibold">主营：{supplier.specialty}</div>
            <div className="flex flex-wrap gap-2">
              {supplier.tags.map(tag => (
                <span key={tag} className="bg-emerald-50 text-emerald-600 text-sm rounded px-3 py-0.5 border border-emerald-100 font-normal">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主体内容区，两栏布局 */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* 左栏：供应商详细信息 */}
        <div className="w-full md:w-80 flex-shrink-0 mb-8 md:mb-0">
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <div className="font-bold text-lg mb-2 text-gray-900">供应商简介</div>
            <div className="text-base text-gray-600 mb-4">{supplier.intro}</div>
            <div className="font-bold text-lg mb-2 text-gray-900">联系方式</div>
            <div className="flex flex-col gap-2 text-base text-gray-500">
              <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>400-123-4567</div>
              <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>contact@supplier.com</div>
              <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-emerald-400" />{supplier.location}</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="font-bold text-lg mb-2 text-gray-900">服务承诺</div>
            <ul className="list-disc pl-5 text-base text-gray-600 space-y-2">
              <li>正品保障</li>
              <li>极速发货</li>
              <li>全国配送</li>
              <li>7天无理由退换</li>
            </ul>
          </div>
        </div>
        {/* 右栏：商品列表 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">该供应商商品</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {supplierProducts.length === 0 && <div className="text-gray-400 col-span-full">暂无商品</div>}
            {supplierProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden flex flex-col">
                <div className="relative w-full h-48 bg-gray-50">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-base mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-emerald-600">¥{product.price}</span>
                    <span className="text-sm line-through text-gray-400">¥{product.originalPrice}</span>
                    <span className="text-xs text-gray-400">/{product.unit}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-gray-400">| 已售 {product.sales}</span>
                  </div>
                  <Button asChild className="mt-auto w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-2 text-base font-semibold">
                    <Link href={`/products/${product.id}`}>查看详情</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 