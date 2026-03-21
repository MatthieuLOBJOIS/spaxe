// Liens internes
export const INTERNAL_LINKS = {
  home: { href: '/', label: 'Home' },
  viewer: { href: '/viewer', label: 'Commencer' },
  features: { href: '#features', label: 'Features' },
  howItWorks: { href: '#how-it-works', label: 'How it works' },
} as const

// Liens externes
export const EXTERNAL_LINKS = {
  github: { href: 'https://github.com/MatthieuLOBJOIS/spaxe', label: 'GitHub' },
  nextjs: { href: 'https://nextjs.org', label: 'Next.js 15' },
  threejs: { href: 'https://threejs.org', label: 'Three.js' },
  r3f: { href: 'https://r3f.docs.pmnd.rs', label: 'React Three Fiber' },
  vercel: { href: 'https://vercel.com', label: 'Vercel' },
} as const

// Groupes de liens pour la navbar et le footer
export const NAV_LINKS = [
  INTERNAL_LINKS.features,
  INTERNAL_LINKS.howItWorks,
  EXTERNAL_LINKS.github,
] as const

export const FOOTER_PRODUCT_LINKS = [
  INTERNAL_LINKS.viewer,
  INTERNAL_LINKS.features,
  INTERNAL_LINKS.howItWorks,
] as const

export const FOOTER_STACK_LINKS = [
  EXTERNAL_LINKS.nextjs,
  EXTERNAL_LINKS.threejs,
  EXTERNAL_LINKS.r3f,
  EXTERNAL_LINKS.vercel,
] as const
