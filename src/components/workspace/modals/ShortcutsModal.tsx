'use client'

import { DEFAULT_SHORTCUTS } from '@/config/workspace/modals/defaultShortcuts'

export default function ShortcutsModal() {
  return (
    <div className="flex flex-col gap-1">
      {DEFAULT_SHORTCUTS.map(({ key, action, working }) => (
        <div
          key={key}
          className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/4 transition-colors"
        >
          <div className="flex items-center gap-2">
            {/* Indicateur working / coming soon */}
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${working ? 'bg-[#6BC668]' : 'bg-white/15'}`}
            />
            <span
              className={`text-[12px] ${working ? 'text-white/50' : 'text-white/25'}`}
            >
              {action}
            </span>
          </div>
          <kbd
            className={`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap border
            ${
              working
                ? 'bg-white/6 border-white/10 text-white/60'
                : 'bg-transparent border-white/6 text-white/20'
            }`}
          >
            {key}
          </kbd>
        </div>
      ))}

      {/* Légende */}
      <div className="mt-2 pt-2 border-t border-white/6 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6BC668]" />
          <span className="text-white/25 text-[10px] font-mono">available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
          <span className="text-white/25 text-[10px] font-mono">
            coming soon
          </span>
        </div>
      </div>
    </div>
  )
}
