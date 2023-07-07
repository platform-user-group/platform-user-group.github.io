import Image from 'next/image'

import { Container } from '@/components/Container'
import wechatCodeImage from '@/images/wechat-code.png'

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            关于平台工程社区
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
          平台工程作为 Gartner 发布的 2023 年十大战略技术趋势之一，目前是共建国内平台工程社区的好时机。PUG 社区成立于 2023 年 7 月，目标是推动平台工程在中国的发展，同时为相关从业人员提供友好的交流场所。
          </p>
          <br></br>
          <Image src={wechatCodeImage}></Image>
        </div>
      </Container>
    </section>
  )
}
