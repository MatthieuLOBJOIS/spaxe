import StartModal from '@/components/workspace/StartModal'

// Displays the viewer entry screen with options: demo, import, and AI 3D generate
export default function ViewerPage() {
  return (
    <div className="page-fullscreen bg-background grid place-items-center">
      <StartModal />
    </div>
  )
}
