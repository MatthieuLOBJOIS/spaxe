import { Logo } from '@/components/ui/Logo'
import {
  MOCKUP_TOOLBAR_BTNS,
  MOCKUP_TOOLBAR_BADGE,
} from '@/config/landing/mockup'

export default function MockupToolbar() {
  return (
    <div className="h-11 bg-surface-elevated border-b border-fg/8 flex items-center gap-2 px-3.5">
      <div className="mr-3">
        <Logo size="sm" />
      </div>
      {MOCKUP_TOOLBAR_BTNS.map((btn) => (
        <div key={btn} className="px-2 py-1 rounded bg-fg/6 text-fg/50 text-xs">
          {btn}
        </div>
      ))}
      <div className="flex-1" />
      <div className="px-2.5 py-1 rounded bg-primary/8 border border-primary/30 text-primary text-2xs font-mono">
        {MOCKUP_TOOLBAR_BADGE}
      </div>
    </div>
  )
}
