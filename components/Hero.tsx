"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Code2, Rocket, Shapes, FileText, ArrowRight, MousePointer2, Sparkles, Target } from "lucide-react";
import { useMousePosition } from "../hooks/useMousePosition";
import { useRef, useState, useEffect } from "react";
import { Magnetic } from "./Magnetic";
import { TextReveal } from "./TextReveal";

// Premium Studio Cursor Component
const CustomCursor = () => {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      animate={{ x: x - 12, y: y - 12 }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      className="fixed top-0 left-0 w-6 h-6 border-2 border-emerald-500 rounded-full z-[1000] pointer-events-none flex items-center justify-center mix-blend-difference"
    >
      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
    </motion.div>
  );
};

// Nano-Particle Field Component: High-End Visuals
const ParticleField = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 -z-[15] overflow-hidden pointer-events-none">
      {Array(30).fill(0).map((_, i) => (
        <motion.div
           key={i}
           initial={{ 
             x: Math.random() * 2000 - 1000, 
             y: Math.random() * 2000 - 1000, 
             scale: Math.random() * 0.6 + 0.2,
             opacity: Math.random() * 0.5
           }}
           animate={{ 
             y: [null, Math.random() * 1000 - 500],
             opacity: [0.2, 0.6, 0.2]
           }}
           transition={{ 
             duration: Math.random() * 10 + 10, 
             repeat: Infinity, 
             ease: "linear" 
           }}
           className="absolute h-1 w-1 bg-emerald-500/20 rounded-full blur-sm"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="scan-line" />
    </div>
  );
};

// 3D Floating Token Component for Ultra UI
const FloatingToken = ({ emoji, delay = 0 }: { emoji: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [-15, 15], rotate: [0, 10, -10, 0] }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        repeatType: "reverse", 
        ease: "easeInOut",
        delay 
      }}
      className="text-4xl absolute filter drop-shadow-[0_0_15px_rgba(16,185,129,0.15)] opacity-40 select-none pointer-events-none"
    >
      {emoji}
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Storytelling Scroll Transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Ambient Mood Shifter
  const [moodIdx, setMoodIdx] = useState(0);
  const moods = [
    "from-emerald-950/20 via-black to-black",
    "from-teal-950/20 via-black to-black",
    "from-blue-950/20 via-black to-black",
    "from-indigo-950/20 via-black to-black"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMoodIdx((prev) => (prev + 1) % moods.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} id="hero" className={`relative min-h-[120vh] flex flex-col items-center justify-center pt-40 pb-24 overflow-visible bg-[#050505] transition-colors duration-[4000ms] bg-gradient-to-br ${moods[moodIdx]}`}>
      <CustomCursor />
      <ParticleField />
      
      {/* Designer Background tokens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
         <div style={{ top: "20%", left: "15%" }}><FloatingToken emoji="✨" delay={0} /></div>
         <div style={{ top: "60%", right: "10%" }}><FloatingToken emoji="💠" delay={1} /></div>
         <div style={{ bottom: "10%", left: "25%" }}><FloatingToken emoji="⚡" delay={0.5} /></div>
      </div>

      {/* Designer Background Layering */}
      <div className="absolute top-0 left-0 w-full h-full perspective-grid opacity-5 pointer-events-none -z-10" />

      {/* Interactive Cursor Glow */}
      <motion.div 
        animate={{ x: x - 400, y: y - 400 }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-emerald-600/[0.06] rounded-full blur-[160px] pointer-events-none -z-20" 
      />

      <motion.div 
        style={{ scale, rotateX, opacity, transformPerspective: 1000 }}
        className="container mx-auto px-6 z-10 flex flex-col items-center text-center sticky top-32"
      >
        {/* Entrance Badge with TextReveal */}
        <div className="mb-12">
            <TextReveal delay={0.1}>
                <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white/[0.02] border border-white/5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-emerald-500 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Sparkles size={14} className="animate-pulse" />
                  Co-Founder & Board Member &bull; LMA Tech
                </div>
            </TextReveal>
        </div>

        {/* The Master Narrative Headline with Split Reveal */}
        <div className="relative mb-20">
           <div className="leading-[0.8]">
              <TextReveal delay={0.3}>
                  <h1 className="text-8xl md:text-[14rem] font-black tracking-tighter text-white/10 uppercase stroke-slate-400/10 -mb-2">BUILDING</h1>
              </TextReveal>
              <br />
              <TextReveal delay={0.5}>
                  <h1 className="text-8xl md:text-[14rem] font-black tracking-tighter text-white uppercase stroke-white leading-[0.8]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-100 to-white italic font-serif lowercase">morrow.</span>
                  </h1>
              </TextReveal>
           </div>
           <div className="absolute -top-16 -right-16 h-40 w-40 border-2 border-dashed border-emerald-500/10 rounded-full animate-[spin_40s_linear_infinite] -z-10" />
        </div>

        {/* Narrative Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto mb-20 leading-tight font-black tracking-tighter uppercase selection:text-white"
        >
          Architecting <span className="text-white italic">digital legacies</span> and tell original stories through <span className="text-white">Full Stack Engineering.</span> 
        </motion.div>

        {/* Action Hub with Magnetic Influence */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 1 }}
           className="flex flex-wrap items-center justify-center gap-10"
        >
          <Magnetic>
              <Link
                href="/#forge"
                className="group px-14 py-7 bg-white text-black rounded-[2.5rem] font-black text-xs uppercase tracking-widest flex items-center gap-6 transition-all shadow-2xl shadow-emerald-500/10 hover:shadow-white/20"
              >
                THE FORGE <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
          </Magnetic>

          <Magnetic>
              <Link
                href="/resume"
                className="group px-14 py-7 bg-emerald-500/5 border border-emerald-500/20 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-widest flex items-center gap-6 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/40"
              >
                CHRONICLE <Target size={20} className="text-emerald-500 animate-pulse" />
              </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Decorative Tokens */}
      <motion.div style={{ y: yParallax }} className="absolute bottom-20 right-20 h-32 w-32 border border-white/5 rounded-full flex items-center justify-center -z-10 group cursor-default">
         <div className="text-[10px] font-black text-slate-800 uppercase tracking-widest text-center">
            Est.<br />2022
         </div>
      </motion.div>

      {/* Discovery Signal */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-slate-800 cursor-pointer hover:text-emerald-500 transition-colors"
        onClick={() => {
          document.getElementById('forge')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-emerald-600 to-transparent flex items-center justify-center">
           <div className="h-4 w-4 rounded-full border border-emerald-600/50 animate-bounce mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
