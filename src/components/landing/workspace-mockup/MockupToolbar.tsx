'use client'

import Logo from '@/components/ui/Logo'
import cn from '@/lib/utils'

const TOOLBAR_BTNS = ['⤢', '↺', 'Top', 'Front']

export default function MockupToolbar() {
  return (
    <div className="h-11 bg-card border-b border-white/8 flex items-center gap-2 px-3.5">
      <div className="mr-3">
        <Logo size="sm" />
      </div>
      {TOOLBAR_BTNS.map((btn) => (
        <div
          key={btn}
          className="px-2 py-0.75 rounded bg-white/6 text-white/50 text-[11px]"
        >
          {btn}
        </div>
      ))}
      <div className="flex-1" />
      <div className="px-2.5 py-0.75 rounded bg-orange/15 border border-orange/30 text-orange text-[10px] font-mono">
        EXPLODED VIEW
      </div>
    </div>
  )
}
