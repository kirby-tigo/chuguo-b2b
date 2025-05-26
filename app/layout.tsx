import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"
import { CartProvider } from "@/context/cart-context"
import { OrderProvider } from "@/context/order-context"
import { FavoritesProvider } from "@/context/favorites-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "楚果集采 - 专业水果B2B采购平台",
  description: "楚果集采是中国领先的水果B2B采购平台，为连锁商超、水果店、餐饮企业提供一站式水果采购解决方案。",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <OrderProvider>
              <FavoritesProvider>
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <Toaster />
              </FavoritesProvider>
            </OrderProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
