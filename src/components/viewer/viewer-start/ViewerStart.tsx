import { ArrowLeft } from 'lucide-react'

import { Logo } from '@/components/ui/Logo'
import { InternalLink } from '@/components/ui/InternalLink'
import OptionItem from './OptionItem'
import { INTERNAL_LINKS, RELEASE } from '@/config/global'
import { VIEWER_OPTIONS } from '@/config/viewerOptions'

export default function ViewerStart() {
  return (
    <div className="w-120 bg-surface rounded-2xl border border-border overflow-hidden shadow-md">
      <div className="px-8 pt-8 pb-6 border-b border-border">
        <Logo size="lg" />
        <p className="text-muted text-sm m-0">
          Choose how you want to get started.
        </p>
      </div>

      <div className="p-4 flex flex-col gap-2">
        {VIEWER_OPTIONS.map((option) => (
          <OptionItem key={option.id} {...option} />
        ))}
      </div>

      <div className="px-8 py-4 border-t border-border flex items-center justify-between">
        <span className="text-fg/40 font-mono text-2xs tracking-label">
          {RELEASE} · ASSEMBLY VIEWER
        </span>
        <InternalLink
          href={INTERNAL_LINKS.home.href}
          variant="link"
          className="items-center gap-1"
        >
          <ArrowLeft size={16} /> BACK
        </InternalLink>
      </div>
    </div>
  )
}
