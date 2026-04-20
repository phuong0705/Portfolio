"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutTemplate, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const STATS = [
  { icon: LayoutTemplate, label: "Web & Mobile", value: "Development" },
  { icon: Layers, label: "Full-Stack", value: "Focus" },
  { icon: Database, label: "DB & API", value: "Design" },
  { icon: Code2, label: "3+ Major", value: "Projects" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me, my background, and what drives my passion for software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Hello, I'm {PORTFOLIO_DATA.name.split(" ")[0]}, a passionate developer based in Vietnam.
              </h3>
              <p className="text-secondary leading-relaxed text-lg mb-4">
                {PORTFOLIO_DATA.shortIntro}
              </p>
              <p className="text-secondary leading-relaxed text-lg">
                I believe in writing clean, maintainable code and thoughtfully architecting systems.
                Whether it's building a complex multi-vendor e-commerce platform or a habit-tracking mobile app,
                I strive to create impactful user experiences through modern technology.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass-card border border-white/5 bg-white/[0.02]">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                    <stat.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">{stat.label}</div>
                    <div className="text-sm text-secondary">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Geometric/Image placeholder with motion */}
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-3xl rotate-3 scale-105" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className="w-full h-full bg-neutral-900/50 flex items-center justify-center relative">
                  {/* We abstract away a real image for now, and put abstract art */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/30 rounded-full blur-[80px]" />
                  <Code2 size={120} className="text-white/10" strokeWidth={1} />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 px-4 py-3 glass-card rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-2xl border border-white/10"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium text-sm">Open to Work</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 px-4 py-3 glass-card rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-2xl border border-white/10"
              >
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="font-bold text-sm">IT Graduated</div>
                  <div className="text-xs text-secondary">MIS Major</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
