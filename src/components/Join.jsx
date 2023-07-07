import Image from 'next/image'

import { Container } from '@/components/Container'
import joinCodeImage from '@/images/join_code.png'

export function Join() {
  return (
    <section id="join" aria-label="Sponsors" className="py-10 sm:py-12">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          活动报名
        </h2>
        <br /><br />
        <div align="center">
            <Image src={joinCodeImage}/>
        </div>
      </Container>
    </section>
  )
}
