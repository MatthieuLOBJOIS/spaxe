import Link from 'next/link'

import type { ViewerOption } from '@/types/viewer'
import { cn } from '@/lib/utils'

export default function OptionItem({
  icon: Icon,
  label,
  desc,
  available,
  href,
}: ViewerOption) {
  const content = (
    <>
      <div
        className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
          'bg-fg/3 transition-colors duration-normal',
          available && 'group-hover:bg-primary/12'
        )}
      >
        <Icon size={18} className={available ? 'text-primary' : 'text-fg/30'} />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              'font-bold text-sm',
              available ? 'text-fg' : 'text-muted'
            )}
          >
            {label}
          </span>
          {!available && (
            <span className="px-2 py-0.5 rounded-full bg-fg/6 text-fg/30 text-2xs font-mono tracking-label">
              SOON
            </span>
          )}
        </div>
        <span className="text-muted text-xs">{desc}</span>
      </div>
    </>
  )

  const sharedClass = cn(
    'group flex items-center gap-4 p-4 rounded-xl transition-all border w-full text-left',
    'bg-fg/3 border-fg/6',
    available
      ? 'cursor-pointer hover:bg-primary/8 hover:border-primary/30'
      : 'cursor-not-allowed opacity-40'
  )

  if (available && href) {
    return (
      <Link href={href} className={cn(sharedClass, 'no-underline')}>
        {content}
      </Link>
    )
  }

  return (
    <button disabled={!available} className={sharedClass}>
      {content}
    </button>
  )
}
