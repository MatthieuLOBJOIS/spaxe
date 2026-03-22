import { useState } from 'react'

export function useToolbar() {
  const [lasso, setLasso] = useState(false)
  const [transform, setTransform] = useState(false)
  const [exploded, setExploded] = useState(false)
  const [grid, setGrid] = useState(false)
  const [neighborhood, setNeighborhood] = useState(false)
  const [xray, setXray] = useState(false)
  const [bom, setBom] = useState(false)
  const [color, setColor] = useState(false)
  const [shortcuts, setShortcuts] = useState(false)
  const [orthoMode, setOrthoMode] = useState(false)

  return {
    lasso,
    onLassoToggle: () => setLasso((v) => !v),
    transform,
    onTransformToggle: () => setTransform((v) => !v),
    exploded,
    onExplodedToggle: () => setExploded((v) => !v),
    grid,
    onGridToggle: () => setGrid((v) => !v),
    neighborhood,
    onNeighborhoodToggle: () => setNeighborhood((v) => !v),
    xray,
    onXrayToggle: () => setXray((v) => !v),
    bom,
    onBomToggle: () => setBom((v) => !v),
    color,
    onColorToggle: () => setColor((v) => !v),
    shortcuts,
    onShortcutsToggle: () => setShortcuts((v) => !v),
    orthoMode,
    onOrthoModeToggle: () => setOrthoMode((v) => !v),
  }
}
