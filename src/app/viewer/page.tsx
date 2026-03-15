"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Toolbar from "@/components/workspace/Toolbar";
import PanelLeft from "@/components/workspace/PanelLeft";
import { Assembly } from "@/types/assembly";
import { loadAssembly } from "@/lib/assemblyLoader";

const SceneCanvas = dynamic(() => import("@/components/viewer/SceneCanvas"), {
  ssr: false,
});

function ViewerContent() {
  const searchParams = useSearchParams();
  const demo = searchParams.get("demo");

  const assemblyUrl = demo ? `/demo/${demo}/assembly.json` : undefined;
  const basePath = demo ? `/demo/${demo}` : undefined;

  // États des outils
  const [grid, setGrid] = useState(false);
  const [neighborhood, setNeighborhood] = useState(false);
  const [xray, setXray] = useState(false);
  const [orthoMode, setOrthoMode] = useState(false);

  // Chargement de l'assemblage pour le panel
  const [assembly, setAssembly] = useState<Assembly | null>(null);
  useEffect(() => {
    if (!assemblyUrl) return;
    loadAssembly(assemblyUrl).then(setAssembly).catch(console.error);
  }, [assemblyUrl]);

  return (
    <main className="w-full h-screen bg-[#0a0a0a] flex flex-col">
      {/* Toolbar */}
      <div style={{ height: "72px", flexShrink: 0 }}>
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

      {/* Workspace — panel + canvas */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Panel gauche — uniquement si assemblage chargé */}
        {assembly && <PanelLeft parts={assembly.parts} />}

        {/* Canvas 3D */}
        <div style={{ flex: 1, position: "relative" }}>
          <SceneCanvas
            assemblyUrl={assemblyUrl}
            basePath={basePath}
            orthoMode={orthoMode}
          />
        </div>
      </div>
    </main>
  );
}

export default function ViewerPage() {
  return (
    <Suspense>
      <ViewerContent />
    </Suspense>
  );
}
