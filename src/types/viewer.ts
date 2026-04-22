import { LucideIcon } from 'lucide-react'

// Viewer options items type ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
export interface ViewerOption {
  id: string
  icon: LucideIcon
  label: string
  desc: string
  available: boolean
  href?: string
}

// Common 3D vector type used across the app ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
export type Vec3 = [number, number, number]

/** Per-part manual transform delta applied on top of base position/rotation. */
export interface ManualDelta {
  translation: Vec3
  rotation: Vec3
}
