"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InteractiveGridPattern({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCell, setActiveCell] = useState<{ x: number; y: number } | null>(null);
  const cellSize = 34;

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;

      if (localX < 0 || localY < 0 || localX > rect.width || localY > rect.height) {
        setActiveCell(null);
        return;
      }

      setActiveCell({
        x: Math.floor(localX / cellSize) * cellSize,
        y: Math.floor(localY / cellSize) * cellSize,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [cellSize]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute bg-[size:34px_34px] bg-[image:linear-gradient(to_right,rgba(27,43,84,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,43,84,0.08)_1px,transparent_1px)]",
        className
      )}
    >
      {activeCell ? (
        <div
          className="absolute bg-brand-deep-blue/10"
          style={{
            left: activeCell.x,
            top: activeCell.y,
            width: cellSize,
            height: cellSize,
          }}
        />
      ) : null}
    </div>
  );
}
