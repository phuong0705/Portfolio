"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-orange-500/10 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work focusing on scalable architecture, user experience, and modern web technologies."
        />

        <div className="space-y-24">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Mock Browser/App Window */}
                  <div className="relative glass-card border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute top-0 inset-x-0 h-10 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2 z-20">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    
                    {/* Placeholder for project actual image. Currently using abstract UI placeholders */}
                    <div className="absolute top-10 inset-0 bg-neutral-900 flex items-center justify-center p-8 overflow-hidden group-hover:blur-[2px] transition-all duration-500">
                       {/* Subtle wireframe overlay based on project */}
                       <div className="w-full h-full border-2 border-dashed border-white/5 rounded-xl flex flex-col gap-4 p-4 opacity-50 text-white/20 uppercase tracking-[0.2em] font-bold text-lg justify-center items-center text-center">
                         {project.title}
                         <div className="w-16 h-1 bg-orange-500/50 mt-4 rounded-full" />
                       </div>
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-30">
                      <Button variant="secondary" icon={<Github size={18} />} onClick={() => window.open(project.githubUrl, '_blank')}>GitHub</Button>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-orange-400 font-mono text-sm">0{index + 1}</span>
                    <div className="h-px w-12 bg-white/20" />
                    <span className="text-secondary text-sm font-medium tracking-wider uppercase">{project.role}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <div className="glass-card p-6 border-l-2 border-l-orange-500 border-t-0 border-r-0 border-b-0 rounded-r-2xl rounded-l-none bg-white/[0.02]">
                    <p className="text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest">Key Features & Impact</h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary">
                          <ArrowRight size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/5 text-white/70 rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
