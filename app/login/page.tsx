"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // 简单的账号密码验证
    if (username === "test" && password === "123456") {
      // 模拟登录成功
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: "user-1",
          username: "test",
          name: "测试用户",
          email: "test@example.com",
          phone: "13800138000",
          company: "测试公司",
          role: "buyer",
          avatar: "/asian-businessman-portrait.png",
        }),
      )

      // 延迟跳转，模拟网络请求
      setTimeout(() => {
        setIsLoading(false)
        router.push("/account")
      }, 1000)
    } else {
      setIsLoading(false)
      setError("用户名或密码错误，请使用账号：test，密码：123456")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">登录账户</CardTitle>
          <CardDescription className="text-center">
            输入您的账号信息登录果然好忙
            <div className="mt-1 text-sm font-medium text-emerald-600">测试账号：test，密码：123456</div>
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 mx-6">
            <TabsTrigger value="account">账号密码登录</TabsTrigger>
            <TabsTrigger value="phone">手机号登录</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}
                <div className="space-y-2">
                  <Label htmlFor="username">用户名/手机号</Label>
                  <Input
                    id="username"
                    placeholder="请输入用户名或手机号"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">密码</Label>
                    <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                      忘记密码?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember2" />
                  <label
                    htmlFor="remember2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    记住我
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      登录中...
                    </>
                  ) : (
                    "登录"
                  )}
                </Button>
              </CardContent>
            </form>
          </TabsContent>

          <TabsContent value="phone">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">手机号码</Label>
                <Input id="phone" type="tel" placeholder="请输入手机号码" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="code">验证码</Label>
                </div>
                <div className="flex gap-2">
                  <Input id="code" placeholder="请输入验证码" className="flex-1" />
                  <Button variant="outline" className="w-32 shrink-0">
                    获取验证码
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  记住我
                </label>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                登录
              </Button>
            </CardContent>
          </TabsContent>
        </Tabs>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            还没有账号?{" "}
            <Link href="/register" className="text-emerald-600 hover:underline">
              立即注册
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">或通过以下方式登录</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="w-full">
              微信登录
            </Button>
            <Button variant="outline" className="w-full">
              支付宝登录
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
