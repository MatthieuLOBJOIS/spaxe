import { LucideIcon } from 'lucide-react'

export interface ViewerOption {
  id: string
  icon: LucideIcon
  label: string
  desc: string
  available: boolean
  href?: string
}
