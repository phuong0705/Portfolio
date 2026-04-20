"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export function Skills() {
  const categories = Object.keys(PORTFOLIO_DATA.skills) as Array<keyof typeof PORTFOLIO_DATA.skills>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/50">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive list of the tools, languages, and frameworks I use to build digital solutions."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <AnimatedCard key={category} delay={index * 0.1} className="h-full">
              <h3 className="text-xl font-bold mb-6 text-neutral-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills[category].map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-black/5 border border-black/5 text-neutral-600 hover:text-orange-600 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </motion.div>

        {/* Marquee loop for a visual touch */}
        <div className="mt-24 relative flex overflow-x-hidden group mask-image-fade">
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-12 group-hover:pause">
            {[...PORTFOLIO_DATA.skills.Frontend, ...PORTFOLIO_DATA.skills.Backend, ...PORTFOLIO_DATA.skills.Frontend, ...PORTFOLIO_DATA.skills.Backend].map((skill, i) => (
              <span key={i} className="text-3xl font-bold text-black/5 uppercase tracking-widest px-4">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
