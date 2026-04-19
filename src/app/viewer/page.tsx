import ViewerStart from '@/components/viewer/viewer-start/ViewerStart'

// Displays the viewer entry screen with options: demo, import, and AI 3D generate
export default function ViewerPage() {
  return (
    <div className="page-fullscreen bg-bg grid place-items-center">
      <ViewerStart />
    </div>
  )
}
