import Image from 'next/image'

import { Container } from '@/components/Container'
import xintongyuanImage from '@/images/logos/xintongyuan.png'

const sponsors = [
  { name: 'Transistor', logo: xintongyuanImage },
]

// 掘金、开源中国、思否、SOFA官网、蚂蚁科技官网、活动行、示说网
export function Cooperation() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          合作伙伴网站
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} width={200} height={80} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
