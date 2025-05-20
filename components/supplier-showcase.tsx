import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { getOptimizedImageUrl, getImageSizes } from "@/lib/image-utils"

export function SupplierShowcase() {
  const suppliers = [
    {
      id: 1,
      name: "阳光果园",
      location: "海南省海口市",
      specialty: "热带水果",
      rating: 4.8,
      verified: true,
      image: "/fruit-company-logo-1.png",
      years: 8,
    },
    {
      id: 2,
      name: "绿源果业",
      location: "山东省烟台市",
      specialty: "苹果、梨",
      rating: 4.9,
      verified: true,
      image: "/fruit-company-logo-1.png",
      years: 12,
    },
    {
      id: 3,
      name: "鲜果直供",
      location: "广西壮族自治区南宁市",
      specialty: "芒果、荔枝",
      rating: 4.7,
      verified: true,
      image: "/fruit-company-logo-1.png",
      years: 5,
    },
    {
      id: 4,
      name: "丰收果园",
      location: "福建省漳州市",
      specialty: "柑橘、龙眼",
      rating: 4.6,
      verified: true,
      image: "/fruit-company-logo-1.png",
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
                <Image
                  src={getOptimizedImageUrl(supplier.image, 160, 160)}
                  alt={supplier.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
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
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">主营品类</span>
                <span>{supplier.specialty}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">经营年限</span>
                <span>{supplier.years}年</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">评分</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{supplier.rating}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href={`/suppliers/${supplier.id}`}>查看详情</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
