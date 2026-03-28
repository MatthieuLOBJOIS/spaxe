import { useState } from 'react'

export function useToolbar() {
  const [grid, setGrid] = useState(false)

  const [orthoMode, setOrthoMode] = useState(false)

  return {
    grid,
    onGridToggle: () => setGrid((v) => !v),

    orthoMode,
    onOrthoModeToggle: () => setOrthoMode((v) => !v),
  }
}
