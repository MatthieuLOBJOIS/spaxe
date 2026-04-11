import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  label: string
  desc: string
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
        'flex flex-col gap-4 bg-card rounded-xl border border-border',
        className
      )}
    >
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon size={20} className="text-primary" />
      </div>
      <span className="text-white font-bold text-base">{label}</span>
      <span className="text-muted-foreground text-sm leading-relaxed">
        {desc}
      </span>
    </div>
  )
}
