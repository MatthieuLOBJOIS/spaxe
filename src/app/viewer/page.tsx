import StartModal from '@/components/workspace/StartModal'

// Displays the viewer entry screen with options: demo, import, and AI 3D generate
export default function ViewerPage() {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex items-center justify-center">
      <StartModal />
    </div>
  )
}
