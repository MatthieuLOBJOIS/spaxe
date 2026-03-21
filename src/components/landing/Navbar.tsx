'use client'

import Link from 'next/link'
import { INTERNAL_LINKS, NAV_LINKS } from '@/config/links'
import ExternalLink from '@/components/ui/ExternalLink'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-12 bg-[rgba(20,20,22,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]">
      {/* Logo */}
      <Link
        href={INTERNAL_LINKS.home.href}
        className="flex items-center no-underline"
      >
        <span className="text-white font-bold text-xl tracking-[4px]">SP</span>
        <span className="text-[#F26522] text-lg tracking-[4px]">▲</span>
        <span className="text-white font-bold text-xl tracking-[4px]">XE</span>
      </Link>

      {/* Liens */}
      <div className="flex items-center gap-8">
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

      {/* CTA */}
      <Link href={INTERNAL_LINKS.viewer.href} className="no-underline">
        <div className="p-[9px_22px] bg-[#F26522] hover:bg-[#FF8C42] rounded text-white font-bold text-sm cursor-pointer transition-colors duration-150">
          {INTERNAL_LINKS.viewer.label}
        </div>
      </Link>
    </nav>
  )
}
