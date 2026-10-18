"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  className?: string;
}

export type GlassButtonProps = BaseButtonProps &
  Omit<HTMLMotionProps<"button">, keyof BaseButtonProps>;

export const GlassButton: React.FC<GlassButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = "right",
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-2xl gap-3",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-brand-purple to-brand-cyan text-brand-black font-semibold shadow-glow-dual hover:shadow-cyan-glow hover:brightness-110 border border-white/30",
    secondary:
      "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.14] hover:border-brand-purple/50 shadow-glass backdrop-blur-md",
    outline:
      "bg-transparent hover:bg-white/[0.05] text-white border border-brand-purple/40 hover:border-brand-cyan/60 hover:shadow-glow-purple",
    ghost:
      "bg-transparent hover:bg-white/[0.05] text-brand-gray hover:text-white border-transparent",
  };

  const content = (
    <>
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:rtl:-translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClass = cn(
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClass}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={disabled || isLoading ? undefined : { scale: 1.02 }}
      whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
      disabled={disabled || isLoading}
      className={combinedClass}
      {...props}
    >
      {content}
    </motion.button>
  );
};
