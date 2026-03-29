'use client'

import { STEPS, type Step } from '@/config/landing/steps'

function StepCard({
  num,
  title,
  desc,
  className,
}: Step & { className?: string }) {
  return (
    <div
      className={`flex bg-[#1a1a1c] rounded-xl border border-white/[0.07] ${className}`}
    >
      <span className="text-[#F26522] font-mono font-bold opacity-40 shrink-0 leading-none text-[32px]">
        {num}
      </span>
      <div className="flex flex-col gap-2.5">
        <span className="text-white font-bold text-lg">{title}</span>
        <span className="text-white/40 text-sm leading-relaxed">{desc}</span>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#141416] px-[12%] py-30">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex px-3 py-1.25 bg-[rgba(242,101,34,0.1)] border border-[rgba(242,101,34,0.25)] rounded-full mb-5">
          <span className="text-[#F26522] text-[11px] font-mono tracking-[1px]">
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-[-1px] m-0">
          From file to interactive
          <br />
          assembly in seconds.
        </h2>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {STEPS.map((s) => (
          <StepCard key={s.num} {...s} className="gap-6 p-8" />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden -mx-6 px-6">
        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {STEPS.map((s) => (
            <StepCard
              key={s.num}
              {...s}
              className="gap-5 p-6 snap-start shrink-0 w-[80vw]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
