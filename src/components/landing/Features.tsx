'use client'

import { Box, Layers, Network, FileCode, Move3d, Scan } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  label: string
  desc: string
}

const features: Feature[] = [
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

export default function Features() {
  return (
    <section id="features" className="bg-[#1a1a1c] px-[12%] py-[120px]">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex px-3 py-[5px] bg-[rgba(242,101,34,0.1)] border border-[rgba(242,101,34,0.25)] rounded-full mb-5">
          <span className="text-[#F26522] text-[11px] font-mono tracking-[1px]">
            FEATURES
          </span>
        </div>
        <h2 className="text-white font-bold text-5xl tracking-[-1px] m-0">
          Everything you need
          <br />
          to navigate complexity.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6">
        {features.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="flex flex-col gap-4 p-8 bg-[#141416] rounded-xl border border-white/[0.07]"
          >
            <div className="w-10 h-10 bg-[rgba(242,101,34,0.1)] rounded-lg flex items-center justify-center">
              <Icon size={20} className="text-[#F26522]" />
            </div>
            <span className="text-white font-bold text-base">{label}</span>
            <span className="text-white/40 text-sm leading-relaxed">
              {desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
