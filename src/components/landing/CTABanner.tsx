'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { DEMO_LINK } from '@/config/links'

export default function CTABanner() {
  return (
    <section className="hidden md:flex bg-[#1a1a1c] px-[12%] py-25 items-center justify-between border-t border-white/6 border-b border-b-white/6">
      <div>
        <h2 className="text-white font-bold text-[42px] tracking-[-1px] m-0 mb-3">
          Ready to navigate
          <br />
          your assembly?
        </h2>
        <p className="text-white/40 text-base m-0">
          No account required. Load the demo and explore in seconds.
        </p>
      </div>

      <Link href={DEMO_LINK}>
        <div className="flex items-center gap-2.5 px-9 py-4 bg-[#F26522] hover:bg-[#FF8C42] rounded-lg text-white font-bold text-base cursor-pointer transition-colors duration-150 whitespace-nowrap">
          Try Demo <ArrowRight size={18} />
        </div>
      </Link>
    </section>
  )
}
