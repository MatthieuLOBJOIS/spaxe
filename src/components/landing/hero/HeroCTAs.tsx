'use client'

import { ArrowRight } from 'lucide-react'

import { InternalLink } from '@/components/ui/InternalLink'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { EXTERNAL_LINKS, INTERNAL_LINKS, LINK_VARIANTS } from '@/config/global'
import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'

export default function HeroCTAs() {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col gap-3 items-center md:items-start">
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {isMobile ? (
          <span className={cn(LINK_VARIANTS.primaryDisabled)}>
            {INTERNAL_LINKS.viewer.label}
          </span>
        ) : (
          <InternalLink
            href={INTERNAL_LINKS.viewer.href}
            variant="primary"
            className="px-5 py-2 text-sm"
          >
            {INTERNAL_LINKS.viewer.label} <ArrowRight size={16} />
          </InternalLink>
        )}

        <ExternalLink href={EXTERNAL_LINKS.github.href} variant="outline">
          {EXTERNAL_LINKS.github.label}
        </ExternalLink>
      </div>

      {isMobile && (
        <span className="text-fg/30 text-xs font-mono tracking-label">
          ⚠ DESKTOP ONLY — USE A COMPUTER TO ACCESS THE VIEWER
        </span>
      )}
    </div>
  )
}
