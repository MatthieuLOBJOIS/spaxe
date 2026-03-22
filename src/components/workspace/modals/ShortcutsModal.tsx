'use client'

const SHORTCUTS = [
  { key: 'Click', action: 'Select part' },
  { key: 'Ctrl + Click', action: 'Add part to selection' },
  { key: 'Click + drag', action: 'Rotate camera' },
  { key: 'Scroll', action: 'Zoom in/out' },
  { key: 'Right click + drag', action: 'Pan camera' },
  { key: 'Esc', action: 'Deselect all' },
  { key: 'F', action: 'Focus selected part' },
  { key: 'H', action: 'Hide selected part' },
  { key: 'A', action: 'Select all parts' },
  { key: 'I', action: 'Invert selection' },
  { key: 'E', action: 'Isolate selected part' },
  { key: 'L', action: 'Lasso select' },
  { key: 'T', action: 'Transform XYZ' },
  { key: 'Ctrl + Z', action: 'Undo last action' },
]

export default function ShortcutsModal() {
  return (
    <div className="flex flex-col gap-1">
      {SHORTCUTS.map(({ key, action }) => (
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
