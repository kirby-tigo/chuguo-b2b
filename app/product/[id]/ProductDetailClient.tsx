"use client"
import { useState } from "react"
import { Star, CheckCircle2, Heart, Share2, MapPin, Phone, MailIcon, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function ProductDetailClient({ product, recommendedProducts }: { product: any, recommendedProducts: any[] }) {
  console.log("ProductDetailClient rendered, product:", product)
  console.log("Recommended products:", recommendedProducts)
  const [mainImage, setMainImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)
  const maxStock = product.stock

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-8 mb-8">
        {/* 主图区 淘宝风格 */}
        <div className="flex gap-4">
          {/* 竖排缩略图 */}
          <div className="flex flex-col gap-2">
            {product.images.map((img: string, idx: number) => (
              <button
                key={img}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 ${mainImage === img ? 'border-orange-500' : 'border-gray-200'} bg-white flex-shrink-0`}
                onClick={() => setMainImage(img)}
              >
                <img src={img.replace('w=1200', 'w=300')} alt={product.name + idx} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
          {/* 大图 */}
          <div className="relative w-[340px] h-[340px] bg-white rounded-lg overflow-hidden shadow flex items-center justify-center">
            <img src={mainImage} alt={product.name} className="object-contain w-full h-full" />
          </div>
        </div>
        {/* 信息区 淘宝风格 */}
        <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-3">
          <h1 className="text-[22px] font-bold leading-snug mb-1">{product.name}</h1>
          <div className="text-sm text-gray-400 mb-2">{product.brand}</div>
          {/* 价格区块 淘宝橙色 */}
          <div className="bg-[#fff7f3] rounded-md px-5 py-4 flex items-end gap-4 mb-2">
            <span className="text-[32px] font-bold text-[#FF5000] leading-none">¥{product.price}</span>
            <span className="text-base text-gray-400 line-through">¥{product.originalPrice}</span>
            <span className="text-xs text-gray-500">/{product.unit}</span>
            <span className="ml-6 text-orange-500 text-xs font-semibold bg-orange-100 rounded px-2 py-0.5">限时特惠</span>
          </div>
          {/* 促销/服务条 淘宝风格 */}
          <div className="flex flex-wrap gap-3 mb-2 text-xs">
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded">7天无理由退换</span>
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded">假一赔十</span>
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded">极速退款</span>
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded">官方物流</span>
          </div>
          {/* 评分/销量/库存/起订量 */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-2">
            <span>销量 <span className="text-gray-800 font-semibold">{product.sales}</span></span>
            <span>库存 <span className="text-gray-800 font-semibold">{product.stock}</span></span>
            <span>起订量 <span className="text-gray-800 font-semibold">{product.minOrder}{product.unit}</span></span>
            <span className="flex items-center"><Star className="w-4 h-4 fill-orange-400 text-orange-400 mr-1" />{product.rating}</span>
          </div>
          {/* 商品参数表 淘宝风格 */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm mb-2">
            <div className="flex"><span className="text-gray-400 w-16">产地：</span><span className="font-medium">{product.origin}</span></div>
            <div className="flex"><span className="text-gray-400 w-16">品牌：</span><span className="font-medium">{product.brand}</span></div>
            <div className="flex"><span className="text-gray-400 w-16">保质期：</span><span className="font-medium">{product.shelfLife}</span></div>
            <div className="flex"><span className="text-gray-400 w-16">储存：</span><span className="font-medium">{product.storage}</span></div>
            <div className="flex"><span className="text-gray-400 w-16">包装：</span><span className="font-medium">{product.packaging}</span></div>
          </div>
          {/* 数量选择器 淘宝风格 */}
          <div className="flex items-center gap-4 mb-2">
            <span className="text-gray-500">数量</span>
            <div className="flex items-center border border-gray-200 rounded overflow-hidden">
              <button className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-50" onClick={() => setQuantity(q => Math.max(1, q-1))}>-</button>
              <input type="text" className="w-12 h-8 text-center border-x border-gray-200 outline-none" value={quantity} readOnly />
              <button className="w-8 h-8 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-50" onClick={() => setQuantity(q => Math.min(maxStock, q+1))}>+</button>
            </div>
            <span className="text-xs text-gray-400">(最多{maxStock}{product.unit})</span>
          </div>
          {/* 主操作按钮 淘宝风格 */}
          <div className="flex gap-4 mt-2 mb-2">
            <button className="flex-1 h-12 rounded-full bg-[#FF5000] hover:bg-orange-600 text-white font-semibold text-lg shadow transition">立即购买</button>
            <button className="flex-1 h-12 rounded-full border border-[#FF5000] text-[#FF5000] font-semibold text-lg hover:bg-orange-50 transition">加入购物车</button>
            <button className="w-12 h-12 rounded-full border border-gray-200 text-gray-400 hover:text-orange-500 flex items-center justify-center"><Heart className="w-5 h-5" /></button>
            <button className="w-12 h-12 rounded-full border border-gray-200 text-gray-400 hover:text-orange-500 flex items-center justify-center"><Share2 className="w-5 h-5" /></button>
          </div>
          {/* 物流/发货地/服务 淘宝风格 */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-orange-500" />发货地：广东湛江</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1 text-orange-500" />客服：400-888-7777</span>
            <span className="flex items-center"><ChevronDown className="w-4 h-4 ml-1" /></span>
          </div>
        </div>
      </div>

      {/* 推荐商品模块 淘宝风格 */}
      <div className="bg-white rounded-xl shadow p-8 mb-8">
        <h2 className="text-xl font-bold mb-6">猜你喜欢</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {recommendedProducts.map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative w-full h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#FF5000]">¥{item.price}</span>
                    <span className="text-xs text-gray-500">已售{item.sales}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400 mr-1" />
                    <span className="text-xs text-gray-500">{item.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
} 