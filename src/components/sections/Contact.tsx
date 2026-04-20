"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-orange-500/10 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-[var(--card)] backdrop-blur-xl border border-[var(--card-border)] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Glow inside card */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full" />

          {/* Contact Info (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2 space-y-8 relative z-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Get in touch</h3>
              <p className="text-neutral-600">Fill out the form and I'll be in touch as soon as possible.</p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                   <Mail size={20} />
                 </div>
                 <div>
                   <div className="text-sm text-neutral-500">Email</div>
                   <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-neutral-900 font-medium hover:text-orange-500 transition-colors">
                     {PORTFOLIO_DATA.contact.email}
                   </a>
                 </div>
               </div>

               <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                   <Phone size={20} />
                 </div>
                 <div>
                   <div className="text-sm text-neutral-500">Phone</div>
                   <a href={`tel:${PORTFOLIO_DATA.contact.phone.replace(/\s+/g, '')}`} className="text-neutral-900 font-medium hover:text-orange-500 transition-colors">
                     {PORTFOLIO_DATA.contact.phone}
                   </a>
                 </div>
               </div>

               <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <div className="text-sm text-neutral-500">Location</div>
                   <div className="text-neutral-900 font-medium">Tp.Hồ Chí Minh</div>
                 </div>
               </div>
            </div>

            <div className="pt-8 flex gap-4">
               <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-black/10 transition-all hover:scale-110">
                 <Github size={20} />
               </a>
               <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#0A66C2] transition-all hover:scale-110">
                 <Linkedin size={20} />
               </a>
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="col-span-1 lg:col-span-3 relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-neutral-600 font-medium pl-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-neutral-600 font-medium pl-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-neutral-600 font-medium pl-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Job Opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-neutral-600 font-medium pl-1">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                type="submit"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Sending...</span>
                ) : submitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <span className="flex items-center gap-2">Send Message <Send size={18} /></span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
