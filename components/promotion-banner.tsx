import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
              限时优惠
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">新客户专享优惠</h2>
            <p className="text-emerald-100 mb-6 max-w-md">
              首次采购满5000元，立减300元。优惠活动截止到本月底，抓紧行动吧！
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/promotions/new-customer">立即了解</Link>
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-6xl md:text-7xl font-bold mb-2">300</div>
            <div className="text-xl mb-4">元优惠券</div>
            <div className="text-sm text-emerald-100">仅限新客户 · 限时领取</div>
          </div>
        </div>
      </div>
    </div>
  )
}
