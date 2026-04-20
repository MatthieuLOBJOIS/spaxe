import { cn } from '@/lib/utils'

interface SectionBadgeProps {
  label: string
  className?: string
}

/** Renders a badge with the given label, used to indicate the current section. */
export function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center px-3 py-1 bg-primary/8 border border-primary/30 rounded-full',
        className
      )}
    >
      <span className="text-primary text-xs font-mono tracking-label">
        {label}
      </span>
    </div>
  )
}
