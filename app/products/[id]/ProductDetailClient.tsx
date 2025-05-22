"use client"

import { useState } from "react"
import { Image } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Share2, Truck } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { useFavorites } from "@/context/favorites-context"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailClient({ product, recommendedProducts }: { product: any, recommendedProducts: any[] }) {
  const [quantity, setQuantity] = useState(product.minOrder || 1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { addItem } = useCart()
  const { isLoggedIn } = useAuth()
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast({ 
        title: "请先登录", 
        description: "登录后才能加入购物车", 
        variant: "destructive",
        duration: 5000,
        className: "bg-red-50 border-red-200",
        action: (
          <Button variant="outline" size="sm" onClick={() => window.location.href = "/login"} className="bg-white hover:bg-red-50">
            去登录
          </Button>
        )
      })
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[activeImageIndex],
      quantity,
      unit: product.unit,
      minOrder: product.minOrder,
      supplier: product.supplier.name,
    })
    
    toast({ 
      title: "已加入购物车", 
      description: `${product.name} x${quantity}${product.unit}`,
      duration: 3000,
      className: "bg-emerald-50 border-emerald-200"
    })
  }

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      toast({ 
        title: "请先登录", 
        description: "登录后才能购买商品", 
        variant: "destructive",
        duration: 5000,
        className: "bg-red-50 border-red-200",
        action: (
          <Button variant="outline" size="sm" onClick={() => window.location.href = "/login"} className="bg-white hover:bg-red-50">
            去登录
          </Button>
        )
      })
      return
    }
    handleAddToCart()
    window.location.href = "/cart"
  }

  return (
    <div className="container mx-auto px-2 py-10 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* 商品图片区 */}
        <div className="w-full lg:w-[540px] flex-shrink-0">
          <div className="relative aspect-square overflow-hidden rounded-3xl mb-5 bg-gray-100 shadow-lg">
            <Image
              src={product.images[activeImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 540px"
              priority
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img: string, idx: number) => (
              <button
                key={img}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-150 ${activeImageIndex === idx ? "border-emerald-600 ring-2 ring-emerald-200" : "border-gray-200"}`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* 商品信息区 */}
        <div className="flex-1 flex flex-col gap-8 bg-white rounded-3xl shadow-lg p-10 min-w-0">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 leading-tight">{product.name}</h1>
            {/* 卖点副标题 */}
            <div className="text-lg text-emerald-700 font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              {product.description?.split("，")[0] || "优质水果，批发采购首选"}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-emerald-600">¥{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">¥{product.originalPrice}</span>
              <span className="text-base text-muted-foreground">/{product.unit}</span>
              <Badge className="ml-2 bg-emerald-500">批发价</Badge>
              {product.isNew && <Badge className="ml-2 bg-emerald-500">新品</Badge>}
              {product.isHot && <Badge className="ml-2 bg-red-500">热销</Badge>}
            </div>
            <div className="flex items-center gap-4 mb-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-base font-medium">{product.rating}</span>
              <span className="text-base text-muted-foreground">| 已售 {product.sales}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <span className="text-base text-muted-foreground">起订量：{product.minOrder}{product.unit}</span>
              <span className="text-base text-muted-foreground">库存：{product.stock}</span>
              <span className="text-base text-muted-foreground flex items-center"><Truck className="h-4 w-4 mr-1" /> 支持全国配送服务</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <Link href={`/suppliers/${product.supplier.id}`} className="text-base hover:text-emerald-600 font-medium">
                供应商：{product.supplier.name}
              </Link>
              <Badge variant="outline" className="text-xs">{product.supplier.verificationLevel}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => isFavorite(product.id) ? removeFavorite(product.id) : addFavorite({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
              })}
            >
              <Heart className={`h-5 w-5 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
          <div className="flex items-center mb-6">
            <span className="w-20 text-base text-muted-foreground">数量</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                disabled={quantity <= product.minOrder}
              >
                -
              </Button>
              <div className="w-12 text-center text-lg">{quantity}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                +
              </Button>
            </div>
          </div>
          {/* 操作按钮区加分割线 */}
          <div className="border-t pt-6 flex flex-col sm:flex-row gap-4 mt-2">
            <Button variant="outline" size="lg" className="flex-1 text-lg h-14 rounded-full border-2 border-emerald-600" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-6 w-6" />
              加入购物车
            </Button>
            <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-lg h-14 rounded-full" onClick={handleBuyNow}>
              立即购买
            </Button>
          </div>
        </div>
      </div>

      {/* 供应商信息卡片（精细淘宝风格） */}
      <div className="bg-white rounded-xl shadow p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 border border-[#f0f0f0] mt-12">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
            <Image src={product.supplier.avatar || "/supplier-default.png"} alt={product.supplier.name} width={64} height={64} className="object-cover w-full h-full" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center font-bold text-lg mb-1 text-gray-900">
              {product.supplier.name}
              <span className="flex items-center bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded ml-2 font-medium"><svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>已认证</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="flex text-yellow-400 mr-1">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-4 h-4 ${i <= Math.round(product.supplier.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />)}
              </span>
              <span className="font-medium text-gray-700 mr-2">{product.supplier.rating}</span>
              <span className="text-xs text-gray-400">综合评分</span>
            </div>
            <div className="text-gray-500 text-sm truncate max-w-xs">{product.supplier.intro || "专营热带水果，主打榴莲、山竹等东南亚特色水果，提供全国配送服务。"}</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 min-w-[320px] items-end md:items-start">
          {/* 联系方式列 */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <div className="flex items-center text-gray-500 text-sm"><svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{product.supplier.location || "广东省湛江市"}</div>
            <div className="flex items-center text-gray-500 text-sm"><svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>{product.supplier.contact || "400-888-7777"}</div>
            <div className="flex items-center text-gray-500 text-sm"><svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>{product.supplier.email || "contact@tropical-fruits.com"}</div>
          </div>
          {/* 标签和按钮列 */}
          <div className="flex flex-col gap-2 min-w-[120px] items-end md:items-start">
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {(product.supplier.tags || ["热带水果", "进口水果", "品质保障"]).map((tag: string) => <span key={tag} className="bg-emerald-50 text-emerald-600 text-xs rounded px-3 py-0.5 border border-emerald-100 font-normal">{tag}</span>)}
            </div>
            <Link href={`/suppliers/${product.supplier.id}`}><button className="mt-2 px-8 py-2 border border-emerald-500 text-emerald-600 font-semibold rounded-full bg-white hover:bg-emerald-50 transition-colors text-sm" style={{borderWidth:'1.5px'}}>查看店铺</button></Link>
          </div>
        </div>
      </div>

      {/* 推荐商品模块 */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">猜你喜欢</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {recommendedProducts.map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">¥{item.price}</span>
                    <span className="text-xs text-gray-500">已售{item.sales}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs text-gray-500">{item.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 商品详情/参数/评价等标签页 */}
      <div className="mt-12">
        <Tabs defaultValue="desc">
          <TabsList>
            <TabsTrigger value="desc">商品详情</TabsTrigger>
            <TabsTrigger value="spec">商品参数</TabsTrigger>
            <TabsTrigger value="review">用户评价</TabsTrigger>
            <TabsTrigger value="faq">常见问题</TabsTrigger>
          </TabsList>
          <TabsContent value="desc">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description || "暂无商品详情" }} />
          </TabsContent>
          <TabsContent value="spec">
            <div className="prose max-w-none">
              <ul>
                <li>产地：{product.origin}</li>
                <li>品牌：{product.brand}</li>
                <li>保质期：{product.shelfLife}</li>
                <li>储存方式：{product.storage}</li>
                <li>包装：{product.packaging}</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="review">
            <div className="prose max-w-none">
              {/* 这里可以渲染用户评价列表 */}
              暂无评价
            </div>
          </TabsContent>
          <TabsContent value="faq">
            <div className="prose max-w-none">
              {/* 这里可以渲染常见问题 */}
              暂无常见问题
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 