"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function FAQContact() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [questionDialogOpen, setQuestionDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟表单提交
    setFormSubmitted(true)
    setTimeout(() => {
      setContactDialogOpen(false)
      setFormSubmitted(false)
    }, 1500)
  }

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟表单提交
    setFormSubmitted(true)
    setTimeout(() => {
      setQuestionDialogOpen(false)
      setFormSubmitted(false)
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
          <Search className="h-8 w-8" />
        </div>
        <h3 className="font-semibold mb-2">搜索解决方案</h3>
        <p className="text-muted-foreground">使用页面顶部的搜索框，输入关键词查找相关问题和解答</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
          <span className="text-emerald-700 font-semibold text-lg">客服</span>
        </div>
        <h3 className="font-semibold mb-2">在线客服</h3>
        <p className="text-muted-foreground">工作时间内随时联系我们的在线客服，获取实时帮助和支持</p>

        <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-4 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600">
              联系客服
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>联系客服</DialogTitle>
              <DialogDescription>请填写以下信息，我们的客服人员将尽快与您联系。</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleContactSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    姓名
                  </Label>
                  <Input id="name" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    电话
                  </Label>
                  <Input id="phone" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">
                    公司
                  </Label>
                  <Input id="company" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="issue" className="text-right">
                    问题类型
                  </Label>
                  <select
                    id="issue"
                    className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="account">账户问题</option>
                    <option value="order">订单问题</option>
                    <option value="product">产品问题</option>
                    <option value="logistics">物流问题</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={formSubmitted}>
                  {formSubmitted ? "提交中..." : "提交"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
          <span className="text-emerald-700 font-semibold text-lg">提问</span>
        </div>
        <h3 className="font-semibold mb-2">提交问题</h3>
        <p className="text-muted-foreground">提交您的具体问题，我们的客服团队会在24小时内给您答复</p>

        <Dialog open={questionDialogOpen} onOpenChange={setQuestionDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-4 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600">
              提交问题
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>提交您的问题</DialogTitle>
              <DialogDescription>详细描述您的问题，我们将尽快为您解答。</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleQuestionSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="q-name" className="text-right">
                    姓名
                  </Label>
                  <Input id="q-name" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="q-email" className="text-right">
                    邮箱
                  </Label>
                  <Input id="q-email" type="email" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="q-category" className="text-right">
                    问题类别
                  </Label>
                  <select
                    id="q-category"
                    className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="platform">平台使用</option>
                    <option value="account">账户管理</option>
                    <option value="purchase">采购流程</option>
                    <option value="logistics">物流配送</option>
                    <option value="after-sales">售后服务</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="q-content" className="text-right pt-2">
                    问题内容
                  </Label>
                  <Textarea id="q-content" className="col-span-3" rows={5} required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={formSubmitted}>
                  {formSubmitted ? "提交中..." : "提交问题"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
