"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/ui/SectionHeading";
import { SOCIAL_LINKS, PRIMARY_EMAIL } from "@/data/social-links";
import { GlassCard } from "@/ui/GlassCard";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa6";
import { Mail, Copy, Check, ArrowUpRight, AlertCircle } from "lucide-react";

export const SocialSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PRIMARY_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getPlatformIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <FaGithub className="w-8 h-8 text-white group-hover:text-brand-purple transition-colors" />;
      case "linkedin":
        return <FaLinkedin className="w-8 h-8 text-[#0a66c2] group-hover:scale-110 transition-transform" />;
      case "telegram":
        return <FaTelegram className="w-8 h-8 text-[#229ED9] group-hover:scale-110 transition-transform" />;
      case "tiktok":
        return <FaTiktok className="w-8 h-8 text-white group-hover:text-brand-cyan transition-colors" />;
      case "instagram":
        return <FaInstagram className="w-8 h-8 text-[#E4405F] group-hover:scale-110 transition-transform" />;
      case "email":
        return <Mail className="w-8 h-8 text-brand-cyan group-hover:scale-110 transition-transform" />;
      default:
        return <Mail className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="social" className="relative py-24 sm:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("social.badge")}
          title={t("social.title")}
          subtitle={t("social.subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((item, index) => {
            const isEmail = item.id === "email";
            const isPlaceholder = item.isPlaceholder;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard
                  variant="interactive"
                  className={`p-6 sm:p-7 h-full flex flex-col justify-between group relative overflow-hidden ${
                    isPlaceholder
                      ? "border-amber-500/20 hover:border-amber-500/40"
                      : "hover:border-brand-cyan/40"
                  }`}
                >
                  {/* Subtle hover backlight */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-purple/20 via-transparent to-brand-cyan/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                  <div>
                    {/* Top row: Platform Icon + Action/Status */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-colors shadow-inner">
                        {getPlatformIcon(item.iconName)}
                      </div>

                      {isPlaceholder ? (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                          <AlertCircle className="w-3 h-3" />
                          <span>To Be Added</span>
                        </span>
                      ) : isEmail ? (
                        <button
                          onClick={handleCopyEmail}
                          title={t("social.copyEmail")}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-brand-gray hover:text-white hover:border-brand-cyan/40 transition-all"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-medium">
                                {t("social.copied")}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-brand-cyan" />
                              <span>{t("social.copyEmail")}</span>
                            </>
                          )}
                        </button>
                      ) : (
                        <span className="p-2 rounded-xl text-brand-gray group-hover:text-white group-hover:translate-x-0.5 group-hover:rtl:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          <ArrowUpRight className="w-5 h-5" />
                        </span>
                      )}
                    </div>

                    {/* Platform Title & Handle */}
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-venom transition-colors">
                      {language === "ar" ? item.nameAr : item.name}
                    </h3>

                    <p className="mt-1 text-sm font-mono text-brand-gray break-all">
                      {item.handle}
                    </p>

                    {/* Placeholder notice */}
                    {isPlaceholder && (
                      <p className="mt-2 text-xs text-amber-300/80 italic font-mono">
                        {language === "ar"
                          ? item.placeholderNoticeAr
                          : item.placeholderNotice}
                      </p>
                    )}
                  </div>

                  {/* Card Bottom Click Action */}
                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                    {isPlaceholder ? (
                      <span className="text-xs text-brand-gray/60 italic">
                        Placeholder account
                      </span>
                    ) : (
                      <a
                        href={item.url}
                        target={item.url.startsWith("http") ? "_blank" : undefined}
                        rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
                      >
                        <span>{t("social.openLink")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                      VENOM
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
