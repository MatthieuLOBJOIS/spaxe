'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ViewerScreen from '@/components/workspace/ViewerScreen'
import StartModal from '@/components/workspace/StartModal'

function ViewerContent() {
  const searchParams = useSearchParams()
  const demo = searchParams.get('demo')
  const work = searchParams.get('work')

  if (demo) {
    return (
      <ViewerScreen
        assemblyUrl={`/demo/${demo}/assembly.json`}
        basePath={`/demo/${demo}`}
      />
    )
  }

  if (work) {
    return (
      <ViewerScreen
        assemblyUrl={`/works/${work}/assembly.json`}
        basePath={`/works/${work}`}
      />
    )
  }

  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex items-center justify-center">
      <StartModal />
    </div>
  )
}

export default function ViewerPage() {
  return (
    <Suspense>
      <ViewerContent />
    </Suspense>
  )
}
