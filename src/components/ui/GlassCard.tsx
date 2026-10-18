"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "purple" | "cyan" | "interactive";
  glowEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = "default",
  glowEffect = true,
  ...props
}) => {
  const variantStyles = {
    default:
      "bg-gradient-to-br from-[#12121a]/80 via-[#0e0e16]/65 to-[#09090f]/80 border-white/[0.08] hover:border-brand-purple/30",
    elevated:
      "bg-gradient-to-br from-[#181824]/90 via-[#12121b]/80 to-[#0c0c14]/90 border-white/[0.12] hover:border-brand-cyan/40 shadow-glass-elevated",
    purple:
      "bg-gradient-to-br from-[#181224]/80 via-[#100d1c]/60 to-[#080612]/80 border-brand-purple/20 hover:border-brand-purple/50 hover:shadow-glow-purple",
    cyan:
      "bg-gradient-to-br from-[#0e1b24]/80 via-[#0a141c]/60 to-[#060e14]/80 border-brand-cyan/20 hover:border-brand-cyan/50 hover:shadow-glow-cyan",
    interactive:
      "bg-gradient-to-br from-[#13131c]/75 via-[#0e0e15]/55 to-[#09090f]/75 border-white/[0.09] hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl backdrop-blur-xl border p-6 overflow-hidden",
        "shadow-glass transition-all duration-300",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Specular gloss highlight at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {glowEffect && (
        <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {children}
    </motion.div>
  );
};
