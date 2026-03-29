'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'
import { X } from 'lucide-react'
import { useModalStore, type ModalId } from '@/store/modalStore'
import { DEFAULT_MODALS } from '@/config/workspace/modals'

interface DraggableModalProps {
  id: ModalId
  title: string
  children: ReactNode
}

export default function DraggableModal({
  id,
  title,
  children,
}: DraggableModalProps) {
  const { modals, setPosition, setSize, bringToFront, toggleModal } =
    useModalStore()
  const modal = modals[id]

  // ── Refs interaction ─────────────────────────────────
  const isDragging = useRef(false)
  const isResizing = useRef(false)
  const startMouse = useRef({ x: 0, y: 0 })
  const startPos = useRef({ x: 0, y: 0 })
  const startSize = useRef({ w: 0, h: 0 })
  const [cornerHovered, setCornerHovered] = useState(false)

  // ── Drag header ──────────────────────────────────────
  const onDragStart = (e: React.MouseEvent) => {
    isDragging.current = true
    startMouse.current = { x: e.clientX, y: e.clientY }
    startPos.current = { ...modal.position }
    bringToFront(id)
    e.preventDefault()
  }

  // ── Resize coin bas-droite ───────────────────────────
  const onResizeStart = (e: React.MouseEvent) => {
    isResizing.current = true
    startMouse.current = { x: e.clientX, y: e.clientY }
    startSize.current = { ...modal.size }
    bringToFront(id)
    e.preventDefault()
    e.stopPropagation()
  }

  // ── Mouse move / up globaux ──────────────────────────
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startMouse.current.x
      const dy = e.clientY - startMouse.current.y

      if (isDragging.current) {
        setPosition(id, {
          x: Math.max(0, startPos.current.x + dx),
          y: Math.max(0, startPos.current.y + dy),
        })
      }

      if (isResizing.current) {
        setSize(id, {
          w: Math.max(200, startSize.current.w + dx),
          h: Math.max(200, startSize.current.h + dy),
        })
      }
    }

    const onMouseUp = () => {
      isDragging.current = false
      isResizing.current = false
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [id, setPosition, setSize])

  if (!modal.isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: modal.position.x,
        top: modal.position.y,
        width: modal.size.w,
        height: modal.size.h,
        zIndex: modal.zIndex,
      }}
      className="flex flex-col bg-[#1a1a1c] border border-white/10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      onMouseDown={() => bringToFront(id)}
    >
      {/* Header — drag */}
      <div
        onMouseDown={onDragStart}
        className="flex items-center justify-between px-4 py-3 border-b border-white/6 cursor-grab active:cursor-grabbing shrink-0 select-none rounded-t-xl"
      >
        <span className="text-white/70 text-xs font-mono tracking-[1px] uppercase">
          {title}
        </span>
        <button
          onClick={() => toggleModal(id)}
          className="text-white/30 hover:text-white transition-colors duration-150"
        >
          <X size={14} />
        </button>
      </div>

      {/* Contenu — largeur fixe, clippé par le modal */}
      <div className="flex-1 overflow-hidden relative">
        <div
          style={{ width: DEFAULT_MODALS[id].size.w }}
          className="absolute top-0 left-0 p-4"
        >
          {children}
        </div>
      </div>

      {/* Resize coin bas-droite */}
      <div
        onMouseDown={onResizeStart}
        onMouseEnter={() => setCornerHovered(true)}
        onMouseLeave={() => setCornerHovered(false)}
        className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize flex items-end justify-end p-1 rounded-br-xl"
      >
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M0 12 L12 0 L12 12 Z"
            fill={cornerHovered ? '#F26522' : 'rgba(255,255,255,0.2)'}
            style={{ transition: 'fill 0.15s ease' }}
          />
        </svg>
      </div>
    </div>
  )
}
