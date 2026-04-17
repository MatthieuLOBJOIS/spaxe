import Link from 'next/link'
import { INTERNAL_LINKS } from '@/config/landing/links'
import { VIEWER_OPTIONS } from '@/config/workspace/viewerOptions'
import { Logo } from '@/components/ui/Logo'
import OptionItem from './OptionItem'

export default function ViewerStart() {
  return (
    <div className="w-120 bg-background rounded-2xl border border-border overflow-hidden shadow-md">
      <div className="px-8 pt-8 pb-6 border-b border-white/6">
        <Logo size="lg" />
        <p className="text-white/40 text-sm m-0">
          Choose how you want to get started.
        </p>
      </div>

      <div className="p-4 flex flex-col gap-2">
        {VIEWER_OPTIONS.map((option) => (
          <OptionItem key={option.id} {...option} />
        ))}
      </div>

      <div className="px-8 py-4 border-t border-white/6 flex items-center justify-between">
        <span className="text-white/20 font-mono text-[10px] tracking-[1px]">
          V0.1 · ASSEMBLY VIEWER
        </span>
        <Link
          href={INTERNAL_LINKS.home.href}
          className="text-white/30 hover:text-white/60 text-xs font-mono tracking-[1px] no-underline transition-colors duration-150"
        >
          ← BACK
        </Link>
      </div>
    </div>
  )
}
