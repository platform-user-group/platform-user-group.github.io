import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import agendas from '@/components/Agendas'

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">欢迎 </span>欢迎加入平台工程社区
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Platform User Group (PUG)
              是一个自发组织的兴趣小组，旨在推动平台工程/开源基础设施等概念在中国的普及和软件生态共建
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
