"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Bounds, Center } from "@react-three/drei";
import { Assembly } from "@/types/assembly";
import { loadAssembly } from "@/lib/assemblyLoader";
import AssemblyViewer from "./AssemblyViewer";
import GhostCube from "./GhostCube";

function CameraReset({ isDemo }: { isDemo: boolean }) {
  const { camera } = useThree();
  useEffect(() => {
    if (!isDemo) {
      // Retour à la position initiale quand on quitte la démo
      camera.position.set(3, 2, 3);
    } else {
      // Reset l'orientation caméra avant que Bounds prenne le relais
      camera.position.set(2, 1.5, 3);
      camera.lookAt(0, 0, 0);
    }
  }, [isDemo, camera]);
  return null;
}

interface SceneCanvasProps {
  assemblyUrl?: string;
  basePath?: string;
  interactive?: boolean;
}

export default function SceneCanvas({
  assemblyUrl,
  basePath,
  interactive = true,
}: SceneCanvasProps) {
  const [assembly, setAssembly] = useState<Assembly | null>(null);

  useEffect(() => {
    if (!assemblyUrl) return;
    loadAssembly(assemblyUrl).then(setAssembly).catch(console.error);
  }, [assemblyUrl]);

  const isDemo = assembly && basePath;

  return (
    <Canvas
      camera={{ position: [3, 2, 3], fov: 50, near: 0.001, far: 100000 }}
      style={{ width: "100%", height: "100%", background: "#0a0a0a" }}
    >
      <ambientLight intensity={2} color="#ffffff" />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={1} color="#ffffff" />

      <CameraReset isDemo={!!isDemo} />

      <Suspense fallback={null}>
        {isDemo ? (
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <AssemblyViewer parts={assembly.parts} basePath={basePath} />
            </Center>
          </Bounds>
        ) : (
          <GhostCube />
        )}
      </Suspense>

      <OrbitControls
        enablePan={interactive}
        enableZoom={interactive}
        enableRotate={interactive}
        dampingFactor={0.05}
        enableDamping
        makeDefault
      />
    </Canvas>
  );
}
