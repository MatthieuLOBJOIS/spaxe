'use client'

import { useEffect } from 'react'
import { Part } from '@/types/assembly'
import { useAssemblyStore } from '@/store/assemblyStore'
import { getEffectiveColor } from '@/lib/assemblyLoader'
import { useColorStore } from '@/store/colorStore'

interface PanelLeftProps {
  parts: Part[]
}

// ── Sous-composant ligne de pièce ────────────────────────
interface PartRowProps {
  part: Part
  isSelected: boolean
  isVisible: boolean
  effectiveColor: string
  onSelect: (e: React.MouseEvent) => void
  onToggleVisible: (e: React.MouseEvent) => void
}

function PartRow({
  part,
  isSelected,
  isVisible,
  effectiveColor,
  onSelect,
  onToggleVisible,
}: PartRowProps) {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center gap-2.5 px-4 py-1.75 cursor-pointer border-l-2 transition-colors duration-100
        ${
          isSelected
            ? 'bg-[rgba(34,211,238,0.1)] border-[#22d3ee]'
            : 'bg-transparent border-transparent'
        }`}
    >
      {/* Checkbox visibilité */}
      <div
        onClick={onToggleVisible}
        className={`w-4 h-4 rounded-[3px] border border-white/25 shrink-0 flex items-center justify-center cursor-pointer transition-colors
          ${isVisible ? 'bg-white/10' : 'bg-transparent'}`}
      >
        {isVisible && <div className="w-2 h-2 rounded-[1px] bg-white/60" />}
      </div>

      {/* Nom */}
      <span
        className={`flex-1 text-[13px] truncate transition-colors
        ${isSelected ? 'text-[#22d3ee]' : isVisible ? 'text-white/80' : 'text-white/30'}`}
      >
        {part.label}
      </span>

      {/* Rond couleur */}
      <div
        className="w-3 h-3 rounded-full shrink-0 border border-white/20"
        style={{ background: effectiveColor }}
      />
    </div>
  )
}

// ── Panel principal ──────────────────────────────────────
export default function PanelLeft({ parts }: PanelLeftProps) {
  const {
    selectedParts,
    setSelectedPart,
    visibleParts,
    setPartVisible,
    initVisibleParts,
  } = useAssemblyStore()

  const { partColors } = useColorStore()

  useEffect(() => {
    initVisibleParts(parts.map((p) => p.file))
  }, [parts, initVisibleParts])

  const toggleVisible = (file: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setPartVisible(file, !(visibleParts[file] ?? true))
  }

  return (
    <div className="w-65 h-full bg-[#141414] border-r border-white/10 flex flex-col shrink-0">
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <span className="text-white/40 text-[11px] font-semibold tracking-[1px] uppercase">
          Parts Tree
        </span>
        <span className="text-[#F26522] text-[13px] font-mono">
          {parts.length}
        </span>
      </div>

      {/* Liste */}
      <div className="flex-1 overflow-y-auto">
        {parts.map((part) => (
          <PartRow
            key={part.file}
            part={part}
            isSelected={selectedParts.includes(part.file)}
            isVisible={visibleParts[part.file] ?? true}
            effectiveColor={getEffectiveColor(part, partColors)}
            onSelect={(e) => setSelectedPart(part.file, e.ctrlKey || e.metaKey)}
            onToggleVisible={(e) => toggleVisible(part.file, e)}
          />
        ))}
      </div>
    </div>
  )
}
