import HeroCTAs from './HeroCTAs'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { RELEASE } from '@/config/global'

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full px-6 md:ml-[12%] md:w-auto md:max-w-130 flex flex-col gap-7 items-center md:items-start text-center md:text-left">
      <SectionBadge label={`ASSEMBLY VIEWER · ${RELEASE}`} />

      <h1 className="text-fg font-bold leading-none tracking-tight m-0 text-5xl md:text-6xl lg:text-7xl">
        Navigate
        <br />
        complexity.
        <br />
        <span className="text-primary">In 3D.</span>
      </h1>

      <p className="text-part-bright leading-relaxed m-0 text-base md:text-lg max-w-120">
        Interactive 3D navigation for complex assemblies. Built for makers and
        industrial teams.
      </p>

      <HeroCTAs />
    </div>
  )
}
