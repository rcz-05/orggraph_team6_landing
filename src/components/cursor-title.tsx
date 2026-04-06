"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

interface CursorTitleProps {
  children: ReactNode;
  className?: string;
}

export function CursorTitle({ children, className = "" }: CursorTitleProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 120, damping: 25 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 25 });

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 25);
        y.set(-(e.clientY - rect.top - rect.height / 2) / 25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
