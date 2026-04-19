import { cn } from '@/lib/utils'
import type { Step } from '@/config/landing/steps'

type StepCardProps = Step & {
  className?: string
}

export default function StepCard({
  num,
  title,
  desc,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        'flex bg-surface-elevated border border-border rounded-xl',
        className
      )}
    >
      <span className="text-primary font-mono font-bold opacity-40 shrink-0 leading-none text-3xl">
        {num}
      </span>

      <div className="flex flex-col gap-2.5">
        <span className="text-foreground font-bold text-lg">{title}</span>

        <span className="text-muted text-sm leading-relaxed">{desc}</span>
      </div>
    </div>
  )
}
