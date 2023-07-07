import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import bytebaseImage from '@/images/logos/bytebase.png'
import kusionImage from '@/images/logos/kusion.png'
import aliyunImage from '@/images/logos/aliyun.png'
import csecImage from '@/images/logos/csec.png'
import huoshanImage from '@/images/logos/huoshan.png'
import sealosImage from '@/images/logos/sealos.png'
import smartideImage from '@/images/logos/smartide.png'

const images = [
  { name: 'bytebase', logo: bytebaseImage, url: 'https://www.bytebase.com' },
  { name: 'sealos', logo: sealosImage, url: 'https://www.sealyun.com/' },
  { name: 'aiyun', logo: aliyunImage, url: 'https://www.aliyun.com/' },
  { name: 'kusion', logo: kusionImage, url: 'https:kusionstack.io' },
  { name: 'huoshan', logo: huoshanImage, url: 'https://www.volcengine.com/' },
  { name: 'csec', logo: csecImage, url: 'https://service.caict.ac.cn/' },
  { name: 'smartide', logo: smartideImage, url: 'https://www.smartide.cn/' },
]

// KubeVela, KusionStack, Sealos, SmartIDE, 平台工程社区, 云原生社区
export function Community() {
  return (
    <section id="images" aria-label="images" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          主办社区
        </h2>
        <div align="center" className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-4 md:gap-x-16 lg:gap-x-36">
          {images.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Link href={sponsor.url}><Image src={sponsor.logo} alt={sponsor.name} unoptimized /></Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
