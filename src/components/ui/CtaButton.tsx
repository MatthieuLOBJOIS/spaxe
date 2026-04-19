import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CtaButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  arrow?: boolean
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export function CtaButton({
  variant = 'primary',
  arrow = false,
  disabled = false,
  className,
  children,
}: CtaButtonProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
        variant !== 'ghost' && 'px-7 py-3.5 text-base',
        variant === 'primary' &&
          !disabled &&
          'bg-primary hover:bg-primary/80 text-fg',
        variant === 'primary' &&
          disabled &&
          'bg-fg/5 border border-fg/10 text-fg/30 cursor-not-allowed',
        variant === 'outline' &&
          'border border-fg/20 text-fg/70 hover:text-fg hover:border-fg/40',
        variant === 'ghost' &&
          'p-2 rounded-md text-muted hover:bg-surface-hover hover:text-fg',
        className
      )}
    >
      {children}
      {arrow && !disabled && <ArrowRight size={16} />}
    </div>
  )
}
