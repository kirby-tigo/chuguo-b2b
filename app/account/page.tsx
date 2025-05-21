"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, User, CreditCard, Heart, Settings, LogOut } from "lucide-react"

// 模拟用户数据
const mockUser = {
  id: "user-1",
  username: "test",
  name: "测试用户",
  email: "test@example.com",
  phone: "13800138000",
  company: "测试公司",
  role: "buyer",
  avatar: "/default-supplier.jpg",
}

export default function AccountPage() {
  // 使用模拟数据，无需登录验证
  const user = mockUser

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">个人中心</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={user.avatar || "/placeholder.png"}
                    alt={user.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground mb-2">{user.company}</p>
                <div className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">企业采购商</div>
              </div>

              <div className="mt-6 space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account">
                    <User className="mr-2 h-4 w-4" />
                    个人信息
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/orders">
                    <Package className="mr-2 h-4 w-4" />
                    我的订单
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/favorites">
                    <Heart className="mr-2 h-4 w-4" />
                    收藏商品
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/payments">
                    <CreditCard className="mr-2 h-4 w-4" />
                    支付管理
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    账户设置
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  退出登录
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-3/4">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="profile">个人资料</TabsTrigger>
              <TabsTrigger value="settings">账户设置</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">待付款</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">待发货</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">待收货</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>最近订单</CardTitle>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/account/orders">查看全部</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden">
                          <Image src="/red-apples.png" alt="红苹果" fill className="object-cover" sizes="48px" />
                        </div>
                        <div>
                          <p className="font-medium">订单 #12345</p>
                          <p className="text-sm text-muted-foreground">2023-06-15</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥1,299.00</p>
                        <p className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">待付款</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden">
                          <Image
                            src="/vibrant-dragon-fruit.png"
                            alt="火龙果"
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <p className="font-medium">订单 #12344</p>
                          <p className="text-sm text-muted-foreground">2023-06-10</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥899.00</p>
                        <p className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">已完成</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden">
                          <Image src="/navel-oranges.png" alt="脐橙" fill className="object-cover" sizes="48px" />
                        </div>
                        <div>
                          <p className="font-medium">订单 #12343</p>
                          <p className="text-sm text-muted-foreground">2023-06-05</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥599.00</p>
                        <p className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">待收货</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>账户信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">姓名</p>
                        <p>{user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">电子邮箱</p>
                        <p>{user.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">手机号码</p>
                        <p>{user.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">公司</p>
                        <p>{user.company}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/settings">编辑信息</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>个人资料</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="flex flex-col items-center">
                          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                            <Image
                              src={user.avatar || "/placeholder.png"}
                              alt={user.name}
                              fill
                              className="object-cover"
                              sizes="128px"
                            />
                          </div>
                          <Button variant="outline" size="sm">
                            更换头像
                          </Button>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">姓名</label>
                            <input
                              type="text"
                              value={user.name}
                              readOnly
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">用户名</label>
                            <input
                              type="text"
                              value={user.username}
                              readOnly
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">电子邮箱</label>
                            <input
                              type="email"
                              value={user.email}
                              readOnly
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">手机号码</label>
                            <input
                              type="tel"
                              value={user.phone}
                              readOnly
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">公司</label>
                            <input
                              type="text"
                              value={user.company}
                              readOnly
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">角色</label>
                            <input
                              type="text"
                              value="企业采购商"
                              readOnly
                              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button>保存修改</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>账户设置</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">密码修改</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">当前密码</label>
                          <input
                            type="password"
                            placeholder="输入当前密码"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">新密码</label>
                          <input
                            type="password"
                            placeholder="输入新密码"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">确认新密码</label>
                          <input
                            type="password"
                            placeholder="再次输入新密码"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <Button>更新密码</Button>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">通知设置</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">订单状态更新</p>
                            <p className="text-sm text-muted-foreground">接收订单状态变更的通知</p>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-600">
                            <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">促销活动</p>
                            <p className="text-sm text-muted-foreground">接收最新促销活动的通知</p>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-600">
                            <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">系统公告</p>
                            <p className="text-sm text-muted-foreground">接收系统更新和维护的通知</p>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                            <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">账户安全</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">两步验证</p>
                            <p className="text-sm text-muted-foreground">使用手机验证码增强账户安全</p>
                          </div>
                          <Button variant="outline" size="sm">
                            设置
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">登录设备管理</p>
                            <p className="text-sm text-muted-foreground">查看和管理已登录的设备</p>
                          </div>
                          <Button variant="outline" size="sm">
                            查看
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
