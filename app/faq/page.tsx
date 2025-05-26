import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQSearch } from "@/components/faq-search"
import { FAQContact } from "@/components/faq-contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "常见问题 - 果然好忙",
  description: "果然好忙常见问题解答，帮助您了解平台使用方法、账户管理、采购流程、物流配送等相关问题。",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">常见问题</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          为您解答关于果然好忙平台的常见问题，帮助您更好地了解我们的服务和使用方法
        </p>
      </div>

      {/* 搜索框 - 使用客户端组件 */}
      <div className="max-w-xl mx-auto mb-12">
        <FAQSearch />
      </div>

      {/* 问题分类 */}
      <Tabs defaultValue="platform" className="max-w-4xl mx-auto mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="platform">平台使用</TabsTrigger>
            <TabsTrigger value="account">账户管理</TabsTrigger>
            <TabsTrigger value="purchase">采购流程</TabsTrigger>
            <TabsTrigger value="logistics">物流配送</TabsTrigger>
            <TabsTrigger value="after-sales">售后服务</TabsTrigger>
          </TabsList>
        </div>

        {/* 平台使用问题 */}
        <TabsContent value="platform">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何注册成为楚果集采的会员？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                注册成为果然好忙会员非常简单。点击网站右上角的"注册"按钮，填写公司信息、联系人信息和营业执照等资料，提交审核后，我们会在1-2个工作日内完成审核，并通过短信和邮件通知您审核结果。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">平台的最小起订量是多少？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                不同商品的最小起订量有所不同，一般在商品详情页面会标明具体的最小起订量。作为批发平台，我们的最小起订量通常会比零售渠道高，以确保批发价格的优势。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">平台支持哪些支付方式？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                我们支持多种支付方式，包括银行转账、支付宝企业支付、微信支付等。对于长期合作的客户，我们还提供账期支付服务，具体可与客户经理协商。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">平台上的价格是否含税？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                平台上展示的价格默认为不含税价格。在结算时，系统会根据您的企业类型和税率要求，自动计算并显示含税价格。如有特殊税率要求，可在下单时备注或联系客服。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何联系客服？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                您可以通过以下方式联系我们的客服：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>客服电话：400-123-4567（周一至周日 9:00-18:00）</li>
                  <li>电子邮箱：service@chuguo.com</li>
                  <li>在线客服：点击网站右下角的客服图标</li>
                  <li>微信公众号：搜索"果然好忙"</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">平台是否有移动端应用？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                是的，我们提供移动端应用，您可以在App Store或Google
                Play商店搜索"果然好忙"下载安装。移动端应用支持采购下单、订单查询、物流跟踪等功能，方便您随时随地管理采购事务。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* 账户管理问题 */}
        <TabsContent value="account">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何修改账户信息？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                登录账户后，点击右上角的用户头像，选择"账户设置"，在账户设置页面，您可以修改公司信息、联系人信息等基本资料。修改后点击"保存"即可生效。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">忘记密码怎么办？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                如果您忘记了登录密码，可以在登录页面点击"忘记密码"，根据提示输入注册时使用的手机号或邮箱，系统会向您发送验证码，通过验证后，您可以设置新的密码。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何添加子账号？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                主账号登录后，进入"账户设置"页面，选择"子账号管理"，点击"添加子账号"，填写子账号信息并设置权限，完成后点击"创建"即可。子账号可以根据设定的权限进行相应的操作，方便企业内部分工协作。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何更新企业资质证明？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                当您的企业营业执照或其他资质证明更新后，请在"账户设置"中的"企业资质"页面上传最新的资质文件。上传后，我们会在1-2个工作日内完成审核，审核通过后，您的账户资质信息将自动更新。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">账户被锁定怎么办？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                账户可能因多次密码错误、异常操作或逾期未付款等原因被临时锁定。如遇账户锁定，请联系客服提供相关证明材料，我们会尽快为您处理解锁。建议定期更新密码并确保账户安全。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* 采购流程问题 */}
        <TabsContent value="purchase">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何下单采购？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                登录账户后，您可以浏览商品列表，选择需要的水果品类，点击"加入购物车"。在购物车中确认商品及数量后，点击"去结算"，填写收货信息和发票信息，选择支付方式完成支付即可。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何查询订单状态？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                登录账户后，点击"我的订单"，您可以查看所有历史订单及其状态。点击具体订单可以查看订单详情、物流信息和支付状态等。您也可以通过手机APP随时查询订单状态。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">能否修改或取消已提交的订单？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                订单提交后，在订单状态为"待支付"或"待确认"时可以申请修改或取消。进入订单详情页，点击"申请取消"或"申请修改"，填写原因后提交。如果订单已进入处理或配送状态，则无法修改或取消，建议联系客服协商解决。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何申请批量采购优惠？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                对于大批量采购需求，您可以联系客户经理或在线客服申请专属报价。也可以在"批量采购"页面提交采购计划，包括水果品类、数量、交货周期等信息，我们会根据您的需求提供最优惠的价格方案。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">采购有哪些付款方式？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                我们支持以下付款方式：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>在线支付：支付宝、微信支付、银联支付</li>
                  <li>银行转账：支持对公转账，转账后请提供转账凭证</li>
                  <li>账期付款：通过信用评估的企业客户可申请15-30天账期</li>
                  <li>分期付款：部分大额订单可申请分期付款</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何获取发票？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                在下单时，您可以选择是否需要发票以及发票类型（普通发票或增值税专用发票）。订单完成后，我们会根据您提供的发票信息开具发票。电子发票将发送至您的注册邮箱，纸质发票将随货物一起发出或单独邮寄。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* 物流配送问题 */}
        <TabsContent value="logistics">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">平台的配送范围是哪些？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                我们目前的配送范围覆盖全国主要城市和地区。一线城市全境覆盖，二三线城市覆盖市区及周边地区。部分偏远地区可能无法配送或需额外物流费用，具体以下单时系统提示为准。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">商品多久能送达？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                配送时效因地区而异：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>一线城市：通常下单后24小时内送达</li>
                  <li>二线城市：通常下单后48小时内送达</li>
                  <li>三线及以下城市：通常下单后72小时内送达</li>
                  <li>特殊时期（如节假日、恶劣天气）可能会延长配送时间</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何查询物流状态？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                登录账户后，进入"我的订单"页面，点击具体订单，在订单详情页面可以查看最新的物流状态。您也可以通过短信中的物流单号，在相应物流公司官网或APP中查询配送进度。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">是否提供冷链物流？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                是的，我们为所有易腐水果提供全程冷链物流服务，确保水果在运输过程中保持最佳温度和品质。我们的冷链物流车辆配备温控监测系统，实时监控运输全程温度变化，保障水果新鲜度。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">可以指定送货时间吗？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                是的，在下单时，您可以在备注中填写期望的送货时间，我们会尽量满足。对于大额订单或固定周期采购，您可以与客户经理协商制定专属的配送计划，包括固定的送货日期和时间段。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">物流费用如何计算？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                物流费用根据配送距离、订单重量和体积综合计算。一般情况下：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>订单金额满3000元，同城配送免费</li>
                  <li>订单金额满5000元，省内配送免费</li>
                  <li>订单金额满10000元，全国配送免费</li>
                  <li>特殊区域或特殊商品可能有额外物流费用</li>
                </ul>
                具体费用在下单结算时会自动计算并显示。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* 售后服务问题 */}
        <TabsContent value="after-sales">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">
                如果收到的水果质量有问题，如何处理？
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                我们对所有商品的品质都有严格把控，但如果您收到的商品确实存在质量问题，请在收货后24小时内联系客服，并提供相关照片证明。我们会根据实际情况进行退换货或赔偿处理。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何申请退货或换货？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                在"我的订单"中找到相应订单，点击"申请售后"，选择退货或换货，填写原因并上传相关证明图片，提交申请后我们会在24小时内处理。非质量问题的退换货可能需要承担运费，具体以客服确认为准。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">退款多久能到账？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                退款时间取决于您的支付方式：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>在线支付（支付宝、微信等）：审核通过后1-3个工作日内退回原支付账户</li>
                  <li>银行转账：审核通过后3-7个工作日内退回原付款账户</li>
                  <li>账期付款：未支付部分将直接取消，已支付部分按照上述规则处理</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">是否提供水果品质保障？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                是的，我们提供"鲜果品质保障服务"。所有商品均经过严格的品控检测，确保每一批水果都符合质量标准。如果您对收到的水果有任何品质疑问，可以随时联系客服，我们会第一时间为您解决。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">产品出现腐烂变质怎么办？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                如果您在收货时发现商品已经腐烂变质，请拒收并联系客服说明情况。如果收货后发现部分商品存在腐烂变质问题，请在24小时内联系客服，并提供相关照片证明，我们将根据实际损坏情况给予相应的退款或补发处理。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg border-emerald-100 px-4">
              <AccordionTrigger className="text-lg font-medium py-4">如何联系售后客服？</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                您可以通过以下方式联系售后客服：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>售后专线：400-123-4568（周一至周日 9:00-20:00）</li>
                  <li>售后邮箱：after-sales@chuguo.com</li>
                  <li>在线客服：点击网站右下角"售后服务"图标</li>
                  <li>微信公众号：搜索"果然好忙"，进入菜单"客户服务"-"售后支持"</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      {/* 热门问题 */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">热门问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              question: "如何获取批发价格?",
              answer:
                "注册成为会员后，登录账户即可查看所有商品的批发价格。不同的会员等级和采购量可能享受不同的价格优惠。",
            },
            {
              question: "是否支持样品申请?",
              answer:
                "是的，我们支持样品申请服务。新客户可在注册账户后申请样品，审核通过后我们会安排样品发送，样品费用将在首次正式采购时抵扣。",
            },
            {
              question: "有哪些售后保障?",
              answer:
                "我们提供完善的售后保障，包括专业的客服团队、7天品质问题退换货政策、物流损坏赔付等，确保您的采购无忧。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-emerald-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 其他帮助方式 */}
      <div className="bg-white py-12 rounded-lg shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">还没找到答案？</h2>
          <p className="text-center text-muted-foreground mb-8">
            如果您的问题在以上内容中没有得到解答，可以通过以下方式获取更多帮助
          </p>

          {/* 使用客户端组件处理联系功能 */}
          <FAQContact />
        </div>
      </div>
    </div>
  )
}
