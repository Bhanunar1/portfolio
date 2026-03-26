"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const RedactedText = ({ text }: { text: string }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-pointer group"
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <motion.span
        initial={false}
        animate={{ 
          filter: isRevealed ? "blur(0px)" : "blur(4px)",
          opacity: isRevealed ? 1 : 0.4
        }}
        className="text-white bg-blue-500/20 px-1 rounded transition-all"
      >
        {text}
      </motion.span>
      {!isRevealed && (
        <motion.div 
          className="absolute inset-0 bg-slate-800 rounded z-10"
          initial={{ scaleX: 1 }}
          whileHover={{ scaleX: 0.95 }}
        />
      )}
    </span>
  );
};

export default RedactedText;
