"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "@/ui/AvailabilityBadge";
import { GlassButton } from "@/ui/GlassButton";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal, Cpu, Layers } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 pt-28 pb-16 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
          {/* Availability Status Badge */}
          <div className="flex items-center gap-3">
            <AvailabilityBadge />
          </div>

          {/* Heading with Brand & Personal Name */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-widest text-brand-cyan font-mono flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>{t("hero.brand")} • {t("hero.greeting")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              <span className="block text-white">Abdeldjalil</span>
              <span className="block text-gradient-venom">Medjahdi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-1 inline-block"
            >
              <span className="text-base sm:text-lg md:text-xl font-medium text-brand-purple tracking-wide">
                {t("hero.tagline")}
              </span>
            </motion.div>
          </div>

          {/* Core Value Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-brand-gray max-w-xl leading-relaxed"
          >
            &ldquo;{t("hero.description")}&rdquo;
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <GlassButton
              variant="primary"
              size="lg"
              onClick={() => scrollTo("services")}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {t("hero.ctaServices")}
            </GlassButton>

            <GlassButton
              variant="secondary"
              size="lg"
              onClick={() => scrollTo("contact")}
            >
              {t("hero.ctaContact")}
            </GlassButton>
          </motion.div>

          {/* Quick Technical Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4 flex flex-wrap gap-3 text-xs text-brand-gray"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/5">
              <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
              <span>AI Automation</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/5">
              <Terminal className="w-3.5 h-3.5 text-brand-purple" />
              <span>Next.js Architecture</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/5">
              <Layers className="w-3.5 h-3.5 text-white" />
              <span>Intelligent Solutions</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Futuristic Liquid Glass Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm sm:max-w-md aspect-square"
          >
            {/* Outer Ambient Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple/30 via-transparent to-brand-cyan/30 blur-2xl -z-10" />

            {/* Main Glass Card Frame */}
            <div className="relative w-full h-full rounded-3xl glass-panel-elevated border border-white/15 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Card Header UI */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-brand-gray/80 tracking-widest">
                  VENOM.SYSTEM_v2.0
                </div>
              </div>

              {/* Avatar Centerpiece / Visual Placeholder */}
              <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
                <div className="relative group cursor-pointer">
                  {/* Outer animated spinning halo */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-purple opacity-70 blur-md group-hover:opacity-100 transition duration-700 animate-pulse-slow" />

                  {/* Profile Placeholder Container */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#1b1b28] to-[#0c0c14] border-2 border-white/20 p-1 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-[#11111a] flex flex-col items-center justify-center p-4">
                      {/* Stylized Monogram */}
                      <span className="text-3xl sm:text-4xl font-extrabold text-gradient-venom tracking-wider">
                        AM
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase mt-1">
                        VENOM DEV
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Abdeldjalil Medjahdi
                  </h3>
                  <p className="text-xs text-brand-cyan font-mono mt-0.5">
                    Web & AI Automation Engineer
                  </p>
                </div>
              </div>

              {/* Card Footer Micro Metrics */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-brand-gray block text-[10px] uppercase tracking-wider">
                    Core Architecture
                  </span>
                  <span className="text-white font-mono font-medium">Next.js App Router</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-brand-gray block text-[10px] uppercase tracking-wider">
                    Focus Domain
                  </span>
                  <span className="text-brand-purple font-mono font-medium">AI & Automation</span>
                </div>
              </div>
            </div>

            {/* Floating Floating Glass Micro Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2 rounded-xl glass-panel-elevated border-brand-purple/40 shadow-glow-purple flex items-center gap-2 text-xs font-semibold text-white"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span>Smart Workflows</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2 rounded-xl glass-panel-elevated border-brand-cyan/40 shadow-glow-cyan flex items-center gap-2 text-xs font-semibold text-white"
            >
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Full-Stack Web</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-xs text-brand-gray cursor-pointer hover:text-white transition-colors"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[11px] tracking-widest uppercase font-mono">
          {t("hero.scroll")}
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-brand-cyan shadow-glow-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
};
