"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Toolbar from "@/components/workspace/Toolbar";

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
  return (
    <main className="w-full h-screen bg-[#0a0a0a] flex flex-col">
      <div style={{ height: "72px", flexShrink: 0 }}>
        <Toolbar
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
      <div style={{ flex: 1, position: "relative" }}>
        <SceneCanvas assemblyUrl={assemblyUrl} basePath={basePath} />
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
