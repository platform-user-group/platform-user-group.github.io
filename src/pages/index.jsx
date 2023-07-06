import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Copration } from '@/components/Copration'
import { Community } from '@/components/Community'

export default function Home() {
  return (
    <>
      <Head>
        <title>平台工程社区 (中国)</title>
        <meta
          name="description"
          content="Platform User Group"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Speakers />
        <Sponsors />
        <Copration/>
        <Community/>
      </main>
      <Footer />
    </>
  )
}
