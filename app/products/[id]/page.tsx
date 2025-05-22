import { notFound } from "next/navigation"
import ProductDetailClient from "./ProductDetailClient"

// 商品数据
const products = [
  {
    id: "1",
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
    supplier: {
      id: 1,
      name: "阳光果园",
      avatar: "/sunshine-orchard.jpg",
      rating: 4.8,
      verificationLevel: "金牌供应商",
    },
  },
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
    images: ["/durian.png"],
    description: "泰国金枕头榴莲，肉厚核小，香气浓郁，适合高端水果店和餐饮采购。",
    origin: "泰国",
    brand: "泰国金枕头",
    shelfLife: "5天",
    storage: "常温/冷藏",
    packaging: "纸箱包装",
    isNew: true,
    supplier: {
      id: 2,
      name: "热带果品",
      avatar: "/tropical-fruits-logo.png",
      rating: 4.8,
      verificationLevel: "金牌供应商",
    },
  },
  {
    id: "3",
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
    supplier: {
      id: 3,
      name: "绿源果业",
      avatar: "/green-source-fruits.jpg",
      rating: 4.9,
      verificationLevel: "银牌供应商",
    },
  },
  {
    id: "4",
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
    supplier: {
      id: 4,
      name: "丰收果园",
      avatar: "/harvest-orchard.jpg",
      rating: 4.6,
      verificationLevel: "认证供应商",
    },
  },
]

// 推荐商品数据
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
        <ProductDetailClient product={product} recommendedProducts={recommendedProducts} />
      </div>
    </div>
  )
}
