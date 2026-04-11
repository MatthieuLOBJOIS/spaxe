import HeroBadge from './HeroBadge'
import HeroCTAs from './HeroCTAs'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function HeroContent() {
  const isMobile = useIsMobile()

  return (
    <div className="relative z-10 w-full px-6 md:ml-[12%] md:w-auto md:max-w-[32.5rem] flex flex-col gap-7 items-center md:items-start text-center md:text-left">
      <HeroBadge />

      <h1 className="text-white font-bold leading-none tracking-tight m-0 text-[clamp(2.5rem,8vw,4.25rem)]">
        Navigate
        <br />
        complexity.
        <br />
        <span className="text-primary">In 3D.</span>
      </h1>

      <p className="text-muted-foreground/80 leading-relaxed m-0 text-[clamp(0.9375rem,3vw,1.125rem)] max-w-[30rem]">
        Interactive 3D navigation for complex assemblies. Built for makers and
        industrial teams.
      </p>

      <HeroCTAs isMobile={isMobile} />
    </div>
  )
}
