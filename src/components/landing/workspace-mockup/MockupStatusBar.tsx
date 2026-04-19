import { MOCKUP_STATUS_ITEMS } from '@/config/landing/mockup'

export default function MockupStatusBar() {
  return (
    <div className="h-7 bg-surface-elevated border-t border-fg/6 flex items-center px-3.5 gap-4">
      {MOCKUP_STATUS_ITEMS.map((item) => (
        <span key={item} className="text-fg/50 text-2xs font-mono">
          {item}
        </span>
      ))}
      <div className="flex-1" />
      <div className="w-1.5 h-1.5 rounded-full bg-success" />
    </div>
  )
}
