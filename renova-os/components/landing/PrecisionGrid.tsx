"use client";

import { motion } from "framer-motion";
import { Parallax } from "@/components/animations/Parallax";

/**
 * PrecisionGrid — the faint spatial grid from the initialization
 * sequence. A slight rotateX gives it a floor-plane feel without
 * tipping into an obvious 3D/game-UI look; opacity stays extremely
 * low per the brief ("should not cover the screen aggressively").
 */
export function PrecisionGrid({ show }: { show: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 [perspective:1400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Parallax strength={6} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-precision-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_42%,black,transparent)]"
          style={{ transform: "rotateX(3deg)", transformOrigin: "50% 40%" }}
        />
      </Parallax>
    </motion.div>
  );
}
