"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

const LMASection = () => {
  const lineCount = 15;
  
  return (
    <section className="py-20 flex justify-center items-center">
      <Magnetic>
        <motion.a
          href="https://lma-1-eyp8.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-36 h-36 rounded-full flex items-center justify-center group relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {/* Rainbow Rotating "Wheel" Lines */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(lineCount)].map((_, i) => (
              <div 
                key={i}
                className="absolute origin-bottom rounded-full"
                style={{
                  width: "2px",
                  height: i % 2 === 0 ? "20px" : "10px",
                  backgroundColor: `hsl(${(i * 360) / lineCount}, 80%, 60%)`,
                  bottom: "50%",
                  transform: `rotate(${(i * 360) / lineCount}deg) translateY(-55px)`,
                  boxShadow: `0 0 10px hsl(${(i * 360) / lineCount}, 80%, 60%, 0.5)`
                }}
              />
            ))}
          </motion.div>

          {/* Center Circle Content */}
          <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative z-10 overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="text-xl font-black tracking-widest text-white/50 group-hover:text-emerald-400 shadow-xl transition-all duration-500">
              LMA
            </span>
          </div>
        </motion.a>
      </Magnetic>
    </section>
  );
};

export default LMASection;
