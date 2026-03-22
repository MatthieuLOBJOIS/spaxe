type LogoSize = keyof typeof sizes

interface LogoProps {
  size?: LogoSize
}

const sizes = {
  sm: { text: 'text-xs', tracking: 'tracking-[3px]', triangle: 'text-[11px]' },
  md: { text: 'text-lg', tracking: 'tracking-[4px]', triangle: 'text-base' },
  lg: {
    text: 'text-[22px]',
    tracking: 'tracking-[4px]',
    triangle: 'text-[20px]',
  },
  toolbar: {
    text: 'text-[17px]',
    tracking: 'tracking-[7px]',
    triangle: 'text-[17px]',
  },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className="flex items-center">
      <span className={`text-white font-bold ${s.text} ${s.tracking}`}>SP</span>
      <span className={`text-[#F26522] ${s.triangle} ${s.tracking}`}>▲</span>
      <span className={`text-white font-bold ${s.text} ${s.tracking}`}>XE</span>
    </div>
  )
}
