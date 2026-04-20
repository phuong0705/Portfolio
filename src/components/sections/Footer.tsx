"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/5 bg-white/50 pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-orange-500/10 blur-[100px]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="text-center md:text-left text-2xl font-bold tracking-tighter">
            {PORTFOLIO_DATA.name.split(" ")[0]}<span className="text-orange-500">.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">GitHub</a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">LinkedIn</a>
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-neutral-500 hover:text-neutral-900 transition-colors">Email</a>
          </div>

          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="text-center text-sm text-neutral-600 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-orange-500 mx-1">Next.js & Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
