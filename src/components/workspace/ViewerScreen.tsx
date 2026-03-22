'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import dynamic from 'next/dynamic'
import Toolbar from './Toolbar'
import PanelLeft from './PanelLeft'
import NavCube from './NavCube'
import { useAssembly } from '@/hooks/useAssembly'
import { useToolbar } from '@/hooks/useToolbar'

const SceneCanvas = dynamic(() => import('@/components/viewer/SceneCanvas'), {
  ssr: false,
})

interface ViewerScreenProps {
  assemblyUrl: string
  basePath: string
}

export default function ViewerScreen({
  assemblyUrl,
  basePath,
}: ViewerScreenProps) {
  const assembly = useAssembly(assemblyUrl)
  const toolbar = useToolbar()

  const cameraQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion())
  const navQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion())

  return (
    <main className="page-fullscreen w-full h-screen bg-[#0a0a0a] flex flex-col">
      {/* Toolbar */}
      <div className="shrink-0 h-13">
        <Toolbar
          {...toolbar}
          onResetCamera={() => {}}
          onOrthoView={() => {}}
          onColorPick={() => {}}
        />
      </div>

      {/* Workspace */}
      <div className="flex-1 flex overflow-visible relative">
        {/* Panel gauche */}
        {assembly && <PanelLeft parts={assembly.parts} />}

        {/* Canvas 3D */}
        <div className="flex-1 relative overflow-visible">
          <SceneCanvas
            assemblyUrl={assemblyUrl}
            basePath={basePath}
            orthoMode={toolbar.orthoMode}
            cameraQuatRef={cameraQuatRef}
            navQuatRef={navQuatRef}
          />
        </div>
      </div>

      {/* NavCube */}
      <NavCube cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} />
    </main>
  )
}
