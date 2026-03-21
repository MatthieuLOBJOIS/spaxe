'use client'

import Link from 'next/link'
import {
  LucideIcon,
  Lasso,
  Move3d,
  Expand,
  RotateCcw,
  Grid3x3,
  Layers,
  Scan,
  ClipboardList,
  PaintBucket,
  Keyboard,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const orthoViews = ['Top', 'Front', 'Side']

interface ToolbarProps {
  grid: boolean
  onGridToggle: () => void
  neighborhood: boolean
  onNeighborhoodToggle: () => void
  xray: boolean
  onXrayToggle: () => void
  onResetCamera: () => void
  onOrthoView: (view: 'top' | 'front' | 'side') => void
  onColorPick: () => void
  orthoMode: boolean
  onOrthoModeToggle: () => void
  lasso: boolean
  onLassoToggle: () => void
  transform: boolean
  onTransformToggle: () => void
  exploded: boolean
  onExplodedToggle: () => void
  bom: boolean
  onBomToggle: () => void
  color: boolean
  onColorToggle: () => void
  shortcuts: boolean
  onShortcutsToggle: () => void
}

function Sep() {
  return (
    <div
      style={{
        width: '1px',
        height: '20px',
        background: 'rgba(255,255,255,0.08)',
        margin: '0 4px',
        flexShrink: 0,
      }}
    />
  )
}

function ToolButton({
  icon: Icon,
  label,
  onClick,
  active = false,
}: {
  icon: LucideIcon
  label: string
  onClick?: () => void
  active?: boolean
}) {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        <div
          style={{
            padding: '10px',
            borderRadius: '6px',
            cursor: 'pointer',
            color: active ? '#F26522' : 'rgba(255,255,255,0.5)',
            background: active ? 'rgba(242,101,34,0.12)' : 'transparent',
            border: active
              ? '1px solid rgba(242,101,34,0.3)'
              : '1px solid transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            if (!active) {
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.background = 'transparent'
            }
          }}
        >
          <Icon size={20} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default function Toolbar({
  grid,
  onGridToggle,
  neighborhood,
  onNeighborhoodToggle,
  xray,
  onXrayToggle,
  onResetCamera,
  onOrthoView,
  orthoMode,
  onOrthoModeToggle,
  lasso,
  onLassoToggle,
  transform,
  onTransformToggle,
  exploded,
  onExplodedToggle,
  bom,
  onBomToggle,
  color,
  onColorToggle,
  shortcuts,
  onShortcutsToggle,
}: ToolbarProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '64px',
        background: '#1a1a1c',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '0 16px',
        paddingBottom: '4px',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo */}
      <div
        style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}
      >
        <span
          style={{
            color: '#fff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '7px',
          }}
        >
          SP
        </span>
        <span
          style={{ color: '#F26522', fontSize: '17px', letterSpacing: '7px' }}
        >
          ▲
        </span>
        <span
          style={{
            color: '#fff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '7px',
          }}
        >
          XE
        </span>
      </div>

      <Sep />

      {/* Lasso + Transform + Exploded */}
      <ToolButton
        icon={Lasso}
        label="Lasso Select"
        onClick={onLassoToggle}
        active={lasso}
      />
      <ToolButton
        icon={Move3d}
        label="Transform XYZ"
        onClick={onTransformToggle}
        active={transform}
      />
      <ToolButton
        icon={Expand}
        label="Exploded View"
        onClick={onExplodedToggle}
        active={exploded}
      />

      <Sep />

      {/* Reset + vues ortho */}
      <ToolButton
        icon={RotateCcw}
        label="Reset Camera"
        onClick={onResetCamera}
      />
      {orthoViews.map((view) => (
        <Tooltip key={view}>
          <TooltipTrigger
            onClick={() =>
              onOrthoView(view.toLowerCase() as 'top' | 'front' | 'side')
            }
          >
            <div
              style={{
                padding: '5px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '12px',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {view}
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}>
              {view} view
            </p>
          </TooltipContent>
        </Tooltip>
      ))}

      <Sep />

      {/* Grid + Neighborhood + X-Ray + BOM */}
      <ToolButton
        icon={Grid3x3}
        label="Grid"
        onClick={onGridToggle}
        active={grid}
      />
      <ToolButton
        icon={Layers}
        label="Neighborhood"
        onClick={onNeighborhoodToggle}
        active={neighborhood}
      />
      <ToolButton
        icon={Scan}
        label="X-Ray"
        onClick={onXrayToggle}
        active={xray}
      />
      <ToolButton
        icon={ClipboardList}
        label="Bill of Materials"
        onClick={onBomToggle}
        active={bom}
      />

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '6px',
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              if (orthoMode) onOrthoModeToggle()
            }}
          >
            <div
              style={{
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 600,
                fontFamily: 'Space Grotesk',
                background: !orthoMode
                  ? 'rgba(242,101,34,0.15)'
                  : 'transparent',
                color: !orthoMode ? '#F26522' : 'rgba(255,255,255,0.35)',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                cursor: orthoMode ? 'pointer' : 'default',
              }}
            >
              PER
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p style={{ fontSize: '12px' }}>Perspective</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              if (!orthoMode) onOrthoModeToggle()
            }}
          >
            <div
              style={{
                padding: '5px 10px',
                fontSize: '11px',
                fontWeight: 600,
                fontFamily: 'Space Grotesk',
                background: orthoMode ? 'rgba(242,101,34,0.15)' : 'transparent',
                color: orthoMode ? '#F26522' : 'rgba(255,255,255,0.35)',
                cursor: !orthoMode ? 'pointer' : 'default',
              }}
            >
              ORT
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p style={{ fontSize: '12px' }}>Orthographic</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div style={{ flex: 1 }} />

      {/* Shortcuts + Back */}
      <ToolButton
        icon={Keyboard}
        label="Keyboard Shortcuts"
        onClick={onShortcutsToggle}
        active={shortcuts}
      />

      <Sep />

      <Link href="/">
        <div
          style={{
            padding: '6px 14px',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '13px',
            fontFamily: 'Space Grotesk',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          }}
        >
          Back
        </div>
      </Link>
    </div>
  )
}
