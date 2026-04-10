'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { INTERNAL_LINKS } from '@/config/landing/links'

import Logo from '@/components/ui/Logo'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="flex h-full items-center px-6 md:px-12">
          <Link href={INTERNAL_LINKS.home.href} className="flex items-center">
            <Logo size="md" />
          </Link>

          <DesktopMenu />

          {/* Mobile button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
