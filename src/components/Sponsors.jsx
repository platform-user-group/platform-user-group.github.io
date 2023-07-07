import Image from 'next/image'

import { Container } from '@/components/Container'
import xintongyuanImage from '@/images/logos/xintongyuan.png'

const sponsors = [
  { name: 'xintongyuan', logo: xintongyuanImage },
]
// 信通院
export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          联合发起单位
        </h2>
        <br /><br />
        <div align="center">
            <Image src={xintongyuanImage} width={200} height={80} unoptimized />
        </div>
      </Container>
    </section>
  )
}
