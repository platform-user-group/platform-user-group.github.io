import Image from 'next/image'
import Link from 'next/link';

import { Container } from '@/components/Container'
import antopensourceImage from '@/images/logos/antopensource.png'
import huodongxingImage from '@/images/logos/huodongxing.png'
import oschinaImage from '@/images/logos/oschina.png'
import sfImage from '@/images/logos/sf.png'
import shishuoImage from '@/images/logos/shishuo.png'
import sofastackImage from '@/images/logos/sofastack.png'
import xitujuejinImage from '@/images/logos/xitujuejin.png'

const images = [
  { name: 'antopensource', logo: antopensourceImage, url: 'https://opensource.antgroup.com' },
  { name: 'huodongxing', logo: huodongxingImage, url: 'https://www.huodongxing.com/' },
  { name: 'oschina', logo: oschinaImage, url: 'https://www.oschina.net/' },
  { name: 'sf', logo: sfImage, url: 'https://segmentfault.com/' },
  { name: 'shishuo', logo: shishuoImage, url: 'https://www.slidestalk.com/' },
  { name: 'sofastack', logo: sofastackImage, url: 'https://www.sofastack.tech/' },
  { name: 'xitujuejin', logo: xitujuejinImage, url: 'https://juejin.cn/' },
]

// 掘金、开源中国、思否、SOFA官网、蚂蚁科技官网、活动行、示说网
export function Cooperation() {
  return (
    <section id="images" aria-label="images" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          合作伙伴网站
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 sm:grid-cols-4 lg:gap-x-40">
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
