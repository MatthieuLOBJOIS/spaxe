import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  label: string
  desc: string
}

export interface Step {
  num: string
  title: string
  desc: string
}
