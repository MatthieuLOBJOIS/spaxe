'use client'

import type { LucideIcon } from 'lucide-react'
import { FEATURES } from '@/config/landing/features'

function FeatureCard({
  icon: Icon,
  label,
  desc,
  className,
}: {
  icon: LucideIcon
  label: string
  desc: string
  className?: string
}) {
  return (
    <div
      className={`flex flex-col gap-4 bg-[#141416] rounded-xl border border-white/[0.07] ${className}`}
    >
      <div className="w-10 h-10 bg-[rgba(242,101,34,0.1)] rounded-lg flex items-center justify-center">
        <Icon size={20} className="text-[#F26522]" />
      </div>
      <span className="text-white font-bold text-base">{label}</span>
      <span className="text-white/40 text-sm leading-relaxed">{desc}</span>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="bg-[#1a1a1c] px-[12%] py-30 md:px-[12%]">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex px-3 py-1.25 bg-[rgba(242,101,34,0.1)] border border-[rgba(242,101,34,0.25)] rounded-full mb-5">
          <span className="text-[#F26522] text-[11px] font-mono tracking-[1px]">
            FEATURES
          </span>
        </div>
        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-[-1px] m-0">
          Everything you need
          <br />
          to navigate complexity.
        </h2>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <FeatureCard key={f.label} {...f} className="p-8" />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden -mx-6 px-6">
        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.label}
              {...f}
              className="p-6 snap-start shrink-0 w-[75vw]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
