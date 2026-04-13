import Link from 'next/link'
import { ViewerOption } from '@/config/workspace/viewerOptions'
import { cn } from '@/lib/utils'

/**
 * Represents an option item in the viewer modal.
 *
 * @param id - Unique identifier for the option.
 * @param icon - Icon component to display alongside the label.
 * @param label - Label text for the option.
 * @param desc - Description text for the option.
 * @param available - Indicates if the option is available for use.
 * @param href - Optional URL to navigate to when the option is clicked.
 */
export default function OptionItem({
  id,
  icon: Icon,
  label,
  desc,
  available,
  href,
}: ViewerOption) {
  const baseClass = cn(
    'group flex items-center gap-4 p-4 rounded-xl transition-all duration-150 border w-full text-left',
    available
      ? 'cursor-pointer bg-white/[0.03] border-white/[0.06] hover:bg-orange/8 hover:border-orange/30'
      : 'cursor-not-allowed opacity-40 bg-white/[0.03] border-white/[0.06]'
  )

  const content = (
    <>
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/6 group-hover:bg-orange/12 transition-colors duration-150">
        <Icon
          size={18}
          className={available ? 'text-orange' : 'text-white/30'}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`font-bold text-sm ${available ? 'text-foreground' : 'text-muted-foreground'}`}
          >
            {label}
          </span>
          {!available && (
            <span className="px-2 py-0.5 bg-white/6 rounded-full text-white/30 text-[10px] font-mono tracking-[1px]">
              SOON
            </span>
          )}
        </div>
        <span className="text-muted-foreground text-xs">{desc}</span>
      </div>
    </>
  )

  if (available && href) {
    return (
      <Link key={id} href={href} className={`${baseClass} no-underline`}>
        {content}
      </Link>
    )
  }

  return (
    <button key={id} disabled={!available} className={baseClass}>
      {content}
    </button>
  )
}
