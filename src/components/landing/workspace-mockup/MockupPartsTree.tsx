import { cn } from '@/lib/utils'
import {
  MOCKUP_TREE_PARTS,
  MOCKUP_SELECTED_INDEX,
} from '@/config/landing/mockup'

export default function MockupPartsTree() {
  return (
    <div className="w-40 bg-surface border-r border-fg/6 shrink-0">
      <div className="px-3 py-2 border-b border-fg/6 flex justify-between items-center">
        <span className="text-fg/30 text-2xs font-mono tracking-label">
          PARTS TREE
        </span>
        <span className="text-primary text-xs font-mono">
          {MOCKUP_TREE_PARTS.length}
        </span>
      </div>

      {MOCKUP_TREE_PARTS.map((part, i) => {
        const isSelected = i === MOCKUP_SELECTED_INDEX
        return (
          <div
            key={part.label}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 border-l-2',
              isSelected
                ? 'bg-selection/6 border-selection'
                : 'border-transparent'
            )}
          >
            <input
              type="checkbox"
              defaultChecked
              className="w-2.5 h-2.5 shrink-0 accent-part-bright"
            />
            <div
              className="w-2 h-2 rounded-full shrink-0 border border-fg/20"
              style={{ background: part.colorVar }}
            />
            <span
              className={cn(
                'text-xs truncate',
                isSelected ? 'text-selection' : 'text-fg/50'
              )}
            >
              {part.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
