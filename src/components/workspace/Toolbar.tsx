'use client'

import Link from 'next/link'
import { RotateCcw, PaintBucket, Keyboard } from 'lucide-react'

import { INTERNAL_LINKS } from '@/config/links'
import {
  SELECTION_TOOLS,
  DISPLAY_TOOLS,
  ORTHO_VIEWS,
  ORTHO_OPTIONS,
} from '@/config/toolbarConfig'

import type { useToolbar } from '@/hooks/useToolbar'

import ToolButton from '@/components/ui/ToolButton'
import ViewButton from '@/components/ui/ViewButton'
import ToggleButton from '@/components/ui/ToggleButton'
import Logo from '@/components/ui/Logo'

// ── Types ────────────────────────────────────────────────
type ToolbarState = ReturnType<typeof useToolbar>

interface ToolbarProps extends ToolbarState {
  onResetCamera: () => void
  onOrthoView: (view: 'top' | 'front' | 'side') => void
  onColorPick: () => void
  lasso: boolean
  onLassoToggle: () => void
  transform: boolean
  onTransformToggle: () => void
  exploded: boolean
  onExplodedToggle: () => void
  neighborhood: boolean
  onNeighborhoodToggle: () => void
  bom: boolean
  onBomToggle: () => void
  shortcuts: boolean
  onShortcutsToggle: () => void
}

// ── Séparateur ───────────────────────────────────────────
function Sep() {
  return <div className="w-px h-5 bg-white/8 mx-1 shrink-0" />
}

// ── Toolbar ──────────────────────────────────────────────
export default function Toolbar({
  lasso,
  onLassoToggle,
  transform,
  onTransformToggle,
  exploded,
  onExplodedToggle,
  grid,
  onGridToggle,
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
  orthoMode,
  onOrthoModeToggle,
  onResetCamera,
  onOrthoView,
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
        />
      ))}

      <Sep />

      {/* Caméra */}
      <ToolButton
        icon={RotateCcw}
        label="Reset Camera"
        onClick={onResetCamera}
      />
      {ORTHO_VIEWS.map((view) => (
        <ViewButton
          key={view}
          label={view}
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
      <Link href={INTERNAL_LINKS.home.href} className="no-underline">
        <div className="px-3.5 py-1.5 rounded-md border border-white/8 text-white/40 text-[13px] cursor-pointer transition-colors duration-150 hover:text-white hover:border-white/20">
          Back
        </div>
      </Link>
    </div>
  )
}
