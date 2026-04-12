'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { EXTERNAL_LINKS, INTERNAL_LINKS } from '@/config/landing/links'

export default function HeroCTAs({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col gap-3 items-center md:items-start">
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {isMobile ? (
          <div className="flex items-center gap-2 px-7 py-3.5 bg-white/5 rounded-lg border border-white/10 text-white/30 font-medium text-[15px] cursor-not-allowed">
            {INTERNAL_LINKS.viewer.label}
          </div>
        ) : (
          <Link href={INTERNAL_LINKS.viewer.href}>
            <div className="flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-hover rounded-lg text-white font-medium text-[15px] transition-colors duration-150">
              {INTERNAL_LINKS.viewer.label} <ArrowRight size={16} />
            </div>
          </Link>
        )}

        <ExternalLink
          href={EXTERNAL_LINKS.github.href}
          className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/70 font-medium text-[15px] no-underline hover:text-white hover:border-white/40 transition-colors duration-150 rounded-lg"
        >
          {EXTERNAL_LINKS.github.label}
        </ExternalLink>
      </div>

      {isMobile && (
        <span className="text-white/30 text-xs font-mono tracking-[1px]">
          ⚠ DESKTOP ONLY — USE A COMPUTER TO ACCESS THE VIEWER
        </span>
      )}
    </div>
  )
}
