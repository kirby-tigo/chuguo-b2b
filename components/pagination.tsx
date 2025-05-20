import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" disabled>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">上一页</span>
      </Button>
      <Button variant="outline" size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-600">
        1
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href="#">2</Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href="#">3</Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href="#">4</Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href="#">5</Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href="#">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">下一页</span>
        </Link>
      </Button>
    </div>
  )
}
