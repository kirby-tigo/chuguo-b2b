"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CreditCard, Truck, Building, Home } from "lucide-react"

// 模拟购物车数据
const cartItems = [
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

// 计算总价
const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
const shipping = subtotal > 500 ? 0 : 20
const total = subtotal + shipping

export default function CheckoutPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("alipay")
  const [deliveryMethod, setDeliveryMethod] = useState("express")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟提交订单
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 跳转到订单成功页面
    router.push("/account/orders")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">结算</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 1 ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"
                } mr-2`}
              >
                {step > 1 ? <Check className="h-5 w-5" /> : "1"}
              </div>
              <span className="font-medium">收货信息</span>
              <div className="h-px flex-1 bg-gray-200 mx-4"></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 2 ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"
                } mr-2`}
              >
                {step > 2 ? <Check className="h-5 w-5" /> : "2"}
              </div>
              <span className="font-medium">支付方式</span>
              <div className="h-px flex-1 bg-gray-200 mx-4"></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 3 ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"
                } mr-2`}
              >
                3
              </div>
              <span className="font-medium">确认订单</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>收货信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="existing">
                    <TabsList className="mb-4">
                      <TabsTrigger value="existing">使用已有地址</TabsTrigger>
                      <TabsTrigger value="new">添加新地址</TabsTrigger>
                    </TabsList>
                    <TabsContent value="existing">
                      <RadioGroup defaultValue="address1" className="space-y-4">
                        <div className="flex items-start space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="address1" id="address1" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="address1" className="font-medium flex items-center">
                              <Building className="h-4 w-4 mr-2" />
                              公司地址
                            </Label>
                            <p className="text-sm mt-1">测试用户 (13800138000)</p>
                            <p className="text-sm text-muted-foreground">
                              上海市浦东新区张江高科技园区博云路2号浦软大厦5楼
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              编辑
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              删除
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="address2" id="address2" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="address2" className="font-medium flex items-center">
                              <Home className="h-4 w-4 mr-2" />
                              家庭地址
                            </Label>
                            <p className="text-sm mt-1">测试用户 (13800138000)</p>
                            <p className="text-sm text-muted-foreground">上海市静安区南京西路1266号恒隆广场46楼</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              编辑
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              删除
                            </Button>
                          </div>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="new">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">收货人姓名</Label>
                          <Input id="name" placeholder="请输入姓名" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone">手机号码</Label>
                          <Input id="phone" placeholder="请输入手机号码" className="mt-1" />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="address">详细地址</Label>
                          <Textarea id="address" placeholder="请输入详细地址" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="company">公司名称 (选填)</Label>
                          <Input id="company" placeholder="请输入公司名称" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="addressType">地址类型</Label>
                          <RadioGroup defaultValue="company" className="flex mt-1">
                            <div className="flex items-center space-x-2 mr-4">
                              <RadioGroupItem value="company" id="company-type" />
                              <Label htmlFor="company-type">公司</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="home" id="home-type" />
                              <Label htmlFor="home-type">家庭</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">配送方式</h3>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-3">
                      <div className="flex items-center justify-between border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <div>
                            <Label htmlFor="express" className="font-medium">
                              标准快递
                            </Label>
                            <p className="text-sm text-muted-foreground">预计3-5个工作日送达</p>
                          </div>
                        </div>
                        <div className="font-medium">¥{shipping > 0 ? shipping.toFixed(2) : "免费"}</div>
                      </div>
                      <div className="flex items-center justify-between border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cold-chain" id="cold-chain" />
                          <div>
                            <Label htmlFor="cold-chain" className="font-medium">
                              冷链配送
                            </Label>
                            <p className="text-sm text-muted-foreground">预计2-3个工作日送达，全程冷链</p>
                          </div>
                        </div>
                        <div className="font-medium">¥30.00</div>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/cart">返回购物车</Link>
                  </Button>
                  <Button onClick={() => setStep(2)}>下一步：选择支付方式</Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>支付方式</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center justify-between border rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alipay" id="alipay" />
                        <div className="flex items-center">
                          <Label htmlFor="alipay" className="font-medium">
                            支付宝
                          </Label>
                          <div className="relative w-8 h-8 ml-2">
                            <Image
                              src="/alipay-logo.png"
                              alt="支付宝"
                              fill
                              className="object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="wechat" id="wechat" />
                        <div className="flex items-center">
                          <Label htmlFor="wechat" className="font-medium">
                            微信支付
                          </Label>
                          <div className="relative w-8 h-8 ml-2">
                            <Image
                              src="/payment/wechat-pay.png"
                              alt="微信支付"
                              fill
                              className="object-contain"
                              sizes="32px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                        <div className="flex items-center">
                          <Label htmlFor="bank-transfer" className="font-medium">
                            银行转账
                          </Label>
                          <div className="relative w-8 h-8 ml-2">
                            <CreditCard className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">发票信息</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="invoice-type">发票类型</Label>
                        <RadioGroup defaultValue="company" className="flex mt-1">
                          <div className="flex items-center space-x-2 mr-4">
                            <RadioGroupItem value="company" id="company-invoice" />
                            <Label htmlFor="company-invoice">企业发票</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="personal" id="personal-invoice" />
                            <Label htmlFor="personal-invoice">个人发票</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label htmlFor="invoice-title">发票抬头</Label>
                        <Input id="invoice-title" placeholder="请输入发票抬头" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="tax-number">税号</Label>
                        <Input id="tax-number" placeholder="请输入税号" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    返回上一步
                  </Button>
                  <Button onClick={() => setStep(3)}>下一步：确认订单</Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>确认订单</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">收货信息</h3>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            公司地址
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                            修改
                          </Button>
                        </div>
                        <p className="text-sm">测试用户 (13800138000)</p>
                        <p className="text-sm text-muted-foreground">
                          上海市浦东新区张江高科技园区博云路2号浦软大厦5楼
                        </p>
                        <div className="mt-2 flex items-center text-sm">
                          <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {deliveryMethod === "express" ? "标准快递" : "冷链配送"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">支付方式</h3>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {paymentMethod === "alipay" && (
                              <>
                                <div className="relative w-6 h-6 mr-2">
                                  <Image
                                    src="/alipay-logo.png"
                                    alt="支付宝"
                                    fill
                                    className="object-contain"
                                    sizes="24px"
                                  />
                                </div>
                                <span>支付宝</span>
                              </>
                            )}
                            {paymentMethod === "wechat" && (
                              <>
                                <div className="relative w-6 h-6 mr-2">
                                  <Image
                                    src="/payment/wechat-pay.png"
                                    alt="微信支付"
                                    fill
                                    className="object-contain"
                                    sizes="24px"
                                  />
                                </div>
                                <span>微信支付</span>
                              </>
                            )}
                            {paymentMethod === "bank-transfer" && (
                              <>
                                <CreditCard className="h-5 w-5 mr-2" />
                                <span>银行转账</span>
                              </>
                            )}
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                            修改
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">订单商品</h3>
                      <div className="border rounded-lg divide-y">
                        {cartItems.map((item) => (
                          <div key={item.id} className="p-4 flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">供应商: {item.supplier}</p>
                            </div>
                            <div className="text-sm">x{item.quantity}</div>
                            <div className="text-right font-medium">¥{(item.price * item.quantity).toFixed(2)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">订单备注</h3>
                      <Textarea placeholder="请输入订单备注（选填）" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    返回上一步
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "提交中..." : "提交订单"}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </form>
        </div>

        <div className="w-full lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>订单摘要</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>商品小计 ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}件)</span>
                  <span>¥{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>运费</span>
                  <span>{shipping > 0 ? `¥${shipping.toFixed(2)}` : "免运费"}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>订单总计</span>
                  <span>¥{total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>订单保障</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>100%正品保证，假一赔十</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>7天无理由退换，15天质量问题包退</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>专业冷链配送，保证新鲜</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>企业采购专属客服一对一服务</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
