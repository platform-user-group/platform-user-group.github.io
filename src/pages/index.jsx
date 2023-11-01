import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Cooperation } from '@/components/Cooperation'
import { Community } from '@/components/Community'
import agendas from '@/components/Agendas'

export default function Home() {
  return (
    <>
      <Head>
        <title>平台工程社区 (中国)</title>
        <meta name="description" content="Platform User Group" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Schedule />
        {agendas.map((agenda) => (
          <Speakers agenda={agenda} />
        ))}
        <Sponsors />
        <Community />
        <Cooperation />
      </main>
      <Footer />
    </>
  )
}
