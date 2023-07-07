import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo />
        <div className="flex items-center gap-4 px-4 mt-6 font-display text-2xl border-blue-600/10 text-blue-600 py-4">
          <p>
            平台工程社区
          </p>
          <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
          <p>Platform User Group</p>
          <p> </p>
          <Link href={"https://github.com/platform-user-group"}><FaGithub color='black'/></Link>
        </div>
      </Container>
    </header>
  )
}
