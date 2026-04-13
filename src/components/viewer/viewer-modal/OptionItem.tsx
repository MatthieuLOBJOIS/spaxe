import Link from 'next/link'
import { ViewerOption } from '@/config/workspace/viewerOptions'

interface OptionItemProps {
  id: string
  icon: LucideIcon
  label: string
  desc: string
  available: boolean
  href?: string
}

export default function OptionItem({ id, icon: Icon, label, desc, available, href }: OptionItemProps) {
  const baseClass = `group flex items-center gap-4 p-4 rounded-xl transition-all duration-150 border w-full text-left
    ${
      available
        ? 'cursor-pointer bg-white/[0.03] border-white/[0.06] hover:bg-[rgba(242,101,34,0.08)] hover:border-[rgba(242,101,34,0.3)]'
        : 'cursor-not-allowed opacity-40 bg-white/[0.03] border-white/[0.06]'
    }`

  const content = (
    <>
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/6 group-hover:bg-[rgba(242,101,34,0.15)] transition-colors duration-150">
        <Icon
          size={18}
          className={available ? 'text-[#F26522]' : 'text-white/30'}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`font-bold text-sm ${available ? 'text-white' : 'text-white/40'}`}
          >
            {label}
          </span>
          {!available && (
            <span className="px-2 py-0.5 bg-white/6 rounded-full text-white/30 text-[10px] font-mono tracking-[1px]">
              SOON
            </span>
          )}
        </div>
        <span className="text-white/35 text-xs">{desc}</span>
      </div>
    </>
  )

  // Lien interne si disponible et href défini
  if (available && href) {
    return (
      <Link key={id} href={href} className={`${baseClass} no-underline`}>
        {content}
      </Link>
    )
  }

  // Bouton désactivé sinon
  return (
    <button key={id} disabled={!available} className={baseClass}>
      {content}
    </button>
  )
}
