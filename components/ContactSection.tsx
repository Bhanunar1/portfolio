"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

// Fallback Icons
const LinkedIn = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const GitHub = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;

const XIcon = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16"/><path d="M4 20L20 4"/></svg>;

const ContactSection = () => {
  const socialLinks = [
    { icon: LinkedIn, href: "https://linkedin.com/in/bhanu-prakash-narala", label: "LinkedIn" },
    { icon: GitHub, href: "https://github.com/Bhanunar1", label: "GitHub" },
    { icon: XIcon, href: "https://x.com/bhan67510", label: "Twitter" },
  ];

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    formData.append("_subject", "New Mission Signal from Portfolio!");
    formData.append("_template", "box");
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/bhanuprakashnarala@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      if (res.ok) {
        setStatus("success");
        target.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset after 5s
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="signal" className="py-24 md:py-32 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        {/* Contact Context */}
        <div className="flex-1 space-y-8 max-w-xl">
           <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
           >
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-500 mb-2">The Signal</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">Let&rsquo;s craft <br/><span className="italic text-blue-600 font-serif">something</span> bold.</h3>
              <p className="text-sm md:text-lg text-slate-400 font-medium leading-relaxed mb-10">Whether you&rsquo;re looking to collaborate on a new venture, have a question, or just want to say hi, my signal is always active.</p>
           </motion.div>

           <div className="space-y-6">
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="mailto:bhanuprakashnarala@gmail.com" 
                className="flex items-center gap-6 p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all group group-hover:shadow-2xl hover:shadow-blue-500/20"
              >
                 <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-white group-hover:text-blue-600 transition-all">
                    <Mail size={24} />
                 </div>
                 <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white/60">Email Address</span>
                    <p className="text-lg font-black text-white group-hover:text-white block tracking-tighter">bhanuprakashnarala@gmail.com</p>
                 </div>
              </motion.a>

              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                href="tel:+918919084134" 
                className="flex items-center gap-6 p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-slate-800 transition-all group"
              >
                 <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-white/10 group-hover:text-blue-500 transition-all">
                    <Phone size={24} />
                 </div>
                 <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white/60">Direct Signal</span>
                    <p className="text-lg font-black text-white block tracking-tighter">+91 8919084134</p>
                 </div>
              </motion.a>
           </div>
           
           <div className="flex gap-4 pt-10">
              {socialLinks.map((social, idx) => (
                 <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 border border-white/5 shadow-xl hover:shadow-blue-500/20"
                 >
                    <social.icon size={24} />
                 </a>
              ))}
           </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full bg-white/[0.01] border border-white/[0.05] p-10 md:p-14 rounded-[3.5rem] backdrop-blur-2xl relative shadow-2xl">
           <form className="space-y-10" onSubmit={handleSubmit}>
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 gap-8">
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all font-medium" />
                 </div>
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email Hub</label>
                    <input type="email" name="email" required placeholder="john@company.com" className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all font-medium" />
                 </div>
              </div>
              <div className="space-y-4">
                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">The Message</label>
                 <textarea name="message" required rows={6} placeholder="Describe the mission..." className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all font-medium resize-none"></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-6 rounded-3xl font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed ${
                  status === "success" 
                  ? "bg-emerald-600 text-white shadow-emerald-500/20" 
                  : status === "error"
                  ? "bg-red-600 text-white shadow-red-500/20"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20"
                }`}
              >
                {status === "idle" && <>Transmit Signal <Send size={18} /></>}
                {status === "loading" && <span className="animate-pulse">Transmitting...</span>}
                {status === "success" && <>Signal Received <CheckCircle2 size={18} /></>}
                {status === "error" && <>Transmission Failed <XCircle size={18} /></>}
              </motion.button>
           </form>
           
           <div className="absolute -z-10 -top-20 -right-20 h-64 w-64 bg-blue-600/10 rounded-full blur-[80px]" />
           <div className="absolute -z-10 -bottom-20 -left-20 h-64 w-64 bg-purple-600/10 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
