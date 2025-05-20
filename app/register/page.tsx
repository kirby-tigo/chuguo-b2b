import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">注册账户</CardTitle>
          <CardDescription className="text-center">创建您的楚果集采账户，开始批发采购</CardDescription>
        </CardHeader>

        <Tabs defaultValue="buyer" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 mx-6">
            <TabsTrigger value="buyer">我是采购商</TabsTrigger>
            <TabsTrigger value="supplier">我是供应商</TabsTrigger>
          </TabsList>

          <TabsContent value="buyer">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">公司名称</Label>
                <Input id="company" placeholder="请输入公司名称" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">联系人姓名</Label>
                <Input id="name" placeholder="请输入联系人姓名" />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="password">设置密码</Label>
                <Input id="password" type="password" placeholder="请设置密码" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">确认密码</Label>
                <Input id="confirm-password" type="password" placeholder="请再次输入密码" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  我已阅读并同意
                  <Link href="/terms" className="text-emerald-600 hover:underline ml-1">
                    服务条款
                  </Link>
                  和
                  <Link href="/privacy" className="text-emerald-600 hover:underline ml-1">
                    隐私政策
                  </Link>
                </label>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                注册
              </Button>
            </CardContent>
          </TabsContent>

          <TabsContent value="supplier">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supplier-company">公司名称</Label>
                <Input id="supplier-company" placeholder="请输入公司名称" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier-name">联系人姓名</Label>
                <Input id="supplier-name" placeholder="请输入联系人姓名" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier-phone">手机号码</Label>
                <Input id="supplier-phone" type="tel" placeholder="请输入手机号码" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier-business">主营业务</Label>
                <Input id="supplier-business" placeholder="请输入主营业务" />
              </div>
              <div className="space-y-2">
                <Label>公司类型</Label>
                <RadioGroup defaultValue="grower" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="grower" id="grower" />
                    <Label htmlFor="grower" className="cursor-pointer">
                      种植基地
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wholesaler" id="wholesaler" />
                    <Label htmlFor="wholesaler" className="cursor-pointer">
                      批发商
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="importer" id="importer" />
                    <Label htmlFor="importer" className="cursor-pointer">
                      进口商
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="supplier-terms" />
                <label
                  htmlFor="supplier-terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  我已阅读并同意
                  <Link href="/terms" className="text-emerald-600 hover:underline ml-1">
                    服务条款
                  </Link>
                  和
                  <Link href="/privacy" className="text-emerald-600 hover:underline ml-1">
                    隐私政策
                  </Link>
                </label>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                提交申请
              </Button>

              <p className="text-xs text-muted-foreground mt-2">提交后，我们的审核团队将在1-3个工作日内与您联系</p>
            </CardContent>
          </TabsContent>
        </Tabs>

        <CardFooter className="flex justify-center">
          <div className="text-sm text-center text-muted-foreground">
            已有账号?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline">
              立即登录
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
