import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { SearchBar } from "@/components/search-bar"
import { FeaturedProducts } from "@/components/featured-products"
import { Pagination } from "@/components/pagination"
import Link from "next/link"
import Image from "next/image"
import { Filter, SlidersHorizontal, ArrowLeft } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CategoryClient from "./CategoryClient"
import { Metadata } from "next"

// 分类数据
const categories = {
  imported: {
    name: "进口水果",
    description: "来自世界各地的优质进口水果，品种丰富，品质保障",
    image: "/imported-fruits-banner.png",
    subcategories: ["美国", "智利", "泰国", "澳大利亚", "新西兰", "南非"],
  },
  domestic: {
    name: "国产水果",
    description: "本地新鲜采摘的各类应季水果，从产地直达您的餐桌",
    image: "/chinese-domestic-fruits-banner.png",
    subcategories: ["海南", "山东", "新疆", "福建", "广西", "云南"],
  },
  tropical: {
    name: "热带水果",
    description: "香甜可口的热带特色水果，带给您不一样的味蕾体验",
    image: "/tropical-fruits-banner.png",
    subcategories: ["榴莲", "芒果", "菠萝", "椰子", "火龙果", "山竹"],
  },
  berries: {
    name: "浆果类",
    description: "营养丰富的各类新鲜浆果，富含抗氧化物质",
    image: "/placeholder.png",
    subcategories: ["草莓", "蓝莓", "树莓", "黑莓", "樱桃", "葡萄"],
  },
  citrus: {
    name: "柑橘类",
    description: "维C丰富的各类柑橘水果，酸甜可口，健康美味",
    image: "/placeholder.png",
    subcategories: ["橙子", "柠檬", "柚子", "橘子", "金桔", "青柠"],
  },
  melons: {
    name: "瓜果类",
    description: "清爽多汁的各类瓜果，夏日解暑的最佳选择",
    image: "/placeholder.png",
    subcategories: ["西瓜", "哈密瓜", "香瓜", "木瓜", "甜瓜", "蜜瓜"],
  },
}

// 生成静态参数
export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }))
}

// 生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = categories[params.slug as keyof typeof categories]
  return {
    title: category?.name || "未知分类",
    description: category?.description || "暂无描述",
  }
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage(props: any) {
  return <CategoryClient params={props.params} />
}
