import HeroBadge from './HeroBadge'
import HeroCTAs from './HeroCTAs'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function HeroContent() {
  const isMobile = useIsMobile()

  return (
    <div className="relative z-10 w-full px-6 md:ml-[12%] md:w-auto md:max-w-130 flex flex-col gap-7 items-center md:items-start text-center md:text-left">
      <HeroBadge />

      <h1 className="text-white font-bold leading-none tracking-[-2px] m-0 text-[clamp(40px,8vw,68px)]">
        Navigate
        <br />
        complexity.
        <br />
        <span className="text-hero-accent">In 3D.</span>
      </h1>

      <p className="text-text-hero-muted leading-relaxed m-0 text-[clamp(15px,3vw,18px)] max-w-120">
        Interactive 3D navigation for complex assemblies. Built for makers and
        industrial teams.
      </p>

      <HeroCTAs isMobile={isMobile} />
    </div>
  )
}
