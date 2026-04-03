'use client'

import { useState } from 'react'
import { useAssemblyStore } from '@/store/assemblyStore'
import SelectedParts from '@/components/ui/SelectedParts'
import XYZInput from '@/components/workspace/modals/transform/XYZInput'

import ResetAllButton from '@/components/ui/ResetAllButton'
import ResetButton from '@/components/ui/ResetButtons'

export default function TransformModal() {
  const selectedPart = useAssemblyStore((s) => s.selectedParts[0] ?? null)

  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])

  const updateAxis = (
    setter: React.Dispatch<React.SetStateAction<[number, number, number]>>,
    axis: 0 | 1 | 2,
    value: number
  ) => {
    setter((prev) => {
      const next: [number, number, number] = [...prev]
      next[axis] = value
      return next
    })
  }

  const resetSelected = () => {
    setPosition([0, 0, 0])
    setRotation([0, 0, 0])
  }

  const resetAll = () => {
    setPosition([0, 0, 0])
    setRotation([0, 0, 0])
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Pièce sélectionnée */}
      <SelectedParts />

      {/* Translation */}
      <XYZInput
        label="POSITION"
        values={position}
        onChange={(axis, val) => updateAxis(setPosition, axis, val)}
      />

      {/* Rotation */}
      <XYZInput
        label="ROTATION (°)"
        values={rotation}
        onChange={(axis, val) => updateAxis(setRotation, axis, val)}
      />

      {/* Boutons reset */}
      <div className="flex gap-2 pt-2 border-t border-white/6">
        <ResetButton onReset={resetSelected} disabled={!selectedPart} />
        <ResetAllButton onReset={resetAll} />
      </div>
    </div>
  )
}
