import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Apple, Banana, Cherry, Grape, CitrusIcon as Lemon, CherryIcon as Strawberry } from "lucide-react"

export function CategoryNav() {
  const categories = [
    { name: "进口水果", icon: <Apple className="h-5 w-5" />, href: "/category/imported" },
    { name: "国产水果", icon: <Banana className="h-5 w-5" />, href: "/category/domestic" },
    { name: "热带水果", icon: <Lemon className="h-5 w-5" />, href: "/category/tropical" },
    { name: "浆果类", icon: <Strawberry className="h-5 w-5" />, href: "/category/berries" },
    { name: "柑橘类", icon: <Cherry className="h-5 w-5" />, href: "/category/citrus" },
    { name: "瓜果类", icon: <Grape className="h-5 w-5" />, href: "/category/melons" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="outline"
          className="h-auto py-2 border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50"
          asChild
        >
          <Link href={category.href} className="flex items-center gap-2">
            {category.icon}
            <span>{category.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}
