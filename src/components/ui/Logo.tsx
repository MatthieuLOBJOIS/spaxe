import { cn } from '@/lib/utils'
import { LOGO_SIZES } from '@/config/global'
import type { LogoSize } from '@/types/global'

interface LogoProps {
  size?: LogoSize
}

/** Renders the SP▲XE logotype at a fixed size variant. */
export function Logo({ size = 'md' }: LogoProps) {
  const s = LOGO_SIZES[size]
  return (
    <div className="flex items-center">
      <span className={cn('text-fg font-bold', s.text, s.tracking)}>SP</span>
      <span className={cn('text-primary', s.triangle, s.tracking)}>▲</span>
      <span className={cn('text-fg font-bold', s.text, s.tracking)}>XE</span>
    </div>
  )
}
