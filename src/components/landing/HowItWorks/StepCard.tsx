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
        'flex bg-hiw-card-bg border border-hiw-card-border rounded-xl',
        className
      )}
    >
      <span className="text-hiw-accent font-mono font-bold opacity-40 shrink-0 leading-none text-[32px]">
        {num}
      </span>

      <div className="flex flex-col gap-2.5">
        <span className="text-foreground font-bold text-lg">{title}</span>

        <span className="text-hiw-text-dim text-sm leading-relaxed">
          {desc}
        </span>
      </div>
    </div>
  )
}
