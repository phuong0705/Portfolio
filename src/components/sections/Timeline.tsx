"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section id="experience" className="py-24 relative bg-white/50">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <SectionHeading 
          title="Journey & Education" 
          subtitle="My academic background and hands-on experience driving my path as a software developer."
          align="center"
        />

        <div className="relative mt-16">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-black/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEdu = item.id === "edu";
              
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-white border-2 border-orange-500 rounded-full mt-1.5 md:mt-6 z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-6 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                    <div className="glass-card p-6 border border-black/5 hover:border-orange-500/30 transition-colors duration-300 relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      <div className={`flex items-center gap-3 mb-2 text-orange-600 ${isEven ? "md:justify-end" : ""}`}>
                        {isEdu ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                        <span className="font-semibold text-neutral-800">{item.company}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h4>
                      
                      <div className={`flex items-center gap-2 text-sm text-neutral-500 mb-4 ${isEven ? "md:justify-end" : ""}`}>
                        <Calendar size={14} />
                        <span>{item.duration}</span>
                      </div>
                      
                      <p className="text-neutral-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certificates Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="mt-24 p-8 glass-card border border-white/10 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">Languages & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
             {PORTFOLIO_DATA.languages.map((lang, idx) => (
                <div key={idx} className="px-6 py-3 bg-black/5 border border-black/5 rounded-xl text-center">
                   <div className="text-neutral-500 text-sm mb-1">{lang.language}</div>
                   <div className="text-neutral-900 font-bold">{lang.level}</div>
                </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
