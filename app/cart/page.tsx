"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

// 模拟购物车数据
const initialCartItems = [
  {
    id: "1",
    name: "新西兰红玫瑰苹果",
    price: 59.9,
    quantity: 2,
    image: "/red-apples.png",
    supplier: "新西兰果园",
  },
  {
    id: "2",
    name: "越南红心火龙果",
    price: 99.9,
    quantity: 1,
    image: "/vibrant-dragon-fruit.png",
    supplier: "越南热带水果公司",
  },
  {
    id: "3",
    name: "赣南脐橙",
    price: 69.9,
    quantity: 3,
    image: "/navel-oranges.png",
    supplier: "赣南果业",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  // 计算总价
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 20
  const total = subtotal + shipping

  // 更新商品数量
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // 移除商品
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">购物车</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <Card>
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <CardTitle>购物车商品 ({cartItems.length})</CardTitle>
                <Button variant="ghost" size="sm" className="text-red-500">
                  清空购物车
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {cartItems.length > 0 ? (
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">供应商: {item.supplier}</p>
                        <p className="font-bold mt-1">¥{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                          className="w-14 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right md:w-24">
                        <p className="font-bold">¥{(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 p-0 h-auto"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          <span>删除</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">购物车是空的</h3>
                  <p className="text-muted-foreground mb-4">快去选购喜欢的水果吧！</p>
                  <Button asChild>
                    <Link href="/products">浏览商品</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            {cartItems.length > 0 && (
              <CardFooter className="border-t flex justify-between py-4">
                <Button variant="outline" asChild>
                  <Link href="/products">继续购物</Link>
                </Button>
                <Button variant="outline" onClick={() => setCartItems([])}>
                  清空购物车
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>

        <div className="w-full lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>订单摘要</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>商品小计</span>
                  <span>¥{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>运费</span>
                  <span>{shipping > 0 ? `¥${shipping.toFixed(2)}` : "免运费"}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-sm text-muted-foreground">
                    订单满¥500免运费，还差¥{(500 - subtotal).toFixed(2)}
                  </div>
                )}
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>订单总计</span>
                  <span>¥{total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" asChild disabled={cartItems.length === 0}>
                <Link href="/checkout">去结算</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>优惠券</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input placeholder="输入优惠码" />
                <Button variant="outline">应用</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
