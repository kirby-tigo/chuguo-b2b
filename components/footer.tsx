import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                Tigo
              </div>
              <span className="text-xl font-bold">钛果集采</span>
            </Link>
            <p className="text-muted-foreground mb-4">专业的B2B水果批发平台，为您提供新鲜优质的水果</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  全部商品
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  促销活动
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  供应商
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">联系方式</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>地址: 江苏省南京市江宁区东山街道拓弘大厦1406室</p>
              <p>电话: 025-51199015</p>
              <p>邮箱: sunlong@tigosc.net</p>
            </address>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>Copyright © 2024 - {new Date().getFullYear()} 南京云镜星途科技有限公司 版权所有</p>
          <p className="mt-2">
            <a 
              href="http://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              苏ICP备2023025305号-5A
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
