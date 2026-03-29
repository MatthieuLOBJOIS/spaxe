'use client'

import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import SelectedPart from '@/components/workspace/modals/color/SelectedPart'
import ColorPreview from '@/components/workspace/modals/color/ColorPreview'
import ColorOpacity from '@/components/workspace/modals/color/ColorOpacity'
import ColorPresets from '@/components/workspace/modals/color/ColorPresets'
import ApplyButton from '@/components/workspace/modals/color/ApplyButton'

import { hexToRgb } from '@/lib/hexToRgb'

export default function ColorModal() {
  const [color, setColor] = useState('#d46800')
  const [opacity, setOpacity] = useState(100)
  const rgb = hexToRgb(color)

  return (
    <div className="flex flex-col gap-4">
      {/* Pièce sélectionnée */}
      <SelectedPart />

      {/* Color picker gradient */}
      <div className="w-full [&_.react-colorful]:w-full [&_.react-colorful]:rounded-lg [&_.react-colorful\_\_saturation]:rounded-t-lg [&_.react-colorful\_\_last-control]:rounded-b-lg">
        <HexColorPicker color={color} onChange={setColor} />
      </div>

      {/* Couleur actuelle + HEX + RGB */}
      <ColorPreview
        color={color}
        setColor={setColor}
        opacity={opacity}
        rgb={rgb}
      />

      {/* Opacité */}
      <ColorOpacity opacity={opacity} setOpacity={setOpacity} />

      {/* Couleurs par défaut */}
      <ColorPresets color={color} setColor={setColor} />

      {/* Apply */}
      <ApplyButton />
    </div>
  )
}
