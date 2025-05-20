import ProductDetailClient from "./ProductDetailClient"

// 模拟商品数据
const products = [
  {
    id: "product-1",
    name: "泰国进口山竹",
    price: 68,
    originalPrice: 88,
    unit: "箱",
    weight: "5kg/箱",
    minOrder: 1,
    stock: 500,
    sales: 2345,
    rating: 4.8,
    reviews: 156,
    images: ["/placeholder.png", "/placeholder.png", "/placeholder.png"],
    description:
      "泰国进口优质山竹，果肉洁白细嫩，甜度适中，口感清爽。精选优质果园直供，保证新鲜度和品质。适合水果店、超市和餐饮企业采购。",
    specifications: [
      { name: "产地", value: "泰国" },
      { name: "规格", value: "5kg/箱" },
      { name: "等级", value: "A级" },
      { name: "保质期", value: "常温7天" },
      { name: "储存条件", value: "0-10℃冷藏保存" },
    ],
    supplier: {
      name: "广州鲜果贸易有限公司",
      rating: 4.9,
      responseTime: "2小时内",
      establishedYear: 2010,
      verificationLevel: "金牌供应商",
    },
  },
  {
    id: "product-2",
    name: "新西兰青苹果",
    price: 128,
    originalPrice: 158,
    unit: "箱",
    weight: "10kg/箱",
    minOrder: 1,
    stock: 300,
    sales: 1890,
    rating: 4.7,
    reviews: 120,
    images: ["/placeholder.png", "/placeholder.png", "/placeholder.png"],
    description:
      "新西兰进口青苹果，果肉脆甜多汁，酸甜适中，口感极佳。精选优质果园直供，保证新鲜度和品质。适合水果店、超市和餐饮企业采购。",
    specifications: [
      { name: "产地", value: "新西兰" },
      { name: "规格", value: "10kg/箱" },
      { name: "等级", value: "A级" },
      { name: "保质期", value: "常温15天" },
      { name: "储存条件", value: "0-5℃冷藏保存" },
    ],
    supplier: {
      name: "上海国际果蔬贸易有限公司",
      rating: 4.8,
      responseTime: "1小时内",
      establishedYear: 2008,
      verificationLevel: "钻石供应商",
    },
  },
]

export function generateStaticParams() {
  return products.map(product => ({ id: String(product.id) }))
}

export default function ProductDetailPage(props: any) {
  const { params } = props
  const product = products.find((p) => p.id === params.id) || products[0]
  return <ProductDetailClient product={product} />
}
