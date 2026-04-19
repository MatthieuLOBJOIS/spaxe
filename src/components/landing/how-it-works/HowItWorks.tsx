import StepCard from './StepCard'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { STEPS } from '@/config/landing/card'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface/60 px-6 md:px-[12%] py-30">
      <div className="mb-16">
        <SectionBadge label="HOW IT WORKS" className="mb-5" />

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
