'use client'

import { DEFAULT_SHORTCUTS } from '@/config/workspace/modals/defaultShortcuts'

export default function ShortcutsModal() {
  return (
    <div className="flex flex-col gap-1">
      {DEFAULT_SHORTCUTS.map(({ key, action }) => (
        <div
          key={key}
          className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/4 transition-colors"
        >
          <span className="text-white/50 text-[12px]">{action}</span>
          <kbd className="px-2 py-0.5 bg-white/6 border border-white/10 rounded text-white/60 text-[11px] font-mono whitespace-nowrap">
            {key}
          </kbd>
        </div>
      ))}
    </div>
  )
}
