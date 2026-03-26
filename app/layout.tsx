import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Bhanu Prakash Narala | Full Stack Developer & Tech Entrepreneur",
  description: "Official portfolio of Bhanu Prakash Narala. Co-founder of LMA Tech Associations, specializing in Java, React, and storytelling-driven software development.",
  keywords: ["Bhanu Prakash Narala", "LMA Tech", "Full Stack Developer India", "Java Developer", "Storyteller", "Tech Entrepreneur"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }} data-scroll-behavior="smooth">
      <body className={`${inter.className} ${outfit.variable} dark:bg-brand-dark text-slate-100 selection:bg-emerald-600/30`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
