"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { motion } from "framer-motion";
import { Code, Cpu, Sparkles, Workflow, ShieldCheck, User } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const focusPillars = [
    {
      titleEn: "Web Development",
      titleAr: "تطوير مواقع الويب",
      descEn: "Modern, responsive frontend & fullstack web experiences.",
      descAr: "تجارب ويب عصرية، متجاوبة، وسريعة الاستجابة.",
      icon: <Code className="w-5 h-5 text-brand-cyan" />,
    },
    {
      titleEn: "AI Automation",
      titleAr: "الأتمتة بالذكاء الاصطناعي",
      descEn: "Intelligent workflow pipelines that eliminate repetitive work.",
      descAr: "مسارات عمل مؤتمتة تلغي المهام الروتينية المجهدة.",
      icon: <Cpu className="w-5 h-5 text-brand-purple" />,
    },
    {
      titleEn: "AI Solutions",
      titleAr: "حلول الذكاء الاصطناعي",
      descEn: "Practical implementation of modern artificial intelligence.",
      descAr: "تطبيقات وحلول عملية مبنية على أحدث نماذج الذكاء الاصطناعي.",
      icon: <Sparkles className="w-5 h-5 text-brand-cyan" />,
    },
    {
      titleEn: "Digital Solutions",
      titleAr: "الحلول الرقمية المتكاملة",
      descEn: "Streamlined platforms and business process enhancements.",
      descAr: "منصات متكاملة وحلول لتطوير العمليات وتحقيق النمو الرقمي.",
      icon: <Workflow className="w-5 h-5 text-brand-purple" />,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("about.title")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Photo & Identity Glass Container Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <GlassCard
              variant="elevated"
              className="h-full flex flex-col justify-between p-8 group relative overflow-hidden"
            >
              {/* Background ambient lighting in card */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-brand-purple font-mono">
                    Profile & Vision
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-glow-cyan" />
                </div>

                {/* Profile Photo Placeholder with High-Tech Liquid Glass Frame */}
                <div className="relative mx-auto my-4 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-[#1b1b28] via-[#10101a] to-[#08080e] border border-white/10 p-1 flex items-center justify-center shadow-xl group-hover:border-brand-purple/40 transition-colors duration-500">
                  <div className="w-full h-full rounded-[14px] bg-[#0c0c14] flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3">
                      <User className="w-10 h-10 text-brand-cyan/70" />
                    </div>
                    <span className="text-xs font-mono text-brand-gray tracking-wider uppercase">
                      Profile Image
                    </span>
                    <span className="text-[10px] text-white/40 mt-1">
                      (Replaceable in public/images)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-gray">Brand</span>
                  <span className="font-semibold text-white tracking-wider">
                    VENOM DEV
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-gray">Creator</span>
                  <span className="font-semibold text-brand-cyan">
                    Abdeldjalil Medjahdi
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-gray">Mission</span>
                  <span className="font-mono text-brand-purple font-semibold">
                    {t("about.brandMotto")}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* About Text & Core Focus Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <GlassCard variant="default" className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "عبد الجليل مجاهدي" : "Abdeldjalil Medjahdi"}
                  </h3>
                  <p className="text-xs text-brand-cyan font-mono">
                    VENOM DEV Digital Architect
                  </p>
                </div>
              </div>

              {/* Exact Provided Bio Sentences with Highlighted Keywords */}
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-brand-gray">
                <p>
                  {language === "ar" ? (
                    t("about.p1")
                  ) : (
                    <>
                      I&apos;m <span className="text-white font-medium">Abdeldjalil Medjahdi</span>, a technology enthusiast passionate about{" "}
                      <span className="text-brand-cyan font-medium">web development</span>,{" "}
                      <span className="text-brand-purple font-medium">automation</span>, and{" "}
                      <span className="text-white font-medium">artificial intelligence</span>.
                    </>
                  )}
                </p>

                <p>
                  {language === "ar" ? (
                    t("about.p2")
                  ) : (
                    <>
                      I focus on building <span className="text-white font-medium">modern websites</span> and{" "}
                      <span className="text-brand-cyan font-medium">intelligent digital solutions</span> that help individuals and businesses improve productivity, automate repetitive tasks, and establish a stronger online presence.
                    </>
                  )}
                </p>

                <p>
                  {language === "ar" ? (
                    t("about.p3")
                  ) : (
                    <>
                      My goal is to transform ideas into{" "}
                      <span className="text-white font-medium">practical digital experiences</span> through technology, creativity, and innovation.
                    </>
                  )}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs font-mono text-brand-purple">
                  <span>VENOM DEV</span>
                  <span>•</span>
                  <span>BUILD. AUTOMATE. INNOVATE.</span>
                </div>
              </div>
            </GlassCard>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPillars.map((pillar, idx) => (
                <GlassCard
                  key={idx}
                  variant="interactive"
                  className="p-5 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {language === "ar" ? pillar.titleAr : pillar.titleEn}
                    </h4>
                  </div>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    {language === "ar" ? pillar.descAr : pillar.descEn}
                  </p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
