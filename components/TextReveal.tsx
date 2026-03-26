"use client";

import { motion } from "framer-motion";

export const TextReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div className="overflow-hidden inline-block relative border-none">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
