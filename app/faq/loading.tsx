import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
      </div>

      {/* 搜索框骨架 */}
      <div className="max-w-xl mx-auto mb-12">
        <Skeleton className="h-14 w-full rounded-md" />
      </div>

      {/* 问题分类骨架 */}
      <div className="max-w-4xl mx-auto mb-8">
        <Skeleton className="h-10 w-full max-w-lg mx-auto rounded-md" />
      </div>

      {/* 问题列表骨架 */}
      <div className="max-w-4xl mx-auto mb-16">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="mb-4">
            <Skeleton className="h-14 w-full rounded-md mb-2" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md mt-1" />
          </div>
        ))}
      </div>

      {/* 热门问题骨架 */}
      <div className="max-w-4xl mx-auto mb-16">
        <Skeleton className="h-8 w-40 mx-auto mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-lg" />
          ))}
        </div>
      </div>

      {/* 其他帮助方式骨架 */}
      <Skeleton className="h-64 w-full max-w-4xl mx-auto rounded-lg" />
    </div>
  )
}
