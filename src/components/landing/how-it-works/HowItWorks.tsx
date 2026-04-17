'use client'

import StepCard from './StepCard'
import { STEPS } from '@/config/landing/steps'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface/60 px-6 md:px-[12%] py-30">
      <div className="mb-16">
        <div className="inline-flex px-3 py-1.5 bg-primary/10 border border-primary/25 rounded-full mb-5">
          <span className="text-primary text-[11px] font-mono tracking-[1px]">
            HOW IT WORKS
          </span>
        </div>

        <h2 className="text-foreground font-bold text-4xl md:text-5xl tracking-tight m-0">
          From file to interactive
          <br />
          assembly in seconds.
        </h2>
      </div>

      <div className="hidden md:grid grid-cols-2 gap-8">
        {STEPS.map((s) => (
          <StepCard key={s.num} {...s} className="gap-6 p-8" />
        ))}
      </div>

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
