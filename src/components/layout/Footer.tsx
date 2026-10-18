"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SOCIAL_LINKS, PRIMARY_EMAIL } from "@/data/social-links";
import { ArrowUp, Mail, Zap } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa6";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedin className="w-4 h-4" />;
      case "telegram":
        return <FaTelegram className="w-4 h-4" />;
      case "tiktok":
        return <FaTiktok className="w-4 h-4" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative mt-24 border-t border-white/[0.08] bg-[#07070b]/90 backdrop-blur-xl">
      {/* Top subtle glow line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] shadow-glow-purple">
                <div className="w-full h-full bg-brand-black rounded-[7px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">
                VENOM<span className="text-brand-cyan">.</span>DEV
              </span>
            </div>

            <p className="text-brand-purple font-medium text-sm tracking-wide">
              {t("footer.brandTagline")}
            </p>

            <p className="text-brand-gray text-xs sm:text-sm max-w-md leading-relaxed">
              Designed & engineered with modern Next.js architecture, reactive liquid glass interfaces, and intelligent automation systems.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${PRIMARY_EMAIL}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-cyan hover:underline transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PRIMARY_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">
              {t("footer.quickNav")}
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-gray">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-purple font-semibold">
              {t("footer.connect")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-brand-gray hover:text-brand-cyan hover:border-brand-cyan/40 hover:shadow-glow-cyan transition-all"
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs text-brand-gray hover:text-white border-white/10 hover:border-brand-purple/40 transition-all group"
              >
                <span>{t("footer.backToTop")}</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <p>© {new Date().getFullYear()} VENOM DEV (Abdeldjalil Medjahdi). {t("footer.rights")}</p>
          <p className="text-white/40 tracking-wider font-mono">
            BUILD. AUTOMATE. INNOVATE.
          </p>
        </div>
      </div>
    </footer>
  );
};
