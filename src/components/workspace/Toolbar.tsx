"use client";

import Link from "next/link";
import {
  LucideIcon,
  Move3d,
  RotateCcw,
  Grid3x3,
  Layers,
  Scan,
  Palette,
  Shuffle,
  Box,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const orthoViews = ["Top", "Front", "Side"];

interface ToolbarProps {
  grid: boolean;
  onGridToggle: () => void;
  neighborhood: boolean;
  onNeighborhoodToggle: () => void;
  xray: boolean;
  onXrayToggle: () => void;
  onResetCamera: () => void;
  onOrthoView: (view: "top" | "front" | "side") => void;
  onColorPick: () => void;
  onRandomColor: () => void;
  orthoMode: boolean;
  onOrthoModeToggle: () => void;
}

function Sep() {
  return (
    <div
      style={{
        width: "1px",
        height: "32px",
        background: "rgba(255,255,255,0.15)",
        margin: "0 6px",
        flexShrink: 0,
      }}
    />
  );
}

function ToolButton({
  icon: Icon,
  label,
  onClick,
  active = false,
}: {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            color: active ? "#22d3ee" : "#ffffff",
            background: active ? "rgba(34,211,238,0.15)" : "transparent",
            border: active
              ? "1px solid rgba(34,211,238,0.4)"
              : "1px solid transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={28} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p style={{ fontSize: "13px" }}>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function Toolbar({
  grid,
  onGridToggle,
  neighborhood,
  onNeighborhoodToggle,
  xray,
  onXrayToggle,
  onResetCamera,
  onOrthoView,
  onColorPick,
  onRandomColor,
  orthoMode,
  onOrthoModeToggle,
}: ToolbarProps) {
  return (
    <TooltipProvider>
      <div
        style={{
          width: "100%",
          height: "72px",
          background: "#1a1a1a",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <span
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: "22px",
            letterSpacing: "3px",
            flexShrink: 0,
            marginRight: "8px",
          }}
        >
          SPAXE
        </span>

        <Sep />

        {/* Transform XYZ */}
        <ToolButton icon={Move3d} label="Transform XYZ" />

        <Sep />

        {/* Reset caméra */}
        <ToolButton
          icon={RotateCcw}
          label="Reset Camera"
          onClick={onResetCamera}
        />

        {/* Vues orthographiques */}
        {orthoViews.map((view) => (
          <Tooltip key={view}>
            <TooltipTrigger
              onClick={() =>
                onOrthoView(view.toLowerCase() as "top" | "front" | "side")
              }
            >
              <div
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {view}
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p style={{ fontSize: "13px" }}>{view} view</p>
            </TooltipContent>
          </Tooltip>
        ))}

        <Sep />

        {/* Grille */}
        <ToolButton
          icon={Grid3x3}
          label="Toggle Grid"
          onClick={onGridToggle}
          active={grid}
        />

        {/* Neighborhood */}
        <ToolButton
          icon={Layers}
          label="Neighborhood"
          onClick={onNeighborhoodToggle}
          active={neighborhood}
        />

        {/* X-Ray */}
        <ToolButton
          icon={Scan}
          label="X-Ray"
          onClick={onXrayToggle}
          active={xray}
        />

        <Sep />

        {/* Couleur */}
        <ToolButton icon={Palette} label="Part Color" onClick={onColorPick} />
        <ToolButton
          icon={Shuffle}
          label="Random Colors"
          onClick={onRandomColor}
        />

        <Sep />

        {/* Perspective / Orthographique */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.15)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                if (orthoMode) onOrthoModeToggle();
              }}
            >
              <div
                style={{
                  padding: "6px 12px",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: !orthoMode
                    ? "rgba(34,211,238,0.2)"
                    : "transparent",
                  color: !orthoMode ? "#22d3ee" : "rgba(255,255,255,0.4)",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                  cursor: orthoMode ? "pointer" : "default",
                }}
              >
                PER
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p style={{ fontSize: "13px" }}>Perspective</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                if (!orthoMode) onOrthoModeToggle();
              }}
            >
              <div
                style={{
                  padding: "6px 12px",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: orthoMode
                    ? "rgba(34,211,238,0.2)"
                    : "transparent",
                  color: orthoMode ? "#22d3ee" : "rgba(255,255,255,0.4)",
                  cursor: !orthoMode ? "pointer" : "default",
                }}
              >
                ORT
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p style={{ fontSize: "13px" }}>Orthographic</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Back */}
        <Link href="/">
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Back
          </div>
        </Link>
      </div>
    </TooltipProvider>
  );
}
