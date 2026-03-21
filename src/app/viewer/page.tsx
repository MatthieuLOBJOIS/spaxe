'use client'

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import Toolbar from '@/components/workspace/Toolbar'
import PanelLeft from '@/components/workspace/PanelLeft'
import NavCube from '@/components/workspace/NavCube'
import StartModal from '@/components/workspace/StartModal'
import { Assembly } from '@/types/assembly'
import { loadAssembly } from '@/lib/assemblyLoader'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

function ViewerContent() {
  const searchParams = useSearchParams()
  const demo = searchParams.get('demo')

  const [showModal, setShowModal] = useState(!demo)
  const [assemblyUrl, setAssemblyUrl] = useState<string | undefined>(
    demo ? `/demo/${demo}/assembly.json` : undefined
  )
  const [basePath, setBasePath] = useState<string | undefined>(
    demo ? `/demo/${demo}` : undefined
  )

  const [grid, setGrid] = useState(false)
  const [neighborhood, setNeighborhood] = useState(false)
  const [xray, setXray] = useState(false)
  const [orthoMode, setOrthoMode] = useState(false)
  const [assembly, setAssembly] = useState<Assembly | null>(null)

  const cameraQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion())
  const navQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion())

  useEffect(() => {
    if (!assemblyUrl) return
    loadAssembly(assemblyUrl).then(setAssembly).catch(console.error)
  }, [assemblyUrl])

  const handleSelectDemo = () => {
    setAssemblyUrl('/demo/robot-atos/assembly.json')
    setBasePath('/demo/robot-atos')
    setShowModal(false)
  }

  return (
    <main className="page-fullscreen w-full h-screen bg-[#0a0a0a] flex flex-col">
      {/* Toolbar — toujours visible */}
      <div
        style={{
          height: showModal ? 0 : '72px',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <Toolbar
          orthoMode={orthoMode}
          onOrthoModeToggle={() => setOrthoMode((o) => !o)}
          grid={grid}
          onGridToggle={() => setGrid((g) => !g)}
          neighborhood={neighborhood}
          onNeighborhoodToggle={() => setNeighborhood((n) => !n)}
          xray={xray}
          onXrayToggle={() => setXray((x) => !x)}
          onResetCamera={() => {}}
          onOrthoView={() => {}}
          onColorPick={() => {}}
          onRandomColor={() => {}}
        />
      </div>

      {/* Workspace */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Panel gauche */}
        {assembly && !showModal && <PanelLeft parts={assembly.parts} />}

        {/* Canvas 3D */}
        <div style={{ flex: 1, position: 'relative' }}>
          <SceneCanvas
            assemblyUrl={assemblyUrl}
            basePath={basePath}
            orthoMode={orthoMode}
            cameraQuatRef={cameraQuatRef}
            navQuatRef={navQuatRef}
          />

          {!showModal && (
            <NavCube cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} />
          )}

          {showModal && <StartModal onSelectDemo={handleSelectDemo} />}
        </div>
      </div>
    </main>
  )
}

export default function ViewerPage() {
  return (
    <Suspense>
      <ViewerContent />
    </Suspense>
  )
}
