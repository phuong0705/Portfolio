"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, icon, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full overflow-hidden";
    
    const variants = {
      primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]",
      secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
      outline: "border border-orange-500/50 text-orange-400 hover:bg-orange-500/10",
      ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props as any}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && <span className="flex items-center">{icon}</span>}
        </span>
        {variant === "primary" && (
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
