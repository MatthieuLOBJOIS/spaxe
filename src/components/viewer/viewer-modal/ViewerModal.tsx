'use client'

import OptionItem from './OptionItem'
import { ViewerOption } from '@/config/workspace/viewerOptions'

interface StartViewerProps {
  options: ViewerOption[]
}

export default function StartViewer({ options }: StartViewerProps) {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <OptionItem key={index} option={option} />
      ))}
    </div>
  )
}
