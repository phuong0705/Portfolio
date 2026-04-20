"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="bg-black/5 border border-black/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-orange-600">
              Available for Work
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            Hi, I'm <br className="hidden md:block" />
            <span className="text-gradient">{PORTFOLIO_DATA.name.split(" ")[0]}</span>
            {" "}{PORTFOLIO_DATA.name.split(" ").slice(1).join(" ")}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed"
          >
            I build modern, scalable web and mobile applications. Specializing in full-stack development to craft exceptional digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <Button size="lg" icon={<ArrowRight size={20} />} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            
            <Button variant="outline" size="lg" icon={<Mail size={20} />} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>

            <Button variant="ghost" size="md" icon={<Download size={20} />} className="ml-0 md:ml-4" onClick={() => window.open('/cv.pdf', '_blank')}>
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-secondary font-medium">Scroll down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
}
