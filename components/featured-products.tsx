"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"

export function FeaturedProducts() {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const { toast } = useToast()
  const { isLoggedIn } = useAuth()
  const { addItem } = useCart()
  const products = [
    {
      id: 1,
      name: "泰国金枕头榴莲",
      price: 89,
      unit: "kg",
      minOrder: 10,
      image: "/placeholder.png",
      discount: true,
      oldPrice: 99,
      rating: 4.8,
      sales: 1200,
    },
    {
      id: 2,
      name: "智利进口车厘子",
      price: 128,
      unit: "kg",
      minOrder: 5,
      image: "/placeholder.png",
      discount: true,
      oldPrice: 158,
      rating: 4.9,
      sales: 980,
    },
    {
      id: 3,
      name: "新疆阿克苏苹果",
      price: 15.8,
      unit: "kg",
      minOrder: 20,
      image: "/placeholder.png",
      discount: false,
      rating: 4.7,
      sales: 2500,
    },
    {
      id: 4,
      name: "海南金煌芒果",
      price: 35.9,
      unit: "kg",
      minOrder: 10,
      image: "/placeholder.png",
      discount: false,
      rating: 4.6,
      sales: 1800,
    },
    {
      id: 5,
      name: "越南红心火龙果",
      price: 22.5,
      unit: "kg",
      minOrder: 15,
      image: "/placeholder.png",
      discount: true,
      oldPrice: 28.8,
      rating: 4.5,
      sales: 1500,
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden group border-none shadow-md hover:shadow-lg transition-shadow"
        >
          <Link href={`/products/${product.id}`} className="block relative">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {product.discount && <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">特惠</Badge>}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                {product.name}
              </h3>
              <div className="flex justify-between items-baseline mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-emerald-600">¥{product.price}</span>
                  <span className="text-xs text-muted-foreground">/{product.unit}</span>
                </div>
                {product.discount && (
                  <span className="text-sm line-through text-muted-foreground">¥{product.oldPrice}</span>
                )}
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                <span>
                  最小起订: {product.minOrder}
                  {product.unit}
                </span>
                <span>
                  已售{product.sales}
                  {product.unit}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={(e) => {
                    e.preventDefault()
                    if (!isLoggedIn) {
                      toast({
                        title: "请先登录",
                        description: "您需要登录后才能将商品加入购物车",
                        variant: "destructive",
                      })
                      return
                    }
                    addItem({
                      id: String(product.id),
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                      unit: product.unit,
                      minOrder: product.minOrder,
                    })
                    toast({
                      title: "已加入购物车",
                      description: `${product.name} x 1${product.unit}已成功加入购物车`,
                    })
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  加入购物车
                </Button>
                <Button
                  size="sm"
                  variant={isFavorite(String(product.id)) ? "default" : "outline"}
                  className="px-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
                  onClick={e => {
                    e.preventDefault()
                    isFavorite(String(product.id))
                      ? removeFavorite(String(product.id))
                      : addFavorite({ ...product, id: String(product.id) })
                  }}
                >
                  <Heart className={`h-4 w-4 ${isFavorite(String(product.id)) ? "text-red-500 fill-red-500" : ""}`} />
                  <span className="sr-only">收藏</span>
                </Button>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}
