'use client'

import { useAssemblyStore } from '@/store/assemblyStore'
import { useColorStore } from '@/store/colorStore'
import { useAssembly } from '@/hooks/useAssembly'
import { getEffectiveColor } from '@/lib/assemblyLoader'

interface BomModalProps {
  assemblyUrl: string
}

export default function BomModal({ assemblyUrl }: BomModalProps) {
  const assembly = useAssembly(assemblyUrl)
  const { selectedParts, setSelectedPart } = useAssemblyStore()
  const { partColors } = useColorStore()

  if (!assembly)
    return <div className="text-white/30 text-xs font-mono">Loading...</div>

  return (
    <div className="flex flex-col gap-1">
      {/* Header */}
      <div className="grid grid-cols-3 gap-2 px-2 py-1.5 border-b border-white/6 mb-1">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          PART
        </span>
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          FILE
        </span>
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          COLOR
        </span>
      </div>

      {/* Lignes */}
      {assembly.parts.map((part) => {
        const isSelected = selectedParts.includes(part.file)
        const effectiveColor = getEffectiveColor(part, partColors)
        return (
          <div
            key={part.file}
            onClick={(e) => setSelectedPart(part.file, e.ctrlKey || e.metaKey)}
            className={`grid grid-cols-3 gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors duration-100
              ${isSelected ? 'bg-[rgba(34,211,238,0.08)]' : 'hover:bg-white/4'}`}
          >
            <span
              className={`text-[12px] truncate ${isSelected ? 'text-[#22d3ee]' : 'text-white/70'}`}
            >
              {part.label}
            </span>
            <span className="text-white/30 text-[11px] font-mono truncate">
              {part.file}
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                style={{ background: effectiveColor }}
              />
              <span className="text-white/30 text-[10px] font-mono">
                {effectiveColor}
              </span>
            </div>
          </div>
        )
      })}

      {/* Footer */}
      <div className="mt-2 pt-2 border-t border-white/6">
        <span className="text-white/20 text-[10px] font-mono">
          {assembly.parts.length} PARTS
        </span>
      </div>
    </div>
  )
}
