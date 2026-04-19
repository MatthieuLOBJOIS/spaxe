import FeatureCard from './FeatureCard'
import { FEATURES } from '@/config/landing/features'
import { SectionBadge } from '@/components/ui/SectionBadge'

export default function Features() {
  return (
    <section
      id="features"
      className="bg-surface-elevated px-6 md:px-[12%] py-16"
    >
      <div className="mb-6">
        <SectionBadge label="FEATURES" className="mb-4" />
        <h2 className="text-foreground font-bold text-4xl md:text-5xl tracking-tight m-0">
          Everything you need
          <br />
          to navigate complexity.
        </h2>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <FeatureCard key={f.label} {...f} className="p-8" />
        ))}
      </div>

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
