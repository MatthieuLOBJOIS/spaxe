'use client'

import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import SelectedParts from '@/components/ui/SelectedParts'
import ColorPreview from '@/components/workspace/modals/color/ColorPreview'
import EyeDropperButton from '@/components/workspace/modals/color/EyeDropperButton'
import RandomColorButton from '@/components/workspace/modals/color/RandomColorButton'
import Slider from '@/components/ui/Slider'
import ColorPresets from '@/components/workspace/modals/color/ColorPresets'
import ApplyButton from '@/components/ui/ApplyButton'

import { useAssemblyStore } from '@/store/assemblyStore'
import { useColorStore } from '@/store/colorStore'
import { randomHex } from '@/lib/colorUtils'

interface ColorModalProps {
  initialColor?: string
  initialOpacity?: number
}

export default function ColorModal({
  initialColor = '#d46800',
  initialOpacity = 100,
}: ColorModalProps) {
  const [color, setColor] = useState(initialColor)
  const [opacity, setOpacity] = useState(initialOpacity)

  const selectedParts = useAssemblyStore((s) => s.selectedParts)
  const setPartColor = useColorStore((s) => s.setPartColor)
  const setPartOpacity = useColorStore((s) => s.setPartOpacity)

  const hasSelection = selectedParts.length > 0

  const handleOnApply = () => {
    if (!hasSelection) return
    selectedParts.forEach((file) => {
      setPartColor(file, color)
      setPartOpacity(file, opacity / 100)
    })
  }

  const handleRandom = () => {
    const firstColor = randomHex()
    selectedParts.forEach((file) => setPartColor(file, randomHex()))
    setColor(firstColor)
  }

  return (
    <div className="flex flex-col gap-4">
      <SelectedParts />

      <HexColorPicker color={color} onChange={setColor} />

      <div className="flex items-center gap-2">
        <ColorPreview color={color} setColor={setColor} />
        <EyeDropperButton setColor={setColor} />
        <RandomColorButton onRandom={handleRandom} />
      </div>

      <Slider label="OPACITY" value={opacity} unit="%" onChange={setOpacity} />

      <ColorPresets color={color} setColor={setColor} />
      <ApplyButton onApply={handleOnApply} />
    </div>
  )
}
