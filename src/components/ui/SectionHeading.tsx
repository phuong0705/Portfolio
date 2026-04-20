"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {title.split(" ").map((word, i, arr) => {
            if (i === arr.length - 1) {
              return (
                <span key={i} className="text-gradient">
                  {word}
                </span>
              );
            }
            return <span key={i}>{word} </span>;
          })}
        </h2>
        {subtitle && (
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
