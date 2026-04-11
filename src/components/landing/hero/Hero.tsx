'use client'

import dynamic from 'next/dynamic'
import ScrollIndicator from '@/components/landing/ScrollIndicator'
import WorkspaceMockup from '@/components/landing/workspace-mockup/WorkspaceMockup'
import HeroContent from './HeroContent'
import HeroDecorations from './HeroDecorations'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SceneCanvas interactive={false} showGhost />
      </div>

      <HeroDecorations />

      <HeroContent />

      <div className="hidden lg:block">
        <WorkspaceMockup />
      </div>

      <ScrollIndicator />
    </section>
  )
}
