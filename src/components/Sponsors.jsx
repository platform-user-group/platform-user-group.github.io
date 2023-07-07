import Image from 'next/image'

import { Container } from '@/components/Container'
import xintongyuanImage from '@/images/logos/xintongyuan.png'
import Link from 'next/link'

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          联合发起单位
        </h2>
        <br /><br />
        <div align="center">
          <Link href={'https://service.caict.ac.cn/'}><Image src={xintongyuanImage} width={200} height={80} unoptimized /></Link>
        </div>
      </Container>
    </section>
  )
}
