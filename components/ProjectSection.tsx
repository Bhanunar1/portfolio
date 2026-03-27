"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, MessageCircle, Monitor, Sparkles, Database, Code, Globe, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Magnetic } from "./Magnetic";



const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: "Translator Pro",
      category: "AI & Communication",
      desc: "An enterprise-grade, offline-first translation hub. It uses deep learning models to enable seamless communication across 100+ dialects with emergency signal modes.",
      tech: ["JavaFX", "Deep Neural Nets", "Speech Synthesis"],
      image: "/assets/project2.jpg",
      link: "https://github.com/Bhanunar1",
      accent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      title: "Data Insights Studio",
      category: "Big Data & BI",
      desc: "Desktop visualization engine for complex datasets. It processes CSV, JSON, and Excel into interactive 3D dashboards for high-velocity decision making.",
      tech: ["JavaFX", "Apache POI", "Interactive UI"],
      image: "/assets/project1.jpg",
      link: "https://github.com/Bhanunar1",
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "The Signal Hub",
      category: "Network Engineering",
      desc: "A secure, multi-threaded communication system. Designed for low-latency packet delivery and encrypted socket management in high-load environments.",
      tech: ["Java Socket", "Multi-threading", "Security"],
      image: "/assets/project3.jpg",
      link: "https://github.com/Bhanunar1",
      accent: "from-amber-500/20 to-orange-500/10",
    },
  ];

  return (
    <section id="forge" ref={containerRef} className="py-32 md:py-56 relative bg-[#050505] overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 perspective-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050505] to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <header className="flex flex-col items-center mb-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full border border-emerald-500/30 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8 bg-emerald-500/5 shadow-2xl shadow-emerald-500/20"
            >
               The Forge &bull; Studio Output
            </motion.div>
            <motion.h2
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10 max-w-5xl text-balance"
            >
               HIGH-VELOCITY <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-white italic">ENGINEERING.</span>
            </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((proj, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
               viewport={{ once: true }}
               className="group perspective"
            >
                  <div className={`p-10 flex flex-col h-full bg-gradient-to-br ${proj.accent} border border-white/5 rounded-[3.5rem] backdrop-blur-3xl overflow-hidden group-hover:border-emerald-500/20 transition-all duration-700 shadow-2xl shadow-black/80 relative`}>
                     {/* Media Window */}
                     <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-12 border border-white/10 group-hover:border-white/30 transition-all duration-700 shadow-inner">
                        <img 
                           src={proj.image} 
                           alt={proj.title} 
                           className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out brightness-75 group-hover:brightness-100"
                           onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles size={16} className="absolute bottom-6 right-6 text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
                     </div>

                     {/* Meta */}
                     <div className="flex justify-between items-start mb-3">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity italic">{proj.category}</span>
                       <span className="text-[9px] font-black uppercase tracking-widest text-white/20 bg-white/5 px-2 py-0.5 rounded border border-white/5">Manuscript: Stable</span>
                     </div>
                     <h3 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-emerald-500 transition-all duration-500">{proj.title}</h3>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 group-hover:text-slate-400 transition-colors line-clamp-4">{proj.desc}</p>

                     {/* Badges */}
                     <div className="flex flex-wrap gap-2 mb-12">
                        {proj.tech.map(t => (
                           <span key={t} className="px-4 py-1.5 bg-black/40 border border-white/5 text-[9px] font-black text-slate-500 uppercase tracking-widest rounded-lg group-hover:text-white group-hover:bg-emerald-500 transition-all">
                              {t}
                           </span>
                        ))}
                     </div>

                     {/* Action Hub */}
                     <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                        <a href={proj.link} target="_blank" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all flex items-center gap-2">
                          <Code size={14} /> Repository
                        </a>
                        <a href={proj.link} target="_blank" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-emerald-600 hover:scale-110 transition-all">
                          <ExternalLink size={18} />
                        </a>
                     </div>
                  </div>
          </motion.div>
          ))}
        </div>

        {/* Explore More Projects Metric */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 w-full"
        >
          <a
            href="https://github.com/Bhanunar1"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative p-10 md:p-14 bg-gradient-to-r from-white/[0.02] to-emerald-500/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-[3.5rem] transition-all duration-700 overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
               <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-4 block">The Extended Archive</span>
                 <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4">
                   Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">More.</span>
                 </h3>
                 <p className="text-slate-400 font-medium max-w-md">Explore the rest of my open-source algorithms, architectures, and software experiments on GitHub.</p>
               </div>
               
               <div className="flex items-center gap-8 md:gap-12 w-full md:w-auto justify-between md:justify-end">
                 <div className="text-left md:text-right">
                   <div className="flex items-center md:justify-end gap-1 group-hover:text-emerald-400 transition-colors">
                      <span className="text-5xl md:text-6xl font-black text-white tracking-tighter block group-hover:text-emerald-400 transition-colors">15</span>
                      <span className="text-3xl font-black text-emerald-500 group-hover:text-emerald-400">+</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Projects and <b style={{color:"blue",fontSize:"20px"}}>6</b> Repositories</span>
                 <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-emerald-600 transition-all duration-500 transform group-hover:scale-110 shadow-2xl">
                    <span className="text-4xl font-light leading-none">+</span>
                 </div>
               </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Dynamic Marquee - The 'Live Figma' Touch */}
      <div className="mt-48 w-full border-y border-white/5 py-12 flex overflow-hidden whitespace-nowrap bg-black/[0.2] select-none pointer-events-none">
         <div className="animate-[marquee_60s_linear_infinite] flex gap-20 items-center">
            {Array(10).fill(0).map((_, i) => (
               <div key={i} className="flex gap-20 items-center">
                  <span className="text-4xl md:text-6xl font-black text-white/[0.03] uppercase tracking-tighter">Scalable Architecture</span>
                  <div className="h-3 w-3 rounded-full bg-emerald-600/20" />
                  <span className="text-4xl md:text-6xl font-black text-white/[0.03] uppercase tracking-tighter">Startup Excellence</span>
                  <div className="h-3 w-3 rounded-full bg-emerald-600/20" />
                  <span className="text-4xl md:text-6xl font-black text-white/[0.03] uppercase tracking-tighter">Narrative Engineering</span>
                  <div className="h-3 w-3 rounded-full bg-emerald-600/20" />
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default ProjectSection;
