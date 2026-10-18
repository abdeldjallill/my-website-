"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/ui/SectionHeading";
import { PROJECTS } from "@/data/projects";
import { GlassCard } from "@/ui/GlassCard";
import { motion } from "framer-motion";
import { ArrowUpRight, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", labelEn: "All Projects", labelAr: "جميع المشاريع" },
    { id: "Web Development", labelEn: "Web Development", labelAr: "تطوير الويب" },
    { id: "AI Automation", labelEn: "AI Automation", labelAr: "الأتمتة بالذكاء الاصطناعي" },
    { id: "AI Solutions", labelEn: "AI Solutions", labelAr: "حلول الذكاء الاصطناعي" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("projects.badge")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 select-none",
                  isActive
                    ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-brand-black font-semibold shadow-glow-dual"
                    : "glass-panel text-brand-gray hover:text-white border-white/10"
                )}
              >
                {language === "ar" ? cat.labelAr : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <GlassCard
                variant="interactive"
                className="h-full flex flex-col justify-between p-0 overflow-hidden border-white/10 group hover:border-brand-purple/40"
              >
                {/* Image Container with Preview Aspect Ratio */}
                <div className="relative w-full aspect-[16/10] bg-[#0c0c14] overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-transparent to-transparent opacity-60" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
                    <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono font-medium text-brand-cyan border-brand-cyan/30">
                      {language === "ar" ? project.categoryAr : project.category}
                    </span>
                  </div>

                  {/* Placeholder Disclosure Badge */}
                  {project.isPlaceholder && (
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel bg-amber-500/10 border-amber-500/30 text-[10px] text-amber-300 font-mono">
                      <Info className="w-3 h-3" />
                      <span>{t("projects.placeholderBadge")}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {language === "ar" ? project.titleAr : project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-brand-gray leading-relaxed">
                      {language === "ar" ? project.descriptionAr : project.description}
                    </p>

                    {/* Notice if concept showcase */}
                    {project.isPlaceholder && (
                      <p className="mt-2 text-xs text-amber-300/80 font-mono italic">
                        {language === "ar"
                          ? project.placeholderNoticeAr
                          : project.placeholderNotice}
                      </p>
                    )}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-brand-gray"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-brand-gray hover:text-white transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>{t("projects.github")}</span>
                        </a>
                      )}
                    </div>

                    <a
                      href={project.liveUrl || "#"}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan hover:underline group-hover:translate-x-0.5 group-hover:rtl:-translate-x-0.5 transition-transform"
                    >
                      <span>{t("projects.viewLive")}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
