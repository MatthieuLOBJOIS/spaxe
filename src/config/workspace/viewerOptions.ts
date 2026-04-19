import { Play, FolderOpen, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { DEMO_LINK } from '@/config/global'

export interface ViewerOption {
  id: string
  icon: LucideIcon
  label: string
  desc: string
  available: boolean
  href?: string
}

export const VIEWER_OPTIONS: ViewerOption[] = [
  {
    id: 'demo',
    icon: Play,
    label: 'Try Demo',
    desc: 'Explore a pre-loaded AUBO cobot + ATOS Q scanner assembly',
    available: true,
    href: DEMO_LINK,
  },
  {
    id: 'import',
    icon: FolderOpen,
    label: 'Import STL',
    desc: 'Drop your own STL files or assembly folder',
    available: false,
  },
  {
    id: 'ai',
    icon: Sparkles,
    label: 'Generate with AI',
    desc: 'Describe your assembly and let AI generate the 3D model',
    available: false,
  },
]
