'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import dynamic from 'next/dynamic'
import Toolbar from './Toolbar'
import PanelLeft from './PanelLeft'
import NavCube from './NavCube'

import DraggableModal from './DraggableModal'
import LassoModal from './modals/LassoModal'
import TransformModal from './modals/TransformModal'
import ExplodedModal from './modals/ExplodedModal'
import NeighborhoodModal from './modals/NeighborhoodModal'
import XRayModal from './modals/XRayModal'
import BomModal from './modals/BomModal'
import ColorModal from './modals/color/ColorModal'
import ShortcutsModal from './modals/ShortcutsModal'

import { useAssembly } from '@/hooks/useAssembly'

import { useModalStore } from '@/store/modalStore'
import { useSceneStore } from '@/store/sceneStore'

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

  const { toggleModal, modals } = useModalStore()
  const { grid, onGridToggle, orthoMode, onOrthoModeToggle } = useSceneStore()

  const cameraQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion())
  const navQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion())

  return (
    <main className="page-fullscreen w-full h-screen bg-[#0a0a0a] flex flex-col">
      {/* Toolbar */}
      <div className="shrink-0 h-16">
        <Toolbar
          onResetCamera={() => {}}
          onOrthoView={() => {}}
          orthoMode={orthoMode}
          onOrthoModeToggle={onOrthoModeToggle}
          grid={grid}
          onGridToggle={onGridToggle}
          lasso={modals.lasso.isOpen}
          onLassoToggle={() => toggleModal('lasso')}
          transform={modals.transform.isOpen}
          onTransformToggle={() => toggleModal('transform')}
          exploded={modals.exploded.isOpen}
          onExplodedToggle={() => toggleModal('exploded')}
          neighborhood={modals.neighborhood.isOpen}
          onNeighborhoodToggle={() => toggleModal('neighborhood')}
          xray={modals.xray.isOpen}
          onXrayToggle={() => toggleModal('xray')}
          bom={modals.bom.isOpen}
          onBomToggle={() => toggleModal('bom')}
          color={modals.shortcuts.isOpen}
          onColorToggle={() => toggleModal('color')}
          shortcuts={modals.shortcuts.isOpen}
          onShortcutsToggle={() => toggleModal('shortcuts')}
        />
      </div>

      {/* Workspace */}
      <div className="flex-1 flex overflow-visible relative">
        {/* Panel gauche */}
        {assembly && <PanelLeft parts={assembly.parts} />}

        {/* Canvas 3D */}
        <div className="flex-1 relative overflow-visible">
          <SceneCanvas
            assembly={assembly}
            basePath={basePath}
            orthoMode={orthoMode}
            cameraQuatRef={cameraQuatRef}
            navQuatRef={navQuatRef}
          />
        </div>
      </div>

      {/* NavCube */}
      <NavCube cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} />

      {/* Modals */}
      <DraggableModal id="lasso" title="Lasso Select">
        <LassoModal />
      </DraggableModal>

      <DraggableModal id="transform" title="Transform XYZ">
        <TransformModal />
      </DraggableModal>

      <DraggableModal id="exploded" title="Exploded View">
        <ExplodedModal />
      </DraggableModal>

      <DraggableModal id="neighborhood" title="Neighborhood">
        <NeighborhoodModal />
      </DraggableModal>

      <DraggableModal id="xray" title="X-Ray">
        <XRayModal />
      </DraggableModal>

      <DraggableModal id="bom" title="Bill of Materials">
        <BomModal assemblyUrl={assemblyUrl} />
      </DraggableModal>

      <DraggableModal id="color" title="Part Color">
        <ColorModal />
      </DraggableModal>

      <DraggableModal id="shortcuts" title="Keyboard Shortcuts">
        <ShortcutsModal />
      </DraggableModal>
    </main>
  )
}
