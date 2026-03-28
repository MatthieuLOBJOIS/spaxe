import { useState } from 'react'

export function useToolbar() {
  const [grid, setGrid] = useState(false)

  const [xray, setXray] = useState(false)

  const [color, setColor] = useState(false)

  const [orthoMode, setOrthoMode] = useState(false)

  return {
    grid,
    onGridToggle: () => setGrid((v) => !v),

    xray,
    onXrayToggle: () => setXray((v) => !v),

    color,
    onColorToggle: () => setColor((v) => !v),

    orthoMode,
    onOrthoModeToggle: () => setOrthoMode((v) => !v),
  }
}
