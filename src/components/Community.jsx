import Image from 'next/image'

import { Container } from '@/components/Container'
import bytebaseImage from '@/images/logos/bytebase.png'
import kusionImage from '@/images/logos/kusion.png'

const sponsors = [
  { name: 'bytebase', logo: bytebaseImage },
  { name: 'kusion', logo: kusionImage },
]

// KubeVela, KusionStack, Sealos, SmartIDE, 平台工程社区, 云原生社区
export function Community() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          主办社区
        </h2>
        <div align="center" className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
