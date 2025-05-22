"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

// 模拟订单数据
const orders = [
  {
    id: "12345",
    date: "2023-06-15",
    total: 1299.0,
    status: "pending",
    statusText: "待付款",
    statusClass: "bg-yellow-100 text-yellow-800",
    items: [{ id: 1, name: "红苹果", quantity: 5, price: 259.8, image: "/red-apples.png" }],
  },
  {
    id: "12344",
    date: "2023-06-10",
    total: 899.0,
    status: "completed",
    statusText: "已完成",
    statusClass: "bg-emerald-100 text-emerald-800",
    items: [{ id: 2, name: "火龙果", quantity: 3, price: 299.67, image: "/vibrant-dragon-fruit.png" }],
  },
  {
    id: "12343",
    date: "2023-06-05",
    total: 599.0,
    status: "shipped",
    statusText: "待收货",
    statusClass: "bg-blue-100 text-blue-800",
    items: [{ id: 3, name: "脐橙", quantity: 10, price: 59.9, image: "/navel-oranges.png" }],
  },
  {
    id: "12342",
    date: "2023-06-01",
    total: 799.0,
    status: "processing",
    statusText: "待发货",
    statusClass: "bg-purple-100 text-purple-800",
    items: [{ id: 4, name: "新鲜樱桃", quantity: 2, price: 399.5, image: "/fresh-cherries.png" }],
  },
]

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">我的订单</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="搜索订单..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">全部订单</TabsTrigger>
          <TabsTrigger value="pending">待付款</TabsTrigger>
          <TabsTrigger value="processing">待发货</TabsTrigger>
          <TabsTrigger value="shipped">待收货</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {orders.map((order) => (
                  <div key={order.id} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-medium">订单号: #{order.id}</p>
                        <p className="text-sm text-muted-foreground">下单时间: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥{order.total.toFixed(2)}</p>
                        <p className={`text-xs px-2 py-1 rounded-full inline-block ${order.statusClass}`}>
                          {order.statusText}
                        </p>
                      </div>
                    </div>

                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.png"}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            数量: {item.quantity} × ¥{(item.price / item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">¥{item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-end gap-2 mt-4">
                      {order.status === "pending" && <Button size="sm">去付款</Button>}
                      {order.status === "shipped" && <Button size="sm">确认收货</Button>}
                      <Button variant="outline" size="sm">
                        查看详情
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 其他标签页内容类似，这里简化处理 */}
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>待付款订单</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这里显示所有待付款的订单。</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>待发货订单</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这里显示所有待发货的订单。</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipped" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>待收货订单</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这里显示所有待收货的订单。</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>已完成订单</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这里显示所有已完成的订单。</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
