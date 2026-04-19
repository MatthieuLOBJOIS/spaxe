import { cn } from '@/lib/utils'
import type { Feature } from '@/types/card'
interface FeatureCardProps extends Feature {
  className?: string
}

export default function FeatureCard({
  icon: Icon,
  label,
  desc,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 bg-surface rounded-xl border border-border',
        className
      )}
    >
      <div className="w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center">
        <Icon size={20} className="text-primary" />
      </div>
      <span className="text-foreground font-bold text-base">{label}</span>
      <span className="text-muted text-sm leading-relaxed">{desc}</span>
    </div>
  )
}
