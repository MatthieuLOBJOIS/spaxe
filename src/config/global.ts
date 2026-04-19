import type { NavLink, LogoSize, LogoSizeConfig } from '@/types/global'

// Logo size configurations ───────────────────────────────────────────

export const sizes: Record<LogoSize, LogoSizeConfig> = {
  sm: { text: 'text-2xs', tracking: 'tracking-wider', triangle: 'text-2xs' },
  md: { text: 'text-lg', tracking: 'tracking-widest', triangle: 'text-base' },
  lg: { text: 'text-2xl', tracking: 'tracking-widest', triangle: 'text-xl' },
  toolbar: { text: 'text-lg', tracking: 'tracking-logo', triangle: 'text-lg' },
}

// Navigation links ───────────────────────────────────────────

export const INTERNAL_LINKS: Record<string, NavLink> = {
  home: { href: '/', label: 'Home' },
  viewer: { href: '/viewer', label: 'Start' },
  features: { href: '#features', label: 'Features' },
  howItWorks: { href: '#how-it-works', label: 'How it works' },
}
export const EXTERNAL_LINKS: Record<string, NavLink> = {
  github: { href: 'https://github.com/MatthieuLOBJOIS/spaxe', label: 'GitHub' },
  nextjs: { href: 'https://nextjs.org', label: 'Next.js 16' },
  threejs: { href: 'https://threejs.org', label: 'Three.js' },
  r3f: { href: 'https://r3f.docs.pmnd.rs', label: 'React Three Fiber' },
  vercel: { href: 'https://vercel.com', label: 'Vercel' },
}
export const NAV_LINKS: NavLink[] = [
  INTERNAL_LINKS.features,
  INTERNAL_LINKS.howItWorks,
  EXTERNAL_LINKS.github,
]
export const FOOTER_PRODUCT_LINKS: NavLink[] = [
  INTERNAL_LINKS.viewer,
  INTERNAL_LINKS.features,
  INTERNAL_LINKS.howItWorks,
]
export const FOOTER_STACK_LINKS: NavLink[] = [
  EXTERNAL_LINKS.nextjs,
  EXTERNAL_LINKS.threejs,
  EXTERNAL_LINKS.r3f,
  EXTERNAL_LINKS.vercel,
]
export const DEMO_LINK = '/viewer/demo/robot-atos'

// Release info ────────────────────────────────────────

export const release = 'V0.1'

// Copyright notice ────────────────────────────────────────

export const copyright = '© 2026 SPAXE — ALL RIGHTS RESERVED'
