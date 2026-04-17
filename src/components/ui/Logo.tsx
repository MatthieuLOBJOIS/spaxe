import { sizes } from '@/config/globals'

type LogoSize = keyof typeof sizes

interface LogoProps {
  size?: LogoSize
}

// Renders the SP▲XE logotype at a fixed size variant.
export function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className="flex items-center">
      <span className={`text-white font-bold ${s.text} ${s.tracking}`}>SP</span>
      <span className={`text-orange ${s.triangle} ${s.tracking}`}>▲</span>
      <span className={`text-white font-bold ${s.text} ${s.tracking}`}>XE</span>
    </div>
  )
}
