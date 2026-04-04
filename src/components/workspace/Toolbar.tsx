'use client'

import { RotateCcw, PaintBucket, Keyboard } from 'lucide-react'

import ToolButton from '@/components/ui/ToolButton'
import ViewButton from '@/components/ui/ViewButton'
import ToggleButton from '@/components/ui/ToggleButton'
import Logo from '@/components/ui/Logo'
import BackButton from '@/components/ui/BackButton'

import {
  SELECTION_TOOLS,
  DISPLAY_TOOLS,
  ORTHO_VIEWS,
  ORTHO_OPTIONS,
} from '@/config/workspace/toolbar'

interface ModalControls {
  lasso: boolean
  onLassoToggle: () => void
  transform: boolean
  onTransformToggle: () => void
  exploded: boolean
  onExplodedToggle: () => void
  neighborhood: boolean
  onNeighborhoodToggle: () => void
  xray: boolean
  onXrayToggle: () => void
  bom: boolean
  onBomToggle: () => void
  color: boolean
  onColorToggle: () => void
  shortcuts: boolean
  onShortcutsToggle: () => void
}

interface SceneControls {
  onResetCamera: () => void
  onOrthoView: (view: 'top' | 'front' | 'side') => void
  orthoMode: boolean
  onOrthoModeToggle: () => void
  grid: boolean
  onGridToggle: () => void
}

type ToolbarProps = ModalControls & SceneControls

const DISABLED_TOOLS = new Set([
  'lasso',
  'exploded',
  'neighborhood',
  'xray',
  'grid',
])

// ── Séparateur ───────────────────────────────────────────
function Sep() {
  return <div className="w-px h-5 bg-white/8 mx-1 shrink-0" />
}

// ── Toolbar ──────────────────────────────────────────────
export default function Toolbar({
  onResetCamera,
  onOrthoView,
  orthoMode,
  onOrthoModeToggle,
  grid,
  onGridToggle,

  lasso,
  onLassoToggle,
  transform,
  onTransformToggle,
  exploded,
  onExplodedToggle,
  neighborhood,
  onNeighborhoodToggle,
  xray,
  onXrayToggle,
  bom,
  onBomToggle,
  color,
  onColorToggle,
  shortcuts,
  onShortcutsToggle,
}: ToolbarProps) {
  const selectionStates = { lasso, transform, exploded }
  const selectionHandlers = {
    lasso: onLassoToggle,
    transform: onTransformToggle,
    exploded: onExplodedToggle,
  }

  const displayStates = { grid, neighborhood, xray, bom }
  const displayHandlers = {
    grid: onGridToggle,
    neighborhood: onNeighborhoodToggle,
    xray: onXrayToggle,
    bom: onBomToggle,
  }

  return (
    <div className="w-full h-16 bg-[#1a1a1c] border-b border-white/6 flex items-center gap-0.5 px-4 pb-1 box-border">
      {/* Logo */}
      <Logo size="toolbar" />

      <Sep />

      {/* Outils sélection */}
      {SELECTION_TOOLS.map(({ icon, label, key }) => (
        <ToolButton
          key={key}
          icon={icon}
          label={label}
          onClick={selectionHandlers[key]}
          active={selectionStates[key]}
          disabled={DISABLED_TOOLS.has(key)}
        />
      ))}

      <Sep />

      {/* Caméra */}
      <ToolButton
        icon={RotateCcw}
        label="Reset Camera"
        onClick={onResetCamera}
        disabled={true}
      />

      {ORTHO_VIEWS.map((view) => (
        <ViewButton
          key={view}
          label={view}
          disabled={true}
          onClick={() =>
            onOrthoView(view.toLowerCase() as 'top' | 'front' | 'side')
          }
        />
      ))}

      <Sep />

      {/* Affichage */}
      {DISPLAY_TOOLS.map(({ icon, label, key }) => (
        <ToolButton
          key={key}
          icon={icon}
          label={label}
          onClick={displayHandlers[key]}
          active={displayStates[key]}
          disabled={DISABLED_TOOLS.has(key)}
        />
      ))}

      <Sep />

      {/* Couleur */}
      <ToolButton
        icon={PaintBucket}
        label="Part Color"
        onClick={onColorToggle}
        active={color}
      />

      <Sep />

      {/* PER / ORT */}
      <ToggleButton
        options={ORTHO_OPTIONS}
        activeIndex={orthoMode ? 1 : 0}
        disabled={true}
        onChange={(i) => {
          if ((i === 1) !== orthoMode) onOrthoModeToggle()
        }}
      />

      <div className="flex-1" />

      {/* Shortcuts */}
      <ToolButton
        icon={Keyboard}
        label="Keyboard Shortcuts"
        onClick={onShortcutsToggle}
        active={shortcuts}
      />

      <Sep />

      {/* Back */}
      <BackButton />
    </div>
  )
}
