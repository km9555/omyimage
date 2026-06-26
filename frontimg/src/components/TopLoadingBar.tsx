"use client";

interface Props { active: boolean; }

export function TopLoadingBar({ active }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: active ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          background: "var(--color-secondary)",
          borderRadius: "0 2px 2px 0",
          animation: active ? "topbar-slide 1.2s ease-in-out infinite" : "none",
        }}
      />
    </div>
  );
}
