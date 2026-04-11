'use client'

import MockupToolbar from './MockupToolbar'
import MockupPartsTree from './MockupPartsTree'
import MockupCanvas from './MockupCanvas'
import MockupStatusBar from './MockupStatusBar'

export default function WorkspaceMockup() {
  return (
    <div className="absolute right-[6%] top-1/2 -translate-y-1/2 z-5 w-130 rounded-xl overflow-hidden border border-white/10 bg-background shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
      {/* Toolbar */}
      <MockupToolbar />

      {/* Body */}
      <div className="flex h-80">
        {/* Panel gauche */}
        <MockupPartsTree />

        {/* Canvas simulé */}
        <MockupCanvas />
      </div>

      {/* Status bar */}
      <MockupStatusBar />
    </div>
  )
}
