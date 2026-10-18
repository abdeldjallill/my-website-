"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/config/site";
import { motion } from "framer-motion";

export const AvailabilityBadge: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language } = useLanguage();
  const { isAvailable, statusTextEn, statusTextAr, unavailableTextEn, unavailableTextAr } =
    SITE_CONFIG.availability;

  const label = isAvailable
    ? language === "ar"
      ? statusTextAr
      : statusTextEn
    : language === "ar"
    ? unavailableTextAr
    : unavailableTextEn;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border ${
        isAvailable
          ? "border-emerald-500/25 bg-emerald-950/20 text-emerald-300"
          : "border-amber-500/25 bg-amber-950/20 text-amber-300"
      } text-xs font-medium tracking-wide shadow-sm select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isAvailable ? "bg-emerald-400" : "bg-amber-400"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isAvailable ? "bg-emerald-400" : "bg-amber-400"
          }`}
        />
      </span>
      <span>{label}</span>
    </motion.div>
  );
};
