import { Box, Layers, Network, FileCode, Move3d, Scan } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  label: string
  desc: string
}

export const FEATURES: Feature[] = [
  {
    icon: Box,
    label: 'STL Import',
    desc: 'Drag & drop single parts or full assemblies. Supports world-space and local-space STL coordinates.',
  },
  {
    icon: Move3d,
    label: 'Exploded View',
    desc: 'Manual XYZ positioning per part with transform handles. Build your own exploded view, not an algorithm.',
  },
  {
    icon: Network,
    label: 'Neighborhood',
    desc: 'Click any part to instantly visualize all connected components and their hierarchy.',
  },
  {
    icon: Scan,
    label: 'X-Ray / Layer Peeling',
    desc: 'Peel through layers to inspect inner components without dismantling the assembly.',
  },
  {
    icon: FileCode,
    label: 'URL & PDF Links',
    desc: 'Attach documentation, datasheets, or web links directly to any part.',
  },
  {
    icon: Layers,
    label: 'Iframe Export',
    desc: 'Embed your interactive 3D assembly anywhere with a single line of HTML.',
  },
]
