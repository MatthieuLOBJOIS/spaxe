import MockupToolbar from './MockupToolbar'
import MockupPartsTree from './MockupPartsTree'
import MockupCanvas from './MockupCanvas'
import MockupStatusBar from './MockupStatusBar'

export default function WorkspaceMockup() {
  return (
    <div className="absolute right-[6%] top-1/2 -translate-y-1/2 z-10 w-130 rounded-xl overflow-hidden border border-fg/10 bg-bg shadow-xl">
      <MockupToolbar />

      <div className="flex h-80">
        <MockupPartsTree />
        <MockupCanvas />
      </div>

      <MockupStatusBar />
    </div>
  )
}
