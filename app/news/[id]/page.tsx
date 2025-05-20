"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"

// 模拟文章数据
const articles = [
  {
    id: "1",
    title: "2023年全球水果贸易趋势分析",
    content: `
      <p>随着全球贸易环境的变化，水果进出口市场呈现新的发展趋势。本文分析了主要水果品类的贸易数据和未来市场预测，为行业参与者提供决策参考。</p>
      
      <h2>全球水果贸易概况</h2>
      
      <p>2023年，全球水果贸易总额达到1200亿美元，同比增长5.8%。其中，亚太地区仍然是最大的水果进口市场，占全球进口总额的42%；而拉丁美洲和非洲则是主要的出口地区，分别占全球出口总额的35%和18%。</p>
      
      <p>从品类来看，香蕉、苹果和柑橘类水果仍然是贸易量最大的三类水果，合计占全球水果贸易总量的45%。但值得注意的是，热带特色水果如榴莲、牛油果和火龙果的贸易增速最快，年增长率超过15%。</p>
      
      <h2>主要市场变化</h2>
      
      <p>中国市场：中国继续保持全球最大的水果进口国地位，进口额达到150亿美元，同比增长8.2%。其中，东南亚热带水果进口增长最为显著，特别是榴莲和山竹的进口量同比增长超过20%。</p>
      
      <p>欧盟市场：受能源危机和通胀影响，欧盟水果进口增速放缓，仅增长2.3%。消费者更加关注价格因素，中高端水果消费受到一定影响。</p>
      
      <p>北美市场：美国和加拿大的水果进口保持稳定增长，增速约为4.5%。有机水果和特色水果的需求继续增加，反映了消费者对健康和多样化的追求。</p>
      
      <h2>贸易政策变化</h2>
      
      <p>2023年，全球水果贸易政策环境发生了一些重要变化：</p>
      
      <ul>
        <li>中国与东盟国家签署了新的农产品贸易协议，进一步降低了热带水果的进口关税。</li>
        <li>欧盟实施了更严格的农药残留标准，对进口水果提出了更高的质量要求。</li>
        <li>美国与拉美国家的贸易摩擦有所缓和，有利于拉美水果对美出口。</li>
      </ul>
      
      <h2>物流与供应链变化</h2>
      
      <p>全球航运成本较2022年有所下降，但仍高于疫情前水平。冷链物流技术的创新和应用不断推进，延长了水果的保鲜期和运输距离，为贸易创造了新的可能性。</p>
      
      <p>数字化技术在水果贸易中的应用日益广泛，区块链溯源、智能物流和在线交易平台正在改变传统的贸易模式，提高了交易效率和透明度。</p>
      
      <h2>未来趋势预测</h2>
      
      <p>基于当前的市场数据和发展趋势，我们对未来全球水果贸易提出以下预测：</p>
      
      <ol>
        <li>热带特色水果的贸易将继续保持高速增长，特别是在亚洲和北美市场。</li>
        <li>有机水果和可持续种植水果的市场份额将进一步扩大，反映消费者对健康和环保的关注。</li>
        <li>数字化技术将深刻改变水果贸易的方式，在线B2B平台的交易份额将显著提升。</li>
        <li>气候变化将对全球水果产量和品质产生更大影响，增加市场供应的不确定性。</li>
        <li>区域性贸易协定将进一步深化，促进区域内水果贸易的发展。</li>
      </ol>
      
      <h2>结论与建议</h2>
      
      <p>全球水果贸易正在经历深刻变革，机遇与挑战并存。对于行业参与者，我们提出以下建议：</p>
      
      <ul>
        <li>密切关注消费市场变化，及时调整产品结构和营销策略。</li>
        <li>加强质量管控，满足不断提高的质量标准和消费者期望。</li>
        <li>投资冷链物流和保鲜技术，提高产品竞争力。</li>
        <li>拥抱数字化转型，利用新技术提升运营效率和市场拓展能力。</li>
        <li>关注气候变化影响，制定应对策略，降低供应风险。</li>
      </ul>
      
      <p>总之，尽管面临诸多不确定性，全球水果贸易的长期发展前景仍然乐观。企业需要保持战略定力，同时具备足够的灵活性，才能在变革中把握机遇，实现可持续发展。</p>
    `,
    excerpt:
      "随着全球贸易环境的变化，水果进出口市场呈现新的发展趋势。本文分析了主要水果品类的贸易数据和未来市场预测...",
    image: "/fruit-market-trends.png",
    date: "2023-10-15",
    author: "张经理",
    authorTitle: "市场研究总监",
    category: "市场分析",
    tags: ["市场趋势", "进出口贸易", "水果品类", "贸易政策", "供应链"],
    views: 1250,
    likes: 86,
    comments: 24,
  },
  // 其他文章数据...
]

export default function NewsDetailPage() {
  const params = useParams()
  const id = params.id as string
  // 在实际应用中，这里会根据ID从API获取具体的文章内容
  const article = articles.find((a) => a.id === id) || articles[0]

  // 相关文章
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
                  {article.tags.map((tag, i) => (
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
