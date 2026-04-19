'use client'

import Link from 'next/link'

import { ExternalLink } from '@/components/ui/ExternalLink'
import { EXTERNAL_LINKS, INTERNAL_LINKS } from '@/config/global'
import { CtaButton } from '@/components/ui/CtaButton'

interface HeroCtasProps {
  isMobile: boolean
}

export default function HeroCTAs({ isMobile }: HeroCtasProps) {
  return (
    <div className="flex flex-col gap-3 items-center md:items-start">
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {isMobile ? (
          <CtaButton disabled>{INTERNAL_LINKS.viewer.label}</CtaButton>
        ) : (
          <Link href={INTERNAL_LINKS.viewer.href}>
            <CtaButton arrow>{INTERNAL_LINKS.viewer.label}</CtaButton>
          </Link>
        )}

        <ExternalLink href={EXTERNAL_LINKS.github.href}>
          <CtaButton variant="outline">{EXTERNAL_LINKS.github.label}</CtaButton>
        </ExternalLink>
      </div>

      {isMobile && (
        <span className="text-white/30 text-xs font-mono tracking-label">
          ⚠ DESKTOP ONLY — USE A COMPUTER TO ACCESS THE VIEWER
        </span>
      )}
    </div>
  )
}
