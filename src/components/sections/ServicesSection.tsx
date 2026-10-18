"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/ui/SectionHeading";
import { SERVICES } from "@/data/services";
import { GlassCard } from "@/ui/GlassCard";
import { motion } from "framer-motion";
import { Cpu, Code2, Sparkles, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-7 h-7 text-brand-purple" />;
      case "Code":
        return <Code2 className="w-7 h-7 text-brand-cyan" />;
      case "Sparkles":
        return <Sparkles className="w-7 h-7 text-brand-purple" />;
      case "Layers":
        return <Layers className="w-7 h-7 text-brand-cyan" />;
      default:
        return <Cpu className="w-7 h-7 text-brand-cyan" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const isPurpleTheme = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassCard
                  variant={isPurpleTheme ? "purple" : "cyan"}
                  className="h-full flex flex-col justify-between p-8 sm:p-10 group relative border-white/10 hover:border-brand-purple/40"
                >
                  {/* Subtle Top Specular line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-brand-cyan/40 transition-all duration-500" />

                  <div>
                    {/* Header: Service Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl glass-panel border border-white/10 group-hover:border-white/25 transition-colors">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-white/40 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-gradient-venom transition-colors">
                      {language === "ar" ? service.titleAr : service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-gray leading-relaxed mb-6">
                      {language === "ar"
                        ? service.detailedDescriptionAr
                        : service.detailedDescription}
                    </p>

                    {/* Deliverables / Capabilities List */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-xs uppercase tracking-wider text-brand-cyan font-mono mb-3.5">
                        {t("services.explore")}
                      </h4>

                      <ul className="space-y-2.5">
                        {(language === "ar"
                          ? service.servicesIncludedAr
                          : service.servicesIncluded
                        ).map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray/90"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                isPurpleTheme ? "text-brand-purple" : "text-brand-cyan"
                              }`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gray hover:text-white group-hover:text-brand-cyan transition-colors"
                    >
                      <span>{t("nav.contactCta")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:rtl:-translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                      VENOM DEV
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
