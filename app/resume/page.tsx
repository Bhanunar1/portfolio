"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, Palette, Star, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { Magnetic } from "@/components/Magnetic";

// Robust SVG Icons for LinkedIn and GitHub (Avoids dependency version mismatches)
const LinkedInIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ResumePage() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const experiences = [
    {
      company: "LMA Tech Associations",
      role: "Co-Founder & Board Member",
      period: "2024 – Present",
      points: [
          "Co-founded student-focused technology startup providing B.Tech project solutions.",
          "Co-developed official company website (Full Stack Development).",
          "Led technical planning and execution workflows.",
          "Designed scalable systems for future company expansion."
      ]
    },
    {
      company: "Future Interns",
      role: "Full Stack Web Development Intern",
      period: "May 2025 – June 2025",
      points: [
          "Developed responsive web applications using React and Node.js.",
          "Integrated REST APIs and backend databases."
      ]
    },
    {
      company: "Next24 Technology & Services",
      role: "Java Development Intern",
      period: "May 2024 – July 2024",
      points: [
          "Built scalable backend modules using Java.",
          "Improved clean coding and modular architecture."
      ]
    },
    {
      company: "CodSoft",
      role: "C++ Development Intern",
      period: "February 2023",
      points: [
          "Developed algorithm-based applications using C++.",
          "Strengthened logic-building and optimization skills."
      ]
    }
  ];

  const education = [
    {
      level: "B.Tech in Computer Science & Engineering",
      institution: "University College of Engineering, Narasaraopet",
      year: "2022 – 2026",
      stat: "70%"
    },
    {
      level: "Intermediate (XII – Science)",
      institution: "Aditya Junior College",
      year: "2021",
      stat: "92.2%"
    },
    {
      level: "Secondary School (X)",
      institution: "Aditya Public School",
      year: "2019",
      stat: "87.4%"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 font-sans p-6 md:p-12 lg:p-20 relative overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 -z-10 opacity-30 select-none pointer-events-none">
        <div className="perspective-grid absolute inset-0 opacity-10" />
        <div className="scan-line" />
        {/* Floating Nano Elements - Safely Rendered on Client */}
        {isMounted && Array(10).fill(0).map((_, i) => (
           <motion.div
             key={i}
             animate={{ 
               y: [0, -100, 0], 
               opacity: [0.1, 0.4, 0.1],
               rotate: [0, 360]
             }}
             transition={{ 
               duration: Math.random() * 10 + 10, 
               repeat: Infinity, 
               ease: "linear" 
             }}
             className="absolute w-[1px] h-20 bg-emerald-500/20"
             style={{ 
               left: `${Math.random() * 100}%`, 
               top: `${Math.random() * 100}%` 
             }}
           />
        ))}
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/5 blur-[120px] rounded-full -z-10" />

      {/* Navigation */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-16">
        <Magnetic>
            <Link href="/" className="group flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-black uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all">
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return to Story
            </Link>
        </Magnetic>
      </motion.div>

      {/* Header Profile */}
      <header className="max-w-6xl mx-auto flex flex-col items-center text-center mb-24">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 relative p-2 rounded-[3.5rem] bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-white/5">
           <img src="/assets/photo.jpg" alt="Bhanu Prakash Narala" className="h-32 w-32 md:h-48 md:w-48 rounded-[3rem] object-cover grayscale hover:grayscale-0 transition-all duration-700" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=800"; }} />
           <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 border-4 border-[#050505]">
              <Star size={20} fill="currentColor" />
           </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none">
           BHANU PRAKASH NARALA
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-emerald-500 font-bold italic font-serif flex items-center gap-3 justify-center mb-10">
           Startup Co-Founder & Full Stack Engineer
        </motion.p>

        {/* Contact Links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
           <span className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={14} className="text-emerald-500" /> bhanuprakashnarala@gmail.com</span>
           <span className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={14} className="text-emerald-500" /> +91 8919084134</span>
           <span className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={14} className="text-emerald-500" /> AP, INDIA</span>
           <a href="https://linkedin.com/in/bhanu-prakash-narala" className="flex items-center gap-2 hover:text-white transition-colors"><LinkedInIcon size={14} /> LinkedIn</a>
           <a href="https://github.com/Bhanunar1" className="flex items-center gap-2 hover:text-white transition-colors"><GitHubIcon size={14} /> GitHub</a>
        </motion.div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
        {/* Left Column: Summary and Education */}
        <div className="lg:col-span-1 space-y-20">
           <section className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-emerald-500/10" />
              <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-8 border-b border-emerald-500/20 pb-4 flex items-center gap-3">
                <Terminal size={14} /> The Synopsis
              </h2>
              <p className="text-slate-400 leading-relaxed font-medium selection:bg-emerald-500 selection:text-black">
                Startup Co-Founder with depth in Java, C++, Python, and React. Co-founder of <span className="text-white">LMA Tech Associations</span>, delivering real-time academic solutions. Focused on scalable systems, continuous learning, and product-oriented development through the lens of <span className="italic text-emerald-500 font-serif">narrative engineering.</span>
              </p>
           </section>

           <section>
              <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-8 border-b border-emerald-500/20 pb-4">Education Path</h2>
              <div className="space-y-10">
                 {education.map((edu, idx) => (
                    <div key={idx} className="group cursor-default">
                       <h3 className="text-white font-black text-sm uppercase tracking-widest group-hover:text-emerald-500 transition-colors">{edu.level}</h3>
                       <p className="text-slate-500 text-xs font-bold my-1 tracking-tight">{edu.institution}</p>
                       <div className="flex justify-between items-center mt-3">
                          <span className="text-[10px] text-slate-400 font-bold uppercase py-1 px-3 bg-white/5 rounded-full">{edu.year}</span>
                          <span className="text-emerald-500 font-black text-lg">{edu.stat}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </section>

           <section>
              <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-8 border-b border-emerald-500/20 pb-4">Personal Story</h2>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                 <h3 className="text-white font-black mb-4 flex items-center gap-3">The Script <Palette size={18} className="text-emerald-500" /></h3>
                 <p className="text-slate-500 text-xs font-medium leading-loose group-hover:text-slate-400 transition-colors">A passionate storyteller and Webnovel author under the name <span className="italic text-emerald-600">kal_krish</span>. Bhanu aims to animate or direct original concepts into powerful visual storytelling experiences in the future.</p>
              </div>
           </section>
        </div>

        {/* Right Column: Experience and Skills */}
        <div className="lg:col-span-2 space-y-24">
           {/* Experience */}
           <section>
              <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-12 border-b border-emerald-500/20 pb-4">Chronicles of Venture</h2>
              <div className="space-y-16">
                 {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-12 group">
                       <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-[#050505] border-2 border-emerald-600 flex items-center justify-center -translate-x-1/2 group-hover:bg-emerald-600 transition-all z-10 shadow-lg shadow-emerald-500/20">
                          <Briefcase size={12} className="text-white" />
                       </div>
                       <div className="absolute left-0 top-1 bottom-[-4rem] w-0.5 bg-white/5 -translate-x-1/2" />
                       
                       <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between pointer-events-none">
                          <h3 className="text-2xl font-black text-white group-hover:text-emerald-500 transition-all duration-500 tracking-tight uppercase">{exp.role}</h3>
                          <span className="text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">{exp.period}</span>
                       </div>
                       <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-6 opacity-70 group-hover:opacity-100 italic transition-opacity">{exp.company}</p>
                       
                       <ul className="space-y-4">
                          {exp.points.map((p, i) => (
                             <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-4 before:content-[''] before:h-2 before:w-2 before:rounded-full before:bg-emerald-500 before:mt-1.5 before:shrink-0 group-hover:text-slate-300 transition-colors">
                                {p}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </section>

           {/* Skills Highlights */}
           <section className="bg-white/5 rounded-[3rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 rounded-full" />
              <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">The Arsenal <Award size={18} /></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 border-l-4 border-emerald-600 pl-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                       {["Java", "C++", "C", "Python", "JavaScript", "React", "Next.JS", "Node.JS", "Tailwind CSS", "Firebase", "REST APIs", "MongoDB"].map(s => (
                          <span key={s} className="px-3 py-1.5 bg-black/40 rounded-lg group-hover:bg-white/10 group-hover:text-white transition-all">{s}</span>
                       ))}
                    </div>
                 </div>
                 <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 border-l-4 border-teal-600 pl-4">The Mindset</h4>
                    <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                       {["Moderate DSA", "System Design", "OOP", "Leadership", "Product Thinking", "Creative Storytelling", "Execution Focus"].map(s => (
                          <span key={s} className="px-3 py-1.5 bg-black/40 rounded-lg group-hover:bg-white/10 group-hover:text-white transition-all">{s}</span>
                       ))}
                    </div>
                 </div>
              </div>
           </section>
        </div>
      </div>

      {/* Footer Signature */}
      <footer className="mt-32 border-t border-white/5 pt-12 text-center">
         <div className="inline-flex flex-col items-center">
            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-600 mb-2">Authored By</span>
            <p className="text-xl font-black text-white/10 uppercase tracking-tighter hover:text-white/20 transition-colors select-none">BHANU PRAKASH NARALA &bull; 2026</p>
         </div>
      </footer>
    </main>
  );
}
