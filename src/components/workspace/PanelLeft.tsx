"use client";

import { useState } from "react";
import { Part } from "@/types/assembly";

interface PanelLeftProps {
  parts: Part[];
  selectedPart: string | null;
  onSelectPart: (file: string) => void;
}

export default function PanelLeft({
  parts,
  selectedPart,
  onSelectPart,
}: PanelLeftProps) {
  // Visibilité de chaque pièce
  const [visible, setVisible] = useState<Record<string, boolean>>(
    Object.fromEntries(parts.map((p) => [p.file, true])),
  );

  const toggleVisible = (file: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible((v) => ({ ...v, [file]: !v[file] }));
  };

  return (
    <div
      style={{
        width: "260px",
        height: "100%",
        background: "#141414",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Parts Tree
        </span>
        <span style={{ color: "#22d3ee", fontSize: "13px", fontWeight: 600 }}>
          {parts.length}
        </span>
      </div>

      {/* Liste */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {parts.map((part) => {
          const isSelected = selectedPart === part.file;
          const isVisible = visible[part.file] ?? true;

          return (
            <div
              key={part.file}
              onClick={() => onSelectPart(part.file)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "7px 16px",
                cursor: "pointer",
                background: isSelected ? "rgba(34,211,238,0.1)" : "transparent",
                borderLeft: isSelected
                  ? "2px solid #22d3ee"
                  : "2px solid transparent",
              }}
            >
              {/* Checkbox visibilité */}
              <div
                onClick={(e) => toggleVisible(part.file, e)}
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: isVisible
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {isVisible && (
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "1px",
                      background: "rgba(255,255,255,0.6)",
                    }}
                  />
                )}
              </div>

              {/* Nom de la pièce */}
              <span
                style={{
                  flex: 1,
                  color: isSelected
                    ? "#22d3ee"
                    : isVisible
                      ? "rgba(255,255,255,0.8)"
                      : "rgba(255,255,255,0.3)",
                  fontSize: "13px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {part.label}
              </span>

              {/* Rond couleur */}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: part.color_hint ?? "#cccccc",
                  flexShrink: 0,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
