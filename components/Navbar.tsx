"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X, ArrowRight, Zap } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Forge", href: "/#forge" },
    { name: "Journey", href: "/#journey" },
    { name: "Arsenal", href: "/#arsenal" },
    { name: "Script", href: "/#story" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 z-[110] w-[95%] max-w-7xl rounded-[3rem] transition-all duration-700 border border-transparent selection:bg-emerald-600/30",
        isScrolled 
          ? "bg-[#050505]/60 backdrop-blur-3xl border-white/5 shadow-2xl py-3 px-10" 
          : "bg-transparent py-8 px-14"
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="font-black text-2xl tracking-tighter flex items-center group uppercase">
          <span className="text-white group-hover:text-emerald-500 transition-all duration-700">BHANU</span>
          <span className="text-emerald-600 ml-1.5 group-hover:text-white transition-all duration-700 italic font-serif">Portfolio</span>
        </Link>

        {/* Live Status Indicator - Designer Touch */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full shadow-inner mr-auto ml-10">
           <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Live &bull; Active Node</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-emerald-500 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          <Link
            href="/resume"
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white px-6 py-3 bg-white/[0.03] hover:bg-emerald-600 hover:scale-105 rounded-full border border-white/5 transition-all shadow-xl"
          >
            THE CHRONICLE <Zap size={10} className="group-hover:fill-white transition-all" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-95 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu: High-End Design */}
      {mobileMenuOpen && (
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: -20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           className="absolute top-24 right-0 left-0 bg-[#050505]/95 backdrop-blur-[50px] rounded-[4rem] p-12 border border-white/5 flex flex-col gap-8 text-center md:hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        >
          {navLinks.map((link, idx) => (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} key={link.name}>
                <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black text-white hover:text-emerald-500 transition-colors tracking-tighter"
                >
                {link.name}
                </Link>
            </motion.div>
          ))}
          <Link
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 p-6 bg-emerald-600 rounded-3xl text-white font-black text-xs uppercase tracking-[0.4em] shadow-2xl shadow-emerald-600/20 active:scale-95 transition-all"
          >
            VIEW FULL RESUME
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
