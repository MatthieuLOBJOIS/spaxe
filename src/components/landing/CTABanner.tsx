import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { DEMO_LINK } from '@/config/landing/links'

export default function CTABanner() {
  return (
    <section className="hidden md:flex px-6 md:px-[12%] py-25 items-center justify-between border-t border-b border-border bg-surface">
      <div>
        <h2 className="text-white font-bold text-5xl tracking-tight m-0 mb-3">
          Ready to navigate
          <br />
          your assembly?
        </h2>
        <p className="text-muted-foreground text-base m-0">
          No account required. Load the demo and explore in seconds.
        </p>
      </div>

      <Link href={DEMO_LINK}>
        <div className="flex items-center gap-2.5 px-9 py-4 bg-primary hover:bg-primary-hover rounded-lg text-white font-medium text-base cursor-pointer transition-colors duration-150 whitespace-nowrap">
          Try Demo <ArrowRight size={18} />
        </div>
      </Link>
    </section>
  )
}
