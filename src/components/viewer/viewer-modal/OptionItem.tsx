'use client'

import Link from 'next/link'
import { ViewerOption } from '@/config/workspace/viewerOptions'

interface OptionItemProps {
  option: ViewerOption
}

export default function OptionItem({ option }: OptionItemProps) {
  const Icon = option.icon
  return (
    <div className="flex items-center gap-2">
      <Icon size={18} />
      <Link href={option.href || '#'}>{option.label}</Link>
    </div>
  )
}
