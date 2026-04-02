'use client'

import { useState } from 'react'
import { useAssemblyStore } from '@/store/assemblyStore'

type NeighborMode = 'proximity' | 'hierarchy'

const MODES: { id: NeighborMode; label: string; desc: string }[] = [
  { id: 'proximity', label: 'Proximity', desc: 'Parts within 2mm' },
  { id: 'hierarchy', label: 'Hierarchy', desc: 'Parent / child from JSON' },
]

function NeighborsList({
  neighbors,
  selectedPart,
}: {
  neighbors: string[]
  selectedPart: string | null
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
        CONNECTED PARTS
      </span>
      <div className="flex flex-col gap-1">
        {!selectedPart && (
          <p className="text-white/20 text-[12px] font-mono">
            Select a part to see neighbors
          </p>
        )}
        {selectedPart && neighbors.length === 0 && (
          <p className="text-white/20 text-[12px] font-mono">
            No connected parts
          </p>
        )}
        {neighbors.map((part) => (
          <div
            key={part}
            className="px-3 py-1.5 rounded-lg bg-white/3 border border-white/6 text-white/70 text-[12px] font-mono truncate"
          >
            {part}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NeighborhoodModal() {
  const selectedParts = useAssemblyStore((s) => s.selectedParts)
  const neighbors = useAssemblyStore((s) => s.neighbors)
  const neighborhoodLevel = useAssemblyStore((s) => s.neighborhoodLevel)
  const setNeighborhoodLevel = useAssemblyStore((s) => s.setNeighborhoodLevel)
  const clearNeighborhood = useAssemblyStore((s) => s.clearNeighborhood)
  const [mode, setMode] = useState<NeighborMode>('hierarchy')

  const selectedPart = selectedParts[0] ?? null

  return (
    <div className="flex flex-col gap-4">
      {/* Pièce sélectionnée */}
      <div className="px-3 py-2 bg-white/3 rounded-lg border border-white/6">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          SELECTED
        </span>
        <p
          className={`text-[13px] font-semibold mt-0.5 truncate ${selectedPart ? 'text-[#22d3ee]' : 'text-white/20'}`}
        >
          {selectedPart ?? 'No part selected'}
        </p>
      </div>

      {/* Mode */}
      <div className="flex flex-col gap-2">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          MODE
        </span>
        <div className="flex items-center rounded-lg border border-white/8 overflow-hidden">
          {MODES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setMode(id)}
              className={`flex-1 py-2 text-[11px] font-semibold font-mono tracking-[1px] uppercase transition-colors duration-150
                ${
                  mode === id
                    ? 'bg-[rgba(242,101,34,0.15)] text-[#F26522]'
                    : 'bg-transparent text-white/30 hover:text-white/60 cursor-pointer'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-white/20 text-[10px] font-mono">
          {MODES.find((m) => m.id === mode)?.desc}
        </span>
      </div>

      {/* Niveau */}
      <div className="flex flex-col gap-2">
        <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
          LEVEL
        </span>
        <div className="flex gap-2">
          {[1, 2, 3].map((level) => (
            <button
              key={level}
              disabled={!selectedPart}
              onClick={() => setNeighborhoodLevel(level)}
              className={`flex-1 py-2 rounded-lg border text-[11px] font-mono font-semibold transition-colors duration-150
                ${
                  neighborhoodLevel === level
                    ? 'bg-[rgba(242,101,34,0.15)] border-[rgba(242,101,34,0.4)] text-[#F26522]'
                    : 'bg-white/3 border-white/6 text-white/30 hover:text-white/60 cursor-pointer'
                }
                ${!selectedPart ? 'cursor-not-allowed opacity-30' : ''}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Liste voisins */}
      <NeighborsList neighbors={neighbors} selectedPart={selectedPart} />

      {/* Reset */}
      <div className="pt-2 border-t border-white/6">
        <button
          onClick={clearNeighborhood}
          className="w-full px-3 py-2 rounded-lg text-[12px] font-semibold border bg-white/3 border-white/6 text-white/40 hover:text-white hover:bg-white/6 cursor-pointer transition-colors duration-150"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
