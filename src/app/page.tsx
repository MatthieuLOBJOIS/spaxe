"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Chargement dynamique car Three.js est client-side uniquement
const SceneCanvas = dynamic(() => import("@/components/viewer/SceneCanvas"), {
  ssr: false,
});

export default function Home() {
  // État pour savoir si la démo est active
  const [demoActive, setDemoActive] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Viewer 3D full page */}
      <SceneCanvas
        assemblyUrl={demoActive ? "/demo/robot-atos/assembly.json" : undefined}
        basePath={demoActive ? "/demo/robot-atos" : undefined}
      />

      {/* Logo */}
      <div className="absolute top-6 left-6 z-10">
        <span className="text-white text-2xl font-bold tracking-widest">
          SPAXE
        </span>
      </div>

      {/* Bouton demo — visible uniquement si démo non active */}
      {!demoActive && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => setDemoActive(true)}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-300 text-black font-bold text-lg rounded-xl border-2 border-cyan-300 shadow-lg shadow-cyan-500/50 transition-all duration-200 hover:scale-105"
          >
            ▶ Try Demo
          </button>
        </div>
      )}
    </main>
  );
}
