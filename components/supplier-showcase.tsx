import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function SupplierShowcase() {
  const suppliers = [
    {
      id: 1,
      name: "阳光果园",
      location: "海南省海口市",
      specialty: "热带水果",
      rating: 4.8,
      verified: true,
      image: "/placeholder.svg?height=100&width=100&query=fruit farm logo",
      years: 8,
    },
    {
      id: 2,
      name: "绿源果业",
      location: "山东省烟台市",
      specialty: "苹果、梨",
      rating: 4.9,
      verified: true,
      image: "/placeholder.svg?height=100&width=100&query=apple orchard logo",
      years: 12,
    },
    {
      id: 3,
      name: "鲜果直供",
      location: "广西壮族自治区南宁市",
      specialty: "芒果、荔枝",
      rating: 4.7,
      verified: true,
      image: "/placeholder.svg?height=100&width=100&query=mango farm logo",
      years: 5,
    },
    {
      id: 4,
      name: "丰收果园",
      location: "福建省漳州市",
      specialty: "柑橘、龙眼",
      rating: 4.6,
      verified: true,
      image: "/placeholder.svg?height=100&width=100&query=citrus farm logo",
      years: 10,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {suppliers.map((supplier) => (
        <Card key={supplier.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border">
                <Image src={supplier.image || "/placeholder.svg"} alt={supplier.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{supplier.name}</h3>
                  {supplier.verified && (
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-200"
                    >
                      认证
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{supplier.location}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1 mb-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(supplier.rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{supplier.rating}</span>
              </div>
              <p className="text-sm">
                <span className="font-medium">专营:</span> {supplier.specialty}
              </p>
              <p className="text-sm">
                <span className="font-medium">入驻年限:</span> {supplier.years}年
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full border-emerald-200 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600"
              asChild
            >
              <Link href={`/suppliers/${supplier.id}`}>查看供应商</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
