'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// ============================================================
// CONFIG
// ============================================================

const S = 0.75 // demi-taille du cube

// 6 faces
const FACES = [
  {
    pos: [0, 0, S] as [number, number, number],
    rot: [0, 0, 0] as [number, number, number],
  },
  {
    pos: [0, 0, -S] as [number, number, number],
    rot: [0, Math.PI, 0] as [number, number, number],
  },
  {
    pos: [S, 0, 0] as [number, number, number],
    rot: [0, Math.PI / 2, 0] as [number, number, number],
  },
  {
    pos: [-S, 0, 0] as [number, number, number],
    rot: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    pos: [0, S, 0] as [number, number, number],
    rot: [-Math.PI / 2, 0, 0] as [number, number, number],
  },
  {
    pos: [0, -S, 0] as [number, number, number],
    rot: [Math.PI / 2, 0, 0] as [number, number, number],
  },
]

// 12 arêtes
const EDGES = [
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
  start: a as [number, number, number],
  end: b as [number, number, number],
}))

// 3 axes
const AXES = [
  {
    id: 'x',
    color: '#ef4444',
    cylPos: [0.5, 0, 0] as [number, number, number],
    cylRot: [0, 0, -Math.PI / 2] as [number, number, number],
    conePos: [1.05, 0, 0] as [number, number, number],
    coneRot: [0, 0, -Math.PI / 2] as [number, number, number],
  },
  {
    id: 'y',
    color: '#22c55e',
    cylPos: [0, 0.5, 0] as [number, number, number],
    cylRot: [0, 0, 0] as [number, number, number],
    conePos: [0, 1.05, 0] as [number, number, number],
    coneRot: [0, 0, 0] as [number, number, number],
  },
  {
    id: 'z',
    color: '#3b82f6',
    cylPos: [0, 0, 0.5] as [number, number, number],
    cylRot: [Math.PI / 2, 0, 0] as [number, number, number],
    conePos: [0, 0, 1.05] as [number, number, number],
    coneRot: [Math.PI / 2, 0, 0] as [number, number, number],
  },
]

// ============================================================
// COMPOSANTS INDIVIDUELS
// ============================================================

function Face({
  pos,
  rot,
}: {
  pos: [number, number, number]
  rot: [number, number, number]
}) {
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
    >
      <planeGeometry args={[S * 2, S * 2]} />
      <meshStandardMaterial
        color="#F26522"
        transparent
        opacity={hovered ? 0.2 : 0}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

function EdgeLine({
  start,
  end,
}: {
  start: [number, number, number]
  end: [number, number, number]
}) {
  const [hovered, setHovered] = useState(false)

  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ])
  const mat = new THREE.LineBasicMaterial({
    color: hovered ? '#F26522' : 'rgba(255,255,255,0.35)',
  })
  const line = new THREE.Line(geo, mat)

  // Tube invisible pour faciliter le hover
  const dir = new THREE.Vector3(...end).sub(new THREE.Vector3(...start))
  const len = dir.length()
  const mid = new THREE.Vector3(...start).add(dir.clone().multiplyScalar(0.5))
  dir.normalize()
  const q = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir
  )

  return (
    <group>
      <primitive object={line} />
      {/* Zone de hover invisible */}
      <mesh
        position={[mid.x, mid.y, mid.z]}
        quaternion={q}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.08, 0.08, len, 4]} />
        <meshStandardMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  )
}

function Axis({ color, cylPos, cylRot, conePos, coneRot }: (typeof AXES)[0]) {
  const [hovered, setHovered] = useState(false)
  const c = hovered ? '#F26522' : color

  return (
    <group
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
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
// SCENE NAVCUBE
// ============================================================

interface NavCubeObjectProps {
  cameraQuatRef: React.RefObject<THREE.Quaternion>
  navQuatRef: React.RefObject<THREE.Quaternion>
}

function NavCubeObject({ cameraQuatRef, navQuatRef }: NavCubeObjectProps) {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)
  const isDragging = useRef(false)

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
        {/* Faces */}
        {FACES.map((f, i) => (
          <Face key={i} pos={f.pos} rot={f.rot} />
        ))}
        {/* Arêtes */}
        {EDGES.map((e, i) => (
          <EdgeLine key={i} start={e.start} end={e.end} />
        ))}
        {/* Axes */}
        {AXES.map((a) => (
          <Axis key={a.id} {...a} />
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
      style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        width: '200px',
        height: '200px',
        background: 'transparent',
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? 'none' : 'auto',
        zIndex: 10,
      }}
    >
      <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 40 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <NavCubeObject cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} />
      </Canvas>
    </div>
  )
}
