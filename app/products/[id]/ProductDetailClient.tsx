"use client"

import { useState } from "react"
import { Image } from "@/components/ui/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { getOptimizedImageUrl, getImageSizes } from "@/lib/image-utils"

export default function ProductDetailClient({ product }: { product: any }) {
  const router = useRouter()
  const { toast } = useToast()
  const { isLoggedIn } = useAuth()
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast({
        title: "请先登录",
        description: "您需要登录后才能将商品加入购物车",
        variant: "destructive",
      })
      return
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      unit: product.unit,
      minOrder: product.minOrder,
      supplier: product.supplier.name,
    })
    toast({
      title: "已加入购物车",
      description: `${product.name} x ${quantity}${product.unit}已成功加入购物车`,
    })
  }

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      toast({
        title: "请先登录",
        description: "您需要登录后才能购买商品",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      unit: product.unit,
      minOrder: product.minOrder,
      supplier: product.supplier.name,
    })

    router.push("/cart")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 商品图片 */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
            <Image
              src={getOptimizedImageUrl(product.images[activeImageIndex], 800, 800)}
              alt={product.name}
              fill
              className="object-cover"
              sizes={getImageSizes(800)}
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                  activeImageIndex === index ? "border-emerald-600" : "border-transparent"
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={getOptimizedImageUrl(image, 160, 160)}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 商品信息 */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">{product.reviews} 条评价</span>
            <span className="text-sm text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              已售 {product.sales} {product.unit}
            </span>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg mb-6">
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold text-emerald-600">¥{product.price}</span>
              <span className="ml-2 text-lg line-through text-muted-foreground">¥{product.originalPrice}</span>
              <Badge className="ml-2 bg-red-500">限时优惠</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              单位: {product.weight} | 起订量: {product.minOrder} {product.unit} | 库存: {product.stock} {product.unit}
            </div>
          </div>

          <div className="border-t border-b py-4 mb-6">
            <div className="flex items-center mb-4">
              <span className="w-20 text-sm text-muted-foreground">配送</span>
              <div className="flex items-center">
                <Truck className="h-4 w-4 mr-1 text-emerald-600" />
                <span className="text-sm">支持全国配送 | 预计发货后 2-5 天送达 | 运费说明</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-20 text-sm text-muted-foreground">服务</span>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="text-sm">品质保障</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="text-sm">准时送达</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="text-sm">售后无忧</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <span className="w-20 text-sm text-muted-foreground">数量</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                disabled={quantity <= product.minOrder}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              加入购物车
            </Button>
            <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={handleBuyNow}>
              立即购买
            </Button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-4">
              <Link
                href={`/suppliers/${encodeURIComponent(product.supplier.name)}`}
                className="text-sm hover:text-emerald-600"
              >
                {product.supplier.name}
              </Link>
              <Badge variant="outline" className="text-xs">
                {product.supplier.verificationLevel}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* 商品详情标签页 */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full border-b rounded-none justify-start h-auto">
            <TabsTrigger value="description" className="text-lg py-3 px-6">
              商品详情
            </TabsTrigger>
            <TabsTrigger value="specifications" className="text-lg py-3 px-6">
              规格参数
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-lg py-3 px-6">
              商品评价({product.reviews})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-6">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/premium-fruit-display.png"
                    alt="商品展示"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/fruit-quality-inspection.png"
                    alt="品质检测"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="py-6">
            <Card className="border-none shadow-none">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec: any, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="py-3 px-4 w-1/4 font-medium">{spec.name}</td>
                      <td className="py-3 px-4">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">商品评价</h3>
                <Button variant="outline">写评价</Button>
              </div>
              <div className="text-center py-12">
                <p className="text-muted-foreground">暂无评价，购买后可以发表评价</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 