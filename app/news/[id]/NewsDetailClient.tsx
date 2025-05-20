"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"

export default function NewsDetailClient({ article }: { article: any }) {
  // 相关文章（可根据实际需要调整）
  const relatedArticles = [
    {
      id: 2,
      title: "水果冷链物流技术创新与应用",
      excerpt: "冷链物流是保障水果新鲜度的关键环节。本文介绍了最新的水果冷链技术发展和在实际运输中的应用案例...",
      image: "/fruit-cold-chain-logistics.png",
      date: "2023-09-28",
      category: "物流技术",
    },
    {
      id: 3,
      title: "连锁水果店经营策略与挑战",
      excerpt: "随着消费升级，水果零售行业竞争加剧。本文分享了成功水果连锁店的经营策略和应对市场挑战的方法...",
      image: "/fruit-retail-store-management.png",
      date: "2023-09-10",
      category: "零售管理",
    },
    {
      id: 5,
      title: "水果产业数字化转型趋势",
      excerpt: "数字化转型正在重塑水果产业链。本文探讨了水果产业数字化转型的主要趋势和成功案例，为企业提供转型思路。",
      image: "/placeholder.svg?height=200&width=300&query=digital transformation in fruit industry",
      date: "2023-08-15",
      category: "市场分析",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/news" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回资讯列表
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* 文章主体 */}
          <div>
            <Card className="border-none shadow-md mb-8">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{article.category}</Badge>
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>
                      {article.author} | {article.authorTitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{article.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{article.comments}</span>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>

                <div className="prose prose-emerald max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

                <div className="flex flex-wrap gap-2 mt-8">
                  {article.tags && article.tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="outline" className="bg-gray-50 hover:bg-gray-100 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-8 pt-8 border-t">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>点赞 ({article.likes})</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>分享</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Bookmark className="h-4 w-4" />
                      <span>收藏</span>
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>评论 ({article.comments})</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 评论区 */}
            <Card className="border-none shadow-md mb-8">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold mb-6">评论 ({article.comments})</h2>

                {/* 评论输入框 */}
                <div className="mb-8">
                  <textarea
                    className="w-full border rounded-lg p-4 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="写下您的评论..."
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">发表评论</Button>
                  </div>
                </div>

                {/* 评论列表 */}
                <div className="space-y-6">
                  {[
                    {
                      name: "李经理",
                      company: "鲜果一号连锁",
                      avatar: "/diverse-business-professional.png",
                      content:
                        "非常详实的分析，对我们制定下一年度的采购策略很有帮助。特别是关于热带水果贸易增长的预测，与我们的市场观察非常吻合。",
                      date: "2023-10-16",
                      likes: 12,
                    },
                    {
                      name: "王总",
                      company: "果然鲜水果超市",
                      avatar: "/diverse-business-people-meeting.png",
                      content:
                        "文章提到的数字化技术在水果贸易中的应用非常值得关注。我们最近也在尝试使用区块链技术进行产品溯源，确实提升了客户信任度。",
                      date: "2023-10-17",
                      likes: 8,
                    },
                    {
                      name: "张分析师",
                      company: "水果行业研究院",
                      avatar: "/diverse-business-team.png",
                      content:
                        "对气候变化影响的分析很到位。建议可以进一步探讨不同产区的气候风险差异，以及如何通过多元化采购来分散风险。",
                      date: "2023-10-18",
                      likes: 15,
                    },
                  ].map((comment, i) => (
                    <div key={i} className="border-b pb-6 last:border-0">
                      <div className="flex gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={comment.avatar || "/placeholder.svg"}
                            alt={comment.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <span className="font-medium">{comment.name}</span>
                              <span className="text-sm text-muted-foreground ml-2">{comment.company}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-muted-foreground mb-2">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{comment.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                              回复
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">查看更多评论</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 作者信息 */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">作者信息</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100&query=professional business portrait"
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{article.author}</h4>
                    <p className="text-sm text-muted-foreground">{article.authorTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  资深市场研究专家，拥有10年水果行业研究经验，专注于全球水果贸易和市场趋势分析。
                </p>
                <Button variant="outline" className="w-full">
                  查看作者文章
                </Button>
              </CardContent>
            </Card>

            {/* 相关文章 */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">相关文章</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <div key={article.id} className="flex gap-3">
                      <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          <Link href={`/news/${article.id}`} className="hover:text-emerald-600">
                            {article.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700" asChild>
                    <Link href="/news">查看更多文章</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 热门标签 */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">热门标签</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "市场趋势",
                    "冷链物流",
                    "零售管理",
                    "进出口政策",
                    "水果品质",
                    "季节性供需",
                    "包装创新",
                    "数字化转型",
                    "连锁经营",
                    "消费升级",
                  ].map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-50 hover:bg-gray-100 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 订阅资讯 */}
            <Card className="border-none shadow-sm bg-emerald-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">订阅行业资讯</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  订阅我们的行业资讯，每周获取最新的市场动态、技术创新和管理经验。
                </p>
                <div className="space-y-2">
                  <input type="email" placeholder="请输入您的邮箱" className="w-full px-3 py-2 border rounded-md" />
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">订阅</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 