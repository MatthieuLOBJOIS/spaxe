import Link from 'next/link'

import { Logo } from '@/components/ui/Logo'
import DesktopMenu from './DesktopMenu'
import MobileButton from './MobileButton'
import { INTERNAL_LINKS } from '@/config/global'

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="flex h-full items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
        <Link href={INTERNAL_LINKS.home.href} className="flex items-center">
          <Logo size="md" />
        </Link>

        <DesktopMenu />

        <MobileButton />
      </div>
    </nav>
  )
}
