import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2 text-center">联系我们</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          无论您有任何问题、建议或合作意向，我们都期待听到您的声音。请通过以下方式与我们取得联系。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* 联系信息 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">联系方式</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">客服热线</h3>
                  <p className="text-muted-foreground mb-1">400-123-4567</p>
                  <p className="text-sm text-muted-foreground">周一至周日 9:00-18:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">电子邮箱</h3>
                  <p className="text-muted-foreground mb-1">service@chuguo.com</p>
                  <p className="text-sm text-muted-foreground">我们将在24小时内回复您的邮件</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">公司地址</h3>
                  <p className="text-muted-foreground mb-1">湖北省武汉市洪山区光谷大道77号</p>
                  <p className="text-sm text-muted-foreground">果然好忙总部大厦</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">营业时间</h3>
                  <p className="text-muted-foreground mb-1">周一至周五: 9:00-18:00</p>
                  <p className="text-sm text-muted-foreground">周六至周日: 10:00-16:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">在线客服</h3>
                  <p className="text-muted-foreground mb-1">点击右下角图标，立即开始在线咨询</p>
                  <p className="text-sm text-muted-foreground">工作时间内实时回复</p>
                </div>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">发送消息</h2>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input id="name" placeholder="请输入您的姓名" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">公司名称</Label>
                      <Input id="company" placeholder="请输入公司名称" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">电子邮箱</Label>
                      <Input id="email" type="email" placeholder="请输入电子邮箱" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话</Label>
                      <Input id="phone" type="tel" placeholder="请输入联系电话" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">咨询主题</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="请选择咨询主题" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">产品咨询</SelectItem>
                        <SelectItem value="order">订单问题</SelectItem>
                        <SelectItem value="cooperation">商务合作</SelectItem>
                        <SelectItem value="complaint">投诉建议</SelectItem>
                        <SelectItem value="other">其他问题</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">留言内容</Label>
                    <Textarea id="message" placeholder="请输入您的留言内容" rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    提交留言
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 地图 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">公司位置</h2>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=map of wuhan china"
              alt="果然好忙公司地址"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">果然好忙总部</h3>
              <p className="text-sm text-muted-foreground mb-1">
                <MapPin className="h-4 w-4 inline-block mr-1" />
                湖北省武汉市洪山区光谷大道77号
              </p>
              <p className="text-sm text-muted-foreground">
                <Phone className="h-4 w-4 inline-block mr-1" />
                400-123-4567
              </p>
            </div>
          </div>
        </div>

        {/* 分支机构 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">全国分支机构</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "北京", address: "北京市朝阳区建国路88号", phone: "010-12345678" },
              { city: "上海", address: "上海市浦东新区陆家嘴金融贸易区", phone: "021-12345678" },
              { city: "广州", address: "广州市天河区珠江新城", phone: "020-12345678" },
              { city: "深圳", address: "深圳市南山区科技园", phone: "0755-12345678" },
              { city: "成都", address: "成都市高新区天府大道", phone: "028-12345678" },
              { city: "重庆", address: "重庆市渝中区解放碑", phone: "023-12345678" },
            ].map((branch, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{branch.city}分公司</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 inline-block mr-1" />
                    {branch.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 inline-block mr-1" />
                    {branch.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
