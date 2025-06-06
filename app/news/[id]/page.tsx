import NewsDetailClient from "./NewsDetailClient"

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
    image: "/placeholder.png",
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

export function generateStaticParams() {
  return articles.map(article => ({ id: article.id }))
}

export default function NewsDetailPage(props: any) {
  const { params } = props
  const article = articles.find((a) => a.id === params.id) || articles[0]
  return <NewsDetailClient article={article} />
}
