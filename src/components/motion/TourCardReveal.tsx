"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/lib/motion-ease";

type Props = {
  children: ReactNode;
  index: number;
};

export function TourCardReveal({ children, index }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -14% 0px" }}
      transition={{
        duration: reduce ? 0 : 0.55,
        delay: reduce ? 0 : Math.min(index * 0.07, 0.35),
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}
