"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' });
  
  return (
    <footer className="py-24 md:py-32 border-t border-white/[0.03] bg-[#020617] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
         {/* Footer Content */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-7xl font-black text-white/5 uppercase tracking-tighter select-none leading-none"
                >
                    BHANU PRAKASH NARALA
                </motion.div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] max-w-sm">
                   Architecting high-performance digital ecosystems with a narrative soul.
                </p>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-2">
               <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Metadata Terminal</span>
               <div className="flex gap-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  <span>Draft: 1.0.4</span>
                  <span>Words: ~1,240</span>
                  <span>Relay: Active</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full items-center pt-10 border-t border-white/5 gap-8">
            {/* Copy */}
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] leading-none">
               &copy; 2026 Bhanu Prakash Narala. Built for the <span className="text-slate-400">Future.</span>
            </p>

            {/* Links */}
            <div className="flex gap-8">
               {["Privacy", "Archive", "Journal"].map((item) => (
                  <a key={item} href="#" className="text-[10px] font-black text-slate-700 hover:text-blue-500 uppercase tracking-widest transition-colors">
                     {item}
                  </a>
               ))}
            </div>
            
            {/* Build Status */}
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 group cursor-default shadow-xl">
               <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Last Manifest: {currentDate}
               </span>
            </div>
         </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-blue-500/5 blur-[100px] -z-10" />
    </footer>
  );
};

export default Footer;
