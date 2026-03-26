"use client";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { BookOpen, Layers, Target, TrendingUp, ArrowUpRight, Play, Pause, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import RedactedText from "./RedactedText";
import { Magnetic } from "./Magnetic";

const StorySection = () => {
  const [isDirectorMode, setIsDirectorMode] = useState(false);
  const [scriptLine, setScriptLine] = useState(0);

  const scriptLog = [
    "INITIALIZING NARRATIVE CORE...",
    "TRACING ORIGIN: BICCAVOLU, INDIA.",
    "MAPPING LOGIC: JAVA, C++, REACT.",
    "SYNTHESIZING FICTION: KAL_KRISH PROTOCOL.",
    "DIRECTIVE: ARCHITECTING DIGITAL LEGACIES."
  ];

  useEffect(() => {
    if (isDirectorMode) {
      const interval = setInterval(() => {
        setScriptLine((prev) => (prev + 1) % scriptLog.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isDirectorMode]);

  const journeyHighlights = [
    { title: "Academic Foundation", desc: "Computer Science & Engineering undergraduate at UCE Narasaraopet (2022-2026). Currently maintaining a 70% merit.", icon: BookOpen },
    { title: "Venture Genesis", desc: "Establishing LMA Tech Associations as a student-led hub for innovation and commercial software solutions.", icon: TrendingUp },
    { title: "Creative Fiction", desc: "Drafting intricate narratives as 'kal_krish'. Building worlds both in code and on the page.", icon: Layers },
    { title: "Original Vision", desc: "Pivoting towards massive-scale concept directing and powerful visual storytelling architectures.", icon: Target },
  ];

  return (
    <section id="story" className="relative py-32 md:py-64 w-full max-w-7xl mx-auto overflow-hidden px-6">
      <div className="absolute inset-0 perspective-grid opacity-5 pointer-events-none -z-10" />
      <div className="scan-line" />
      
      {/* Background Cinematic Atmosphere */}
      <AnimatePresence>
        {isDirectorMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 -z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-600/20 mix-blend-overlay" />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000')] bg-cover bg-center grayscale"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
        {/* Left Aspect: The Narrative */}
        <div className="flex-1 space-y-12 relative z-10">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-8"
           >
              <div className="flex items-center gap-4">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500">The Narrative Arc</h2>
                <div className="h-[1px] w-20 bg-emerald-500/20" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDirectorMode(!isDirectorMode)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all ${
                    isDirectorMode 
                    ? "bg-emerald-500 text-black border-emerald-500" 
                    : "bg-white/5 text-emerald-500 border-emerald-500/30"
                  }`}
                >
                  {isDirectorMode ? <Pause size={10} /> : <Play size={10} />}
                  {isDirectorMode ? "Director's Cut Active" : "Enable Director's Cut"}
                </motion.button>
              </div>

              <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
                Beyond the <br />
                <span className="text-emerald-600 italic font-serif">Syntax.</span>
              </h3>

              {/* Script Terminal Overlay */}
              <AnimatePresence>
                {isDirectorMode && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-3 font-mono text-[10px] text-emerald-500/60 font-bold bg-white/5 px-4 py-2 rounded-lg border border-emerald-500/10 w-fit"
                  >
                    <Terminal size={12} />
                    <span className="animate-pulse">{scriptLog[scriptLine]}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl selection:bg-emerald-500 selection:text-black">
                  Code is just the ink. The real work is the story we tell through the systems we build. From the startup labs of 
                  <span className="text-white font-medium"> LMA Tech </span> to the narrative world-building of <span className="text-white italic"> Webnovel</span>, I bridge the gap between technical scalability and human emotion.
                </p>
                {isDirectorMode && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="absolute -left-4 top-0 bottom-0 w-1 bg-emerald-500/20"
                  />
                )}
              </div>
              
              <div className="pt-4">
                 <Magnetic>
                    <Link href="/resume" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-600 hover:border-emerald-600 hover:text-black transition-all group">
                       View Complete Profile <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                 </Magnetic>
              </div>
           </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {journeyHighlights.map((hl, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] group hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all cursor-default relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles size={12} className="text-emerald-500" />
                    </div>
                    <div className="h-12 w-12 mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-emerald-500/5">
                       <hl.icon size={22} />
                    </div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">{hl.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">{hl.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Right Aspect: The Aura */}
        <div className="flex-1 relative w-full aspect-square max-w-[600px]">
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative w-full h-full rounded-[5rem] overflow-hidden group shadow-[0_0_100px_rgba(37,99,235,0.05)] border border-white/5"
           >
              <img 
                src="/assets/photo.jpg" 
                alt="Bhanu Prakash Narala Profile" 
                className={`w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2000ms] ease-out contrast-125 ${isDirectorMode ? "grayscale-0" : "grayscale hover:grayscale-0"}`}
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                 <div>
                    <p className="text-white font-black text-3xl uppercase tracking-tighter leading-none mb-1 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">THE ORIGIN.</p>
                    <span className="text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 italic">Biccavolu &bull; India</span>
                 </div>
                 <div className="h-16 w-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                    <Target size={24} className="text-white animate-pulse" />
                 </div>
              </div>
           </motion.div>
           
           {/* Geometric Accents */}
           <div className={`absolute -top-10 -right-10 h-40 w-40 border border-emerald-500/10 rounded-full animate-[spin_40s_linear_infinite] -z-10 transition-colors ${isDirectorMode ? "border-emerald-500/40" : ""}`} />
           <div className="absolute -bottom-10 -left-10 h-64 w-64 border-2 border-dashed border-white/5 rounded-[6rem] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
