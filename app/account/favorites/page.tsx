"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Heart, ShoppingCart } from "lucide-react"

// 模拟收藏商品数据
const favoriteProducts = [
  {
    id: "1",
    name: "新西兰红玫瑰苹果",
    price: 59.9,
    originalPrice: 79.9,
    image: "/red-apples.png",
    category: "进口水果",
    rating: 4.8,
    reviews: 126,
  },
  {
    id: "2",
    name: "越南红心火龙果",
    price: 99.9,
    originalPrice: 129.9,
    image: "/vibrant-dragon-fruit.png",
    category: "热带水果",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "3",
    name: "赣南脐橙",
    price: 69.9,
    originalPrice: 89.9,
    image: "/navel-oranges.png",
    category: "国产水果",
    rating: 4.9,
    reviews: 215,
  },
  {
    id: "4",
    name: "美国车厘子",
    price: 199.9,
    originalPrice: 259.9,
    image: "/fresh-cherries.png",
    category: "进口水果",
    rating: 4.6,
    reviews: 87,
  },
]

export default function FavoritesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">我的收藏</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="搜索收藏商品..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">全部收藏</TabsTrigger>
          <TabsTrigger value="imported">进口水果</TabsTrigger>
          <TabsTrigger value="domestic">国产水果</TabsTrigger>
          <TabsTrigger value="tropical">热带水果</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 shadow-md"
                  >
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                  <Link href={`/products/${product.id}`} className="hover:underline">
                    <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-amber-500 text-sm">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-lg">¥{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">¥{product.originalPrice}</span>
                    </div>
                    <Button size="sm" className="rounded-full h-8 w-8 p-0">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 其他标签页内容类似，这里简化处理 */}
        <TabsContent value="imported" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts
              .filter((p) => p.category === "进口水果")
              .map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  {/* 内容与上面相同，这里简化 */}
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 shadow-md"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                    </div>
                    <Link href={`/products/${product.id}`} className="hover:underline">
                      <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-amber-500 text-sm">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg">¥{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ¥{product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="rounded-full h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="domestic" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts
              .filter((p) => p.category === "国产水果")
              .map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  {/* 内容与上面相同，这里简化 */}
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 shadow-md"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                    </div>
                    <Link href={`/products/${product.id}`} className="hover:underline">
                      <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-amber-500 text-sm">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg">¥{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ¥{product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="rounded-full h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tropical" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts
              .filter((p) => p.category === "热带水果")
              .map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  {/* 内容与上面相同，这里简化 */}
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 shadow-md"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                    </div>
                    <Link href={`/products/${product.id}`} className="hover:underline">
                      <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-amber-500 text-sm">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg">¥{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ¥{product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="rounded-full h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
