"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, ShoppingCart, User, Phone, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const { user, isLoggedIn, logout } = useAuth()
  const { totalItems } = useCart()

  // 调试：打印登录状态
  console.log("[Header] user:", user)
  console.log("[Header] isLoggedIn:", isLoggedIn)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              楚
            </div>
            <span className="text-xl font-bold">果然好忙</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      首页
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>商品分类</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { name: "进口水果", href: "/category/imported", description: "来自世界各地的优质进口水果" },
                        { name: "国产水果", href: "/category/domestic", description: "本地新鲜采摘的各类应季水果" },
                        { name: "热带水果", href: "/category/tropical", description: "香甜可口的热带特色水果" },
                        { name: "浆果类", href: "/category/berries", description: "营养丰富的各类新鲜浆果" },
                        { name: "柑橘类", href: "/category/citrus", description: "维C丰富的各类柑橘水果" },
                        { name: "瓜果类", href: "/category/melons", description: "清爽多汁的各类瓜果" },
                      ].map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/products" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      全部商品
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/promotions" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      促销活动
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)} className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/contact" className="hidden md:flex items-center gap-1 text-sm">
              <Phone className="h-4 w-4" />
              <span>400-123-4567</span>
            </Link>

            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {isLoggedIn ? (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <Avatar className="h-8 w-8 mr-1">
                        <AvatarImage src={user?.avatar || ""} alt={user?.name || "用户头像"} />
                        <AvatarFallback>{user?.name?.charAt(0) || "用"}</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline">{user?.name || "我的账户"}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/account"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              个人中心
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/account/orders"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              我的订单
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => logout()}
                              className="w-full text-left block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              退出登录
                            </button>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">登录</Link>
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/register">注册</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">打开菜单</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="grid gap-6 py-6">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                        楚
                      </div>
                      <span className="text-lg font-bold">果然好忙</span>
                    </Link>
                    <div className="grid gap-3">
                      <Link href="/" className="text-lg font-medium">
                        首页
                      </Link>
                      <Link href="/products" className="text-lg font-medium">
                        全部商品
                      </Link>
                      <Link href="/category/imported" className="text-lg font-medium">
                        商品分类
                      </Link>
                      <Link href="/promotions" className="text-lg font-medium">
                        促销活动
                      </Link>
                      <Link href="/contact" className="text-lg font-medium">
                        联系我们
                      </Link>
                    </div>
                    <div className="grid gap-2">
                      {isLoggedIn ? (
                        <>
                          <div className="flex items-center gap-3 mb-2">
                            <Avatar>
                              <AvatarImage src={user?.avatar || ""} alt={user?.name || "用户头像"} />
                              <AvatarFallback>{user?.name?.charAt(0) || "用"}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user?.name}</p>
                              <p className="text-sm text-muted-foreground">{user?.company}</p>
                            </div>
                          </div>
                          <Link href="/account" className="flex items-center gap-2 text-lg font-medium">
                            <User className="h-5 w-5" />
                            个人中心
                          </Link>
                          <Link href="/account/orders" className="flex items-center gap-2 text-lg font-medium">
                            <ShoppingCart className="h-5 w-5" />
                            我的订单
                          </Link>
                          <Button onClick={() => logout()}>退出登录</Button>
                        </>
                      ) : (
                        <>
                          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                            <Link href="/login">登录</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href="/register">注册</Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="py-2 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索水果、品牌或供应商..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
