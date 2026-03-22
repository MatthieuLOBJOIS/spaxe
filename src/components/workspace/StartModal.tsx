'use client'

import { Play, FolderOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { INTERNAL_LINKS, DEMO_LINK } from '@/config/links'

interface Option {
  id: string
  icon: LucideIcon
  label: string
  desc: string
  available: boolean
  href?: string
}

const OPTIONS: Option[] = [
  {
    id: 'demo',
    icon: Play,
    label: 'Try Demo',
    desc: 'Explore a pre-loaded AUBO cobot + ATOS Q scanner assembly',
    available: true,
    href: DEMO_LINK,
  },
  {
    id: 'import',
    icon: FolderOpen,
    label: 'Import STL',
    desc: 'Drop your own STL files or assembly folder',
    available: false,
  },
  {
    id: 'ai',
    icon: Sparkles,
    label: 'Generate with AI',
    desc: 'Describe your assembly and let AI generate the 3D model',
    available: false,
  },
]

export default function StartModal() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[480px] bg-[#1a1a1c] rounded-2xl border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/[0.06]">
          <div className="flex items-center mb-3">
            <span className="text-white font-bold text-[22px] tracking-[4px]">
              SP
            </span>
            <span className="text-[#F26522] text-[20px] tracking-[4px]">▲</span>
            <span className="text-white font-bold text-[22px] tracking-[4px]">
              XE
            </span>
          </div>
          <p className="text-white/40 text-sm m-0">
            Choose how you want to get started.
          </p>
        </div>

        {/* Options */}
        <div className="p-4 flex flex-col gap-2">
          {OPTIONS.map(({ id, icon: Icon, label, desc, available, href }) => {
            const content = (
              <>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150 bg-white/[0.06] group-hover:bg-[rgba(242,101,34,0.15)]`}
                >
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
                      <span className="px-2 py-[2px] bg-white/[0.06] rounded-full text-white/30 text-[10px] font-mono tracking-[1px]">
                        SOON
                      </span>
                    )}
                  </div>
                  <span className="text-white/35 text-xs">{desc}</span>
                </div>
              </>
            )

            const baseClass = `group flex items-center gap-4 p-4 rounded-xl transition-all duration-150 border w-full text-left
              ${
                available
                  ? 'cursor-pointer bg-white/[0.03] border-white/[0.06] hover:bg-[rgba(242,101,34,0.08)] hover:border-[rgba(242,101,34,0.3)]'
                  : 'cursor-not-allowed opacity-40 bg-white/[0.03] border-white/[0.06]'
              }`

            if (available && href) {
              return (
                <Link
                  key={id}
                  href={href}
                  className={`${baseClass} no-underline`}
                >
                  {content}
                </Link>
              )
            }

            return (
              <button key={id} disabled={!available} className={baseClass}>
                {content}
              </button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-white/[0.06] flex items-center justify-between">
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
    </div>
  )
}
