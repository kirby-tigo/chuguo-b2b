"use client"

import { Image } from "@/components/ui/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import { getOptimizedImageUrl, getImageSizes } from "@/lib/image-utils"

export function FeaturedProducts() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites()

  const products = [
    {
      id: "1",
      name: "智利进口车厘子",
      price: 128,
      originalPrice: 158,
      unit: "kg",
      image: "/fresh-cherries.png",
      rating: 4.9,
      sales: 2000,
      isNew: true,
      isHot: true,
    },
    {
      id: "2",
      name: "泰国金枕头榴莲",
      price: 298,
      originalPrice: 358,
      unit: "个",
      image: "/premium-fruit-display.png",
      rating: 4.8,
      sales: 1500,
      isNew: true,
    },
    {
      id: "3",
      name: "澳洲脐橙",
      price: 88,
      originalPrice: 108,
      unit: "kg",
      image: "/navel-oranges.png",
      rating: 4.7,
      sales: 3000,
      isHot: true,
    },
    {
      id: "4",
      name: "红富士苹果",
      price: 68,
      originalPrice: 88,
      unit: "kg",
      image: "/red-apples.png",
      rating: 4.6,
      sales: 5000,
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
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
              onClick={() => handleFavoriteClick(product)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />
            </Button>
            <div className="absolute top-2 left-2 flex gap-2">
              {product.isNew && (
                <Badge className="bg-emerald-500 hover:bg-emerald-600">新品</Badge>
              )}
              {product.isHot && (
                <Badge className="bg-red-500 hover:bg-red-600">热销</Badge>
              )}
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">已售 {product.sales}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-emerald-600">¥{product.price}</span>
              <span className="text-sm line-through text-muted-foreground">¥{product.originalPrice}</span>
              <span className="text-sm text-muted-foreground">/{product.unit}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
