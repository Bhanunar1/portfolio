"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout, Server, Terminal } from "lucide-react";

const SkillSection = () => {
  const categories = [
    {
      name: "The Core",
      icon: Terminal,
      skills: ["Java", "C++", "C", "Python", "JavaScript"],
      color: "blue",
    },
    {
      name: "The Sculptor",
      icon: Layout,
      skills: ["React", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
      color: "purple",
    },
    {
      name: "The Engine",
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs", "Firebase"],
      color: "indigo",
    },
    {
      name: "The Vault",
      icon: Database,
      skills: ["MongoDB", "SQL", "Database Handling"],
      color: "cyan",
    },
    {
      name: "The Architect",
      icon: Cpu,
      skills: ["Moderate DSA", "OOP", "System Design Basics"],
      color: "emerald",
    },
    {
      name: "The Storyteller",
      icon: Code2,
      skills: ["Creative Storytelling", "Full Stack Development", "Product Thinking"],
      color: "rose",
    },
  ];

  return (
    <section id="arsenal" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
           <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.5em] mb-4">the arsenal</h2>
           <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">My technical <br/><span className="italic text-blue-600">mastery</span> and tools.</h3>
        </div>
        <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">A curated collection of technologies I wield to build performant and engaging digital landscapes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
          >
            <div className={`h-12 w-12 mb-6 rounded-2xl flex items-center justify-center bg-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all transform duration-500 group-hover:rotate-12`}>
               <cat.icon size={24} />
            </div>
            
            <h4 className="text-white text-xl font-bold mb-6 tracking-tight flex items-center gap-3">
              {cat.name}
            </h4>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                 <span key={skill} className="px-4 py-2 bg-slate-900/40 border border-white/[0.03] text-xs font-semibold text-slate-400 rounded-xl group-hover:text-white group-hover:border-blue-500/20 transition-all shadow-sm">
                    {skill}
                 </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
