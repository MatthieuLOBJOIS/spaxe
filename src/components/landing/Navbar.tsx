'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { INTERNAL_LINKS, NAV_LINKS } from '@/config/links'
import ExternalLink from '@/components/ui/ExternalLink'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 h-16 bg-[rgba(20,20,22,0.92)] backdrop-blur-md border-b border-white/6">
        <div className="h-full flex items-center px-6 md:px-12">
          {/* Logo — gauche */}
          <Link
            href={INTERNAL_LINKS.home.href}
            className="flex items-center no-underline"
          >
            <span className="text-white font-bold text-xl tracking-[4px]">
              SP
            </span>
            <span className="text-[#F26522] text-lg tracking-[4px]">▲</span>
            <span className="text-white font-bold text-xl tracking-[4px]">
              XE
            </span>
          </Link>

          {/* Liens — absolument centrés */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(({ href, label }) => {
              const isExternal = href.startsWith('http')
              return isExternal ? (
                <ExternalLink
                  key={label}
                  href={href}
                  className="text-white/55 hover:text-white transition-colors duration-150 text-sm no-underline"
                >
                  {label}
                </ExternalLink>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-white/55 hover:text-white transition-colors duration-150 text-sm no-underline"
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* CTA — droite */}
          <div className="ml-auto hidden md:block">
            <Link href={INTERNAL_LINKS.viewer.href} className="no-underline">
              <div className="px-5.5 py-2.25 bg-[#F26522] hover:bg-[#FF8C42] rounded text-white font-bold text-sm cursor-pointer transition-colors duration-150 whitespace-nowrap">
                {INTERNAL_LINKS.viewer.label}
              </div>
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden ml-auto text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-99 bg-[rgba(20,20,22,0.98)] backdrop-blur-md border-b border-white/6 flex flex-col md:hidden">
          {NAV_LINKS.map(({ href, label }) => {
            const isExternal = href.startsWith('http')
            return isExternal ? (
              <ExternalLink
                key={label}
                href={href}
                className="text-white/70 hover:text-white hover:bg-white/4 transition-colors text-base no-underline px-6 py-4 border-b border-white/6"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </ExternalLink>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-white/70 hover:text-white hover:bg-white/4 transition-colors text-base no-underline px-6 py-4 border-b border-white/6"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
