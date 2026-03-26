"use client";

import { motion } from "framer-motion";
import { Briefcase, Building, Code, ExternalLink, Globe, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "Venture",
      title: "One of the Co-Founder & Board Member & Lead Engineer",
      company: "LMA Tech Associations",
      period: "2024 – Present",
      description: "Driving a student-led startup delivering high-impact academic and real-time project solutions for the B.Tech community. Leading full-stack architectural workflows and scalable infrastructure.",
      icon: Building,
      tags: ["Leadership", "Market Solution", "Node.js", "Java"],
      isPremium: true,
      link: "#"
    },
    {
      type: "Modern Stack",
      title: "Full Stack Engineer Intern",
      company: "Future Interns",
      period: "May 2025 – June 2025",
      description: "Developed and shipped responsive web applications using React and Node.js. Focused on user-centric design and high-velocity API performance.",
      icon: Rocket,
      tags: ["React ecosystem", "API Engineering"],
      link: "#"
    },
    {
      type: "Backend Systems",
      title: "Java Development Intern",
      company: "Next24 Technology & Services",
      period: "May 2024 – July 2024",
      description: "Architected scalable backend modules with Java. Implemented clean-code principles and modular logic for long-term system stability.",
      icon: Code,
      tags: ["Java Backend", "Modular Flow"],
      link: "#"
    },
    {
      type: "Algorithmic Logic",
      title: "C++ Development Intern",
      company: "CodSoft",
      period: "February 2023",
      description: "Engineered complex algorithm-based applications in C++. Strengthened the core logical foundation for performance-heavy software.",
      icon: Star,
      tags: ["C++ Logic", "Optimization"],
      link: "#"
    },
  ];

  return (
    <section id="journey" className="py-32 relative md:py-48 overflow-hidden bg-[#050505]">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="flex flex-col items-start mb-20 space-y-4 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.6em] mb-4">
          The Professional Chronicle
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">The path of a <br/><span className="italic text-emerald-600 font-serif lowercase">problem solver.</span></h3>
        <p className="text-slate-500 max-w-xl font-medium pt-4">Traced through startup leadership, backend engineering, and the relentless pursuit of scalable digital solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={`p-10 md:p-14 rounded-[3.5rem] border relative group hover:shadow-[0_20px_100px_rgba(16,185,129,0.08)] transition-all cursor-default overflow-hidden ${
              exp.isPremium 
                ? "bg-slate-900/40 border-emerald-500/20 ring-1 ring-emerald-500/5 " 
                : "bg-white/[0.01] border-white/5 hover:bg-white/[0.03]"
            }`}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

            {exp.isPremium && (
              <div className="absolute top-10 right-10 flex items-center gap-2 px-4 py-1.5 bg-emerald-600 text-black font-black text-[9px] uppercase tracking-widest shadow-xl shadow-emerald-600/30 rounded-full">
                <Globe size={12} strokeWidth={3} /> STARTUP CO-FOUNDER
              </div>
            )}
            
            <div className={`h-16 w-16 mb-10 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:rotate-6 ${
              exp.isPremium ? "bg-gradient-to-br from-emerald-500 to-teal-700 text-black" : "bg-white/5 border border-white/10"
            }`}>
              <exp.icon size={32} strokeWidth={2.5} />
            </div>

            <div className="space-y-6">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 italic flex items-center gap-2">
                  {exp.type} &bull; {exp.period}
               </span>
               <h4 className="text-3xl font-black text-white leading-tight tracking-tighter group-hover:text-emerald-500 transition-colors">
                  {exp.title}
               </h4>
               <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                  {exp.description}
               </p>

               <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/5 text-[9px] font-black text-slate-500 rounded-xl group-hover:text-white group-hover:bg-white/10 transition-all uppercase tracking-widest">
                         {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={exp.link} className="ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-600 hover:text-black">
                     <ArrowUpRight size={18} />
                  </Link>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-32 flex justify-center">
         <Link href="/resume" className="px-10 py-5 border border-white/10 rounded-3xl text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white hover:border-emerald-600 hover:bg-emerald-600/5 transition-all flex items-center gap-4 group">
            Experience Details <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
         </Link>
      </div>
    </section>
  );
};

// Mocking icons
const Rocket = ({ size, strokeWidth }: { size: number; strokeWidth?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c1.5 0 3 0 3 0"/><path d="M15 15h3c0 1.5 0 3 0 3-3-4.5-3-4.5-3-4.5z"/><line x1="10" x2="10" y1="10" y2="10"/></svg>;

export default ExperienceSection;
