"use client";

import rough from "roughjs";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface SketchyCardProps {
  children: ReactNode;
  className?: string;
  color?: string;
  roughness?: number;
  strokeWidth?: number;
}

export function SketchyCard({
  children,
  className = "",
  color = "rgba(99, 102, 241, 0.4)",
  roughness = 1.2,
  strokeWidth = 1.5,
}: SketchyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || dims.w === 0) return;
    const svg = svgRef.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rc = rough.svg(svg);
    const padding = 2;
    const rect = rc.rectangle(
      padding,
      padding,
      dims.w - padding * 2,
      dims.h - padding * 2,
      {
        roughness,
        stroke: color,
        strokeWidth,
        bowing: 2,
        fill: "rgba(255,255,255,0.01)",
        fillStyle: "solid",
      }
    );
    svg.appendChild(rect);
  }, [dims, color, roughness, strokeWidth]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none"
        width={dims.w}
        height={dims.h}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
