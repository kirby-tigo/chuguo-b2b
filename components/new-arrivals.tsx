"use client"

import { Image } from "@/components/ui/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { getOptimizedImageUrl, getImageSizes } from "@/lib/image-utils"

export function NewArrivals() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites()
  const { addItem } = useCart()
  const { isLoggedIn } = useAuth()
  const { toast } = useToast()

  const products = [
    {
      id: "1",
      name: "泰国山竹",
      price: 88,
      originalPrice: 108,
      unit: "kg",
      image: "/premium-fruit-display.png",
      rating: 4.9,
      sales: 500,
      isNew: true,
    },
    {
      id: "2",
      name: "越南红心火龙果",
      price: 45,
      originalPrice: 58,
      unit: "kg",
      image: "/vibrant-dragon-fruit.png",
      rating: 4.8,
      sales: 800,
      isNew: true,
    },
    {
      id: "3",
      name: "马来西亚猫山王榴莲",
      price: 398,
      originalPrice: 458,
      unit: "个",
      image: "/premium-fruit-display.png",
      rating: 4.9,
      sales: 300,
      isNew: true,
    },
    {
      id: "4",
      name: "智利蓝莓",
      price: 128,
      originalPrice: 158,
      unit: "kg",
      image: "/premium-fruit-display.png",
      rating: 4.7,
      sales: 600,
      isNew: true,
    },
  ]

  const handleFavoriteClick = (product: typeof products[0]) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id)
    } else {
      addFavorite({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
  }

  const handleAddToCart = (product: typeof products[0]) => {
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
      image: product.image,
      quantity: 1,
      unit: product.unit,
    })
    toast({
      title: "已加入购物车",
      description: `${product.name} 已成功加入购物车`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
          <Link href={`/products/${product.id}`} className="block">
            <div className="relative">
              <div className="relative h-48">
                <Image
                  src={getOptimizedImageUrl(product.image, 400, 300)}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes={getImageSizes(400)}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 shadow-md"
                onClick={(e) => { e.preventDefault(); handleFavoriteClick(product) }}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                  }`}
                />
              </Button>
              <div className="absolute top-2 left-2">
                <Badge className="bg-emerald-500 hover:bg-emerald-600">新品</Badge>
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 line-clamp-2">
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">已售 {product.sales}</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xl font-bold text-emerald-600">¥{product.price}</span>
              <span className="text-sm line-through text-muted-foreground">¥{product.originalPrice}</span>
              <span className="text-sm text-muted-foreground">/{product.unit}</span>
            </div>
            <Button
              size="sm"
              className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2"
              onClick={(e) => { e.preventDefault(); handleAddToCart(product) }}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              加入购物车
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
