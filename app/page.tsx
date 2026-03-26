"use client";

import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import ExperienceSection from "../components/ExperienceSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div className="relative flex flex-col gap-0 px-4 sm:px-8 md:px-16 lg:px-24">
        <Hero />
        <StorySection />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
