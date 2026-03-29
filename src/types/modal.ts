import { ReactNode } from 'react'

export type ModalId =
  | 'lasso'
  | 'transform'
  | 'exploded'
  | 'neighborhood'
  | 'xray'
  | 'bom'
  | 'color'
  | 'shortcuts'

export interface ModalState {
  isOpen: boolean
  position: { x: number; y: number }
  size: { w: number; h: number }
  zIndex: number
}

export interface ModalStore {
  modals: Record<ModalId, ModalState>
  topZIndex: number
  toggleModal: (id: ModalId) => void
  setPosition: (id: ModalId, position: { x: number; y: number }) => void
  setSize: (id: ModalId, size: { w: number; h: number }) => void
  bringToFront: (id: ModalId) => void
}

export interface DraggableModalProps {
  id: ModalId
  title: string
  children: ReactNode
}
