'use client'

import StepCard from './StepCard'
import { STEPS } from '@/config/landing/steps'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-hiw-bg px-[12%] py-30">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex px-3 py-1.5 bg-hiw-card-border border border-hiw-card-border rounded-full mb-5">
          <span className="text-hiw-accent text-[11px] font-mono tracking-[1px]">
            HOW IT WORKS
          </span>
        </div>

        <h2 className="text-foreground font-bold text-4xl md:text-5xl tracking-[-1px] m-0">
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
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
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
