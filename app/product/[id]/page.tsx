import { notFound } from "next/navigation"
import ProductDetailClient from "./ProductDetailClient"
import { Star, CheckCircle2, MapPin, Phone, MailIcon } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "2",
    name: "泰国金枕头榴莲",
    price: 298,
    originalPrice: 358,
    unit: "个",
    minOrder: 1,
    stock: 500,
    sales: 1500,
    rating: 4.8,
    reviews: 98,
    images: [
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1575386970202-2d84c2a1c87e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "泰国金枕头榴莲，肉厚核小，香气浓郁，适合高端水果店和餐饮采购。",
    origin: "泰国",
    brand: "泰国金枕头",
    shelfLife: "3-5天",
    storage: "常温保存，避免阳光直射",
    packaging: "纸箱包装",
    isNew: true,
    supplier: {
      id: 2,
      name: "热带果品",
      rating: 4.8,
      verificationLevel: "金牌供应商",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tropical-fruits-company-VXoLtoYWr3C9dLXFkyBUJkLVfdGMjv.png",
      location: "广东省湛江市",
      contact: "400-888-7777",
      email: "contact@tropical-fruits.com",
      tags: ["热带水果", "进口水果", "品质保障"],
      intro: "专营热带水果，主打榴莲、山竹等东南亚特色水果，提供全国配送服务。"
    },
  }
]

// 模拟推荐商品数据
const recommendedProducts = [
  {
    id: 1,
    name: "推荐商品1",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    price: 99.9,
    sales: 1000,
    rating: 4.8
  },
  {
    id: 2,
    name: "推荐商品2",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    price: 199.9,
    sales: 800,
    rating: 4.6
  },
  {
    id: 3,
    name: "推荐商品3",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    price: 299.9,
    sales: 600,
    rating: 4.7
  },
  {
    id: 4,
    name: "推荐商品4",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=300&fit=crop",
    price: 399.9,
    sales: 400,
    rating: 4.9
  }
]

export function generateStaticParams() {
  return products.map(product => ({ id: product.id }))
}

type Props = { params: { id: string } }

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id)
  if (!product) return notFound()

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* 面包屑 */}
        <div className="flex items-center text-sm text-gray-400 mb-4 gap-2">
          <Link href="/" className="hover:text-emerald-600">首页</Link>
          <span>/</span>
          <Link href="#" className="hover:text-emerald-600">水果分类</Link>
          <span>/</span>
          <Link href="#" className="hover:text-emerald-600">热带水果</Link>
          <span>/</span>
          <span className="text-gray-500">{product.name}</span>
        </div>
        {/* 主图区+信息区（客户端组件） */}
        <ProductDetailClient product={product} recommendedProducts={recommendedProducts} />
        {/* 供应商卡片 */}
        <div className="supplier-card bg-gradient-to-br from-[#f9fffc] to-white rounded-xl p-6 mb-8 shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow"><img src={product.supplier.avatar} alt={product.supplier.name} className="object-cover w-full h-full" /></div>
              <div>
                <div className="flex items-center font-medium mb-1">{product.supplier.name}<span className="verified-badge flex items-center bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded ml-2"><CheckCircle2 className="w-3 h-3 mr-1" />已认证</span></div>
                <div className="flex items-center mb-1">
                  <span className="flex text-yellow-400 mr-1">
                    {[1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
                    <Star className="w-4 h-4 fill-yellow-400 opacity-60" />
                  </span>
                  <span className="font-medium text-gray-700 mr-2">{product.supplier.rating}</span>
                  <span className="text-xs text-gray-400">综合评分</span>
                </div>
                <div className="text-gray-400 text-sm">{product.supplier.intro}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-[180px]">
              <div className="flex items-center text-gray-500 text-sm"><MapPin className="w-4 h-4 mr-1 text-emerald-500" />{product.supplier.location}</div>
              <div className="flex items-center text-gray-500 text-sm"><Phone className="w-4 h-4 mr-1 text-emerald-500" />{product.supplier.contact}</div>
              <div className="flex items-center text-gray-500 text-sm"><MailIcon className="w-4 h-4 mr-1 text-emerald-500" />{product.supplier.email}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.supplier.tags.map(tag => <span key={tag} className="bg-emerald-100 text-emerald-700 text-xs rounded px-3 py-0.5">{tag}</span>)}
              </div>
              <Link href={`/suppliers/${product.supplier.id}`}><button className="mt-2 px-8 py-2 border border-emerald-600 text-emerald-700 font-semibold rounded-full bg-white hover:bg-emerald-50 transition-colors">查看店铺</button></Link>
            </div>
          </div>
        </div>
        {/* Tab区块 */}
        <div className="tabs bg-white rounded-xl shadow mb-8">
          <div className="tab-header flex border-b">
            <button className="tab-btn active px-6 py-4 text-emerald-600 font-semibold text-base border-b-2 border-emerald-600">商品详情</button>
            <button className="tab-btn px-6 py-4 text-gray-500 hover:text-emerald-600 font-semibold text-base">商品参数</button>
            <button className="tab-btn px-6 py-4 text-gray-500 hover:text-emerald-600 font-semibold text-base">用户评价</button>
            <button className="tab-btn px-6 py-4 text-gray-500 hover:text-emerald-600 font-semibold text-base">常见问题</button>
          </div>
          <div className="tab-content px-6 py-6">
            <p className="mb-4 text-gray-700">{product.description}</p>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b last:border-b-0"><td className="py-2 text-gray-400 w-32">产地</td><td className="py-2">{product.origin}</td></tr>
                <tr className="border-b last:border-b-0"><td className="py-2 text-gray-400 w-32">规格</td><td className="py-2">2-3kg/个</td></tr>
                <tr className="border-b last:border-b-0"><td className="py-2 text-gray-400 w-32">保存方法</td><td className="py-2">{product.storage}</td></tr>
                <tr><td className="py-2 text-gray-400 w-32">保质期</td><td className="py-2">{product.shelfLife}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 