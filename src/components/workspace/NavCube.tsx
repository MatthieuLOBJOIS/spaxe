'use client'

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import type { Vec3 } from '@/types/viewer'

// ============================================================
// CONFIG
// ============================================================

const S = 0.75

const FACES: {
  pos: Vec3
  rot: Vec3
}[] = [
  { pos: [0, 0, S], rot: [0, 0, 0] },
  { pos: [0, 0, -S], rot: [0, Math.PI, 0] },
  { pos: [S, 0, 0], rot: [0, Math.PI / 2, 0] },
  { pos: [-S, 0, 0], rot: [0, -Math.PI / 2, 0] },
  { pos: [0, S, 0], rot: [-Math.PI / 2, 0, 0] },
  { pos: [0, -S, 0], rot: [Math.PI / 2, 0, 0] },
]

const EDGES: {
  start: Vec3
  end: Vec3
}[] = [
  [
    [-S, -S, S],
    [S, -S, S],
  ],
  [
    [S, -S, S],
    [S, S, S],
  ],
  [
    [S, S, S],
    [-S, S, S],
  ],
  [
    [-S, S, S],
    [-S, -S, S],
  ],
  [
    [-S, -S, -S],
    [S, -S, -S],
  ],
  [
    [S, -S, -S],
    [S, S, -S],
  ],
  [
    [S, S, -S],
    [-S, S, -S],
  ],
  [
    [-S, S, -S],
    [-S, -S, -S],
  ],
  [
    [-S, -S, S],
    [-S, -S, -S],
  ],
  [
    [S, -S, S],
    [S, -S, -S],
  ],
  [
    [S, S, S],
    [S, S, -S],
  ],
  [
    [-S, S, S],
    [-S, S, -S],
  ],
].map(([a, b]) => ({
  start: a as Vec3,
  end: b as Vec3,
}))

const AXES = [
  {
    id: 'x',
    color: '#ef4444',
    cylPos: [0.5, 0, 0] as Vec3,
    cylRot: [0, 0, -Math.PI / 2] as Vec3,
    conePos: [1.05, 0, 0] as Vec3,
    coneRot: [0, 0, -Math.PI / 2] as Vec3,
  },
  {
    id: 'y',
    color: '#22c55e',
    cylPos: [0, 0.5, 0] as Vec3,
    cylRot: [0, 0, 0] as Vec3,
    conePos: [0, 1.05, 0] as Vec3,
    coneRot: [0, 0, 0] as Vec3,
  },
  {
    id: 'z',
    color: '#3b82f6',
    cylPos: [0, 0, 0.5] as Vec3,
    cylRot: [Math.PI / 2, 0, 0] as Vec3,
    conePos: [0, 0, 1.05] as Vec3,
    coneRot: [Math.PI / 2, 0, 0] as Vec3,
  },
]

// ============================================================
// COMPOSANTS
// ============================================================

interface ActiveProps {
  active: boolean
  onActivate: () => void
}

function Face({
  pos,
  rot,
  active,
  onActivate,
}: {
  pos: Vec3
  rot: Vec3
} & ActiveProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      position={pos}
      rotation={rot}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        onActivate()
      }}
    >
      <planeGeometry args={[S * 2, S * 2]} />
      <meshStandardMaterial
        color="#F26522"
        transparent
        opacity={active ? 0.3 : hovered ? 0.15 : 0}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

function EdgeLine({
  start,
  end,
  active,
  onActivate,
}: {
  start: [number, number, number]
  end: [number, number, number]
} & ActiveProps) {
  const [hovered, setHovered] = useState(false)

  const { line, len, mid, q } = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ])
    const mat = new THREE.LineBasicMaterial({ color: 'rgba(255,255,255,0.35)' })
    const line = new THREE.Line(geo, mat)
    const dir = new THREE.Vector3(...end).sub(new THREE.Vector3(...start))
    const len = dir.length()
    const mid = new THREE.Vector3(...start).add(dir.clone().multiplyScalar(0.5))
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.normalize()
    )
    return { line, len, mid, q }
  }, [start, end])

  line.material.color.set(
    active ? '#F26522' : hovered ? '#FF8C42' : 'rgba(255,255,255,0.35)'
  )

  return (
    <group>
      <primitive object={line} />
      <mesh
        position={[mid.x, mid.y, mid.z]}
        quaternion={q}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation()
          onActivate()
        }}
      >
        <cylinderGeometry args={[0.08, 0.08, len, 4]} />
        <meshStandardMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  )
}

function Axis({
  color,
  cylPos,
  cylRot,
  conePos,
  coneRot,
  active,
  onActivate,
}: (typeof AXES)[0] & ActiveProps) {
  const [hovered, setHovered] = useState(false)
  const c = active ? '#F26522' : hovered ? '#FF8C42' : color

  return (
    <group
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        onActivate()
      }}
    >
      <mesh position={cylPos} rotation={cylRot}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color={c} />
      </mesh>
      <mesh position={conePos} rotation={coneRot}>
        <coneGeometry args={[0.12, 0.25, 16]} />
        <meshStandardMaterial color={c} />
      </mesh>
    </group>
  )
}

// ============================================================
// SCENE
// ============================================================

interface NavCubeObjectProps {
  cameraQuatRef: React.RefObject<THREE.Quaternion>
  navQuatRef: React.RefObject<THREE.Quaternion>
}

function NavCubeObject({ cameraQuatRef, navQuatRef }: NavCubeObjectProps) {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)
  const isDragging = useRef(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleActivate = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  useFrame(() => {
    if (!groupRef.current || !cameraQuatRef.current) return
    if (isDragging.current) {
      navQuatRef.current?.copy(camera.quaternion)
      groupRef.current.quaternion.copy(camera.quaternion).invert()
    } else {
      groupRef.current.quaternion.copy(cameraQuatRef.current).invert()
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {FACES.map((f, i) => (
          <Face
            key={i}
            pos={f.pos}
            rot={f.rot}
            active={activeId === `face-${i}`}
            onActivate={() => handleActivate(`face-${i}`)}
          />
        ))}
        {EDGES.map((e, i) => (
          <EdgeLine
            key={i}
            start={e.start}
            end={e.end}
            active={activeId === `edge-${i}`}
            onActivate={() => handleActivate(`edge-${i}`)}
          />
        ))}
        {AXES.map((a) => (
          <Axis
            key={a.id}
            {...a}
            active={activeId === `axis-${a.id}`}
            onActivate={() => handleActivate(`axis-${a.id}`)}
          />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        onStart={() => {
          isDragging.current = true
          navQuatRef.current?.copy(camera.quaternion)
        }}
        onEnd={() => {
          isDragging.current = false
          navQuatRef.current?.identity()
        }}
      />
    </>
  )
}

// ============================================================
// EXPORT
// ============================================================

interface NavCubeProps {
  cameraQuatRef: React.RefObject<THREE.Quaternion>
  navQuatRef: React.RefObject<THREE.Quaternion>
  hidden?: boolean
}

export default function NavCube({
  cameraQuatRef,
  navQuatRef,
  hidden = false,
}: NavCubeProps) {
  return (
    <div
      className={`absolute bottom-6 right-6 w-50 h-50 z-10 transition-opacity duration-150 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 40 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <NavCubeObject cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} />
      </Canvas>
    </div>
  )
}
