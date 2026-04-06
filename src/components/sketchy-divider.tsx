"use client";

import rough from "roughjs";
import { useEffect, useRef, useState } from "react";

interface SketchyDividerProps {
  color?: string;
  className?: string;
}

export function SketchyDivider({
  color = "rgba(99, 102, 241, 0.2)",
  className = "",
}: SketchyDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || width === 0) return;
    const svg = svgRef.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rc = rough.svg(svg);
    const line = rc.line(0, 10, width, 10, {
      roughness: 1.5,
      stroke: color,
      strokeWidth: 1,
      bowing: 2,
    });
    svg.appendChild(line);
  }, [width, color]);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <svg ref={svgRef} width={width} height={20} />
    </div>
  );
}
