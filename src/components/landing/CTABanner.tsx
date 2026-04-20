import { ArrowRight } from 'lucide-react'

import { InternalLink } from '@/components/ui/InternalLink'
import { DEMO_LINK } from '@/config/global'

export default function CTABanner() {
  return (
    <section className="hidden md:flex px-6 md:px-[12%] py-25 items-center justify-between border-t border-b border-border bg-surface-elevated">
      <div>
        <h2 className="text-fg font-bold text-5xl tracking-tight m-0 mb-3">
          Ready to navigate
          <br />
          your assembly?
        </h2>
        <p className="text-muted text-base m-0">
          No account required. Load the demo and explore in seconds.
        </p>
      </div>
      <InternalLink
        href={DEMO_LINK}
        className="px-9 py-4 whitespace-nowrap"
        variant="primary"
      >
        Try Demo <ArrowRight size={16} />
      </InternalLink>
    </section>
  )
}
