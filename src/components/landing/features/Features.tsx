import { FEATURES } from '@/config/landing/features'
import FeatureCard from './FeatureCard'

export default function Features() {
  return (
    <section id="features" className="bg-surface px-6 md:px-[12%] py-30">
      <div className="mb-16">
        <div className="inline-flex px-3 py-1.25 bg-primary/10 border border-primary/25 rounded-full mb-5">
          <span className="text-primary text-[11px] font-mono tracking-[1px]">
            FEATURES
          </span>
        </div>
        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tight m-0">
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
