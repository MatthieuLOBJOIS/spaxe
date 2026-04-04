'use client'

import { useAssemblyStore } from '@/store/assemblyStore'
import { useTransformStore } from '@/store/transformStore'
import { ManualDelta } from '@/types/transform'
import { DEFAULT_DELTA } from '@/config/workspace/modals/defaultTransform'

import SelectedParts from '@/components/ui/SelectedParts'
import XYZInput from '@/components/workspace/modals/transform/XYZInput'
import ResetButton from '@/components/ui/ResetButton'
import ResetAllButton from '@/components/ui/ResetAllButton'

export default function TransformModal() {
  const selectedPart = useAssemblyStore((s) => s.selectedParts[0] ?? null)

  const manualDelta = useTransformStore((s) =>
    selectedPart
      ? (s.manualDeltas[selectedPart] ?? DEFAULT_DELTA)
      : DEFAULT_DELTA
  )
  const setManualDelta = useTransformStore((s) => s.setManualDelta)
  const resetManualDelta = useTransformStore((s) => s.resetManualDelta)
  const resetAllManualDeltas = useTransformStore((s) => s.resetAllManualDeltas)
  const transformMode = useTransformStore((s) => s.transformMode)
  const setTransformMode = useTransformStore((s) => s.setTransformMode)

  const updateAxis = (
    field: keyof ManualDelta,
    axis: 0 | 1 | 2,
    value: number
  ) => {
    if (!selectedPart) return
    const next = [...manualDelta[field]] as ManualDelta[typeof field]
    next[axis] = value
    setManualDelta(selectedPart, { [field]: next })
  }

  const resetSelected = (): void => {
    if (!selectedPart) return
    resetManualDelta(selectedPart)
  }

  const resetAll = (): void => {
    resetAllManualDeltas()
  }

  return (
    <div className="flex flex-col gap-4">
      <SelectedParts />

      {/* Translation */}
      <XYZInput
        label="POSITION"
        labelActive={transformMode === 'translate'}
        onLabelClick={() => setTransformMode('translate')}
        values={manualDelta.translation}
        onChange={(axis, val) => updateAxis('translation', axis, val)}
      />

      {/* Rotation */}
      <XYZInput
        label="ROTATION (°)"
        labelActive={transformMode === 'rotate'}
        onLabelClick={() => setTransformMode('rotate')}
        values={manualDelta.rotation}
        onChange={(axis, val) => updateAxis('rotation', axis, val)}
      />

      <div className="flex gap-2 pt-2 border-t border-white/6">
        <ResetButton onReset={resetSelected} disabled={!selectedPart} />
        <ResetAllButton onReset={resetAll} />
      </div>
    </div>
  )
}
