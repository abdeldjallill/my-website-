"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-1 rounded-full glass-panel border border-white/10 ${className}`}
    >
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1 ${
            language === "en"
              ? "text-brand-black shadow-glow-cyan"
              : "text-brand-gray hover:text-white"
          }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="lang-active-pill"
              className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>

        <button
          onClick={() => setLanguage("ar")}
          aria-pressed={language === "ar"}
          className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1 ${
            language === "ar"
              ? "text-brand-black shadow-glow-purple"
              : "text-brand-gray hover:text-white"
          }`}
        >
          {language === "ar" && (
            <motion.div
              layoutId="lang-active-pill"
              className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10 font-arabic">عربي</span>
        </button>
      </div>
    </div>
  );
};
