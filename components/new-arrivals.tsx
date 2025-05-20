import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

export function NewArrivals() {
  const products = [
    {
      id: 101,
      name: "澳大利亚脐橙",
      price: 45.8,
      unit: "kg",
      minOrder: 10,
      image: "/navel-oranges.png",
      badge: "新品",
      rating: 4.7,
      sales: 320,
    },
    {
      id: 102,
      name: "墨西哥牛油果",
      price: 68.5,
      unit: "kg",
      minOrder: 5,
      image: "/placeholder.svg?height=200&width=300&query=avocado",
      badge: "新品",
      rating: 4.8,
      sales: 280,
    },
    {
      id: 103,
      name: "云南蓝莓",
      price: 58.9,
      unit: "kg",
      minOrder: 3,
      image: "/placeholder.svg?height=200&width=300&query=blueberries",
      badge: "新品",
      rating: 4.9,
      sales: 150,
    },
    {
      id: 104,
      name: "福建琯溪蜜柚",
      price: 12.8,
      unit: "kg",
      minOrder: 20,
      image: "/placeholder.svg?height=200&width=300&query=pomelo",
      badge: "新品",
      rating: 4.6,
      sales: 420,
    },
    {
      id: 105,
      name: "泰国山竹",
      price: 75.0,
      unit: "kg",
      minOrder: 5,
      image: "/placeholder.svg?height=200&width=300&query=mangosteen",
      badge: "新品",
      rating: 4.8,
      sales: 180,
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
              <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">{product.badge}</Badge>
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
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  加入购物车
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="px-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600"
                >
                  <Heart className="h-4 w-4" />
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
