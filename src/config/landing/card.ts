import { Box, Layers, Network, FileCode, Move3d, Scan } from 'lucide-react'
import type { Feature, Step } from '@/types/card'

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

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Import your STL',
    desc: 'Drop a single STL or a full assembly folder with an assembly.json config. Spaxe detects the format automatically.',
  },
  {
    num: '02',
    title: 'Explore in 3D',
    desc: 'Rotate, zoom, and pan your assembly. Click any part to select it and see its position in the hierarchy.',
  },
  {
    num: '03',
    title: 'Build your view',
    desc: 'Use transform handles to manually position parts and build your own exploded view. Attach docs and links to parts.',
  },
  {
    num: '04',
    title: 'Share or embed',
    desc: 'Export your assembly as an embeddable iframe or share a direct URL with your team.',
  },
]
