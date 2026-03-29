'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollIndicator from './ScrollIndicator'
import WorkspaceMockup from './WorkspaceMockup'
import ExternalLink from '@/components/ui/ExternalLink'
import { EXTERNAL_LINKS, INTERNAL_LINKS } from '@/config/landing/links'
import { useIsMobile } from '@/hooks/useIsMobile'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

// ── Badge version ────────────────────────────────────────
function VersionBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(242,101,34,0.12)] border border-[rgba(242,101,34,0.3)] rounded-full w-fit">
      <span className="text-[#F26522] text-[11px] font-mono tracking-[1px]">
        ASSEMBLY VIEWER · V0.1
      </span>
    </div>
  )
}

// ── Triangle décoratif ───────────────────────────────────
function DecorativeTriangle() {
  return (
    <svg
      className="absolute bottom-0 right-0 z-1 opacity-10"
      width="500"
      height="500"
      viewBox="0 0 500 500"
    >
      <polygon
        points="500,500 0,500 500,0"
        fill="none"
        stroke="#F26522"
        strokeWidth="1.5"
      />
      <polygon
        points="500,500 150,500 500,150"
        fill="none"
        stroke="#F26522"
        strokeWidth="1"
      />
      <polygon
        points="500,500 300,500 500,300"
        fill="none"
        stroke="#F26522"
        strokeWidth="0.8"
      />
    </svg>
  )
}

// ── CTAs ─────────────────────────────────────────────────
function HeroCTAs({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col gap-3 items-center md:items-start">
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {isMobile ? (
          <div className="flex items-center gap-2 px-7 py-3.5 bg-white/5 rounded-lg border border-white/10 text-white/30 font-bold text-[15px] cursor-not-allowed">
            {INTERNAL_LINKS.viewer.label}
          </div>
        ) : (
          <Link href={INTERNAL_LINKS.viewer.href} className="no-underline">
            <div className="flex items-center gap-2 px-7 py-3.5 bg-[#F26522] hover:bg-[#FF8C42] rounded-lg text-white font-bold text-[15px] cursor-pointer transition-colors duration-150">
              {INTERNAL_LINKS.viewer.label} <ArrowRight size={16} />
            </div>
          </Link>
        )}

        <ExternalLink
          href={EXTERNAL_LINKS.github.href}
          className="flex items-center gap-2 px-7 py-3.5 bg-transparent rounded-lg border border-white/20 text-white/70 font-bold text-[15px] no-underline hover:text-white hover:border-white/40 transition-colors duration-150"
        >
          {EXTERNAL_LINKS.github.label}
        </ExternalLink>
      </div>

      {isMobile && (
        <span className="text-white/30 text-xs font-mono tracking-[1px]">
          ⚠ DESKTOP ONLY — USE A COMPUTER TO ACCESS THE VIEWER
        </span>
      )}
    </div>
  )
}

// ── Hero ─────────────────────────────────────────────────
export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* GhostShape en fond */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <SceneCanvas interactive={false} showGhost />
      </div>

      {/* Texte */}
      <div className="relative z-10 w-full px-6 md:ml-[12%] md:w-auto md:max-w-130 flex flex-col gap-7 items-center md:items-start text-center md:text-left">
        <VersionBadge />
        <h1 className="text-white font-bold leading-none tracking-[-2px] m-0 text-[clamp(40px,8vw,68px)]">
          Navigate
          <br />
          complexity.
          <br />
          <span className="text-[#F26522]">In 3D.</span>
        </h1>
        <p className="text-white/50 leading-relaxed m-0 text-[clamp(15px,3vw,18px)] max-w-120">
          Interactive 3D navigation for complex assemblies. Built for makers and
          industrial teams.
        </p>
        <HeroCTAs isMobile={isMobile} />
      </div>

      {/* Mockup — caché sur mobile */}
      <div className="hidden lg:block">
        <WorkspaceMockup />
      </div>

      <DecorativeTriangle />
      <ScrollIndicator />
    </section>
  )
}
