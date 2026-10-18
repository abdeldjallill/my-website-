"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/ui/LanguageSwitcher";
import { GlassButton } from "@/ui/GlassButton";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  key: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "services", key: "nav.services" },
  { id: "projects", key: "nav.projects" },
  { id: "social", key: "nav.social" },
  { id: "contact", key: "nav.contact" },
];

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
        Boolean
      ) as HTMLElement[];

      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300",
          "glass-panel border border-white/10 shadow-glass backdrop-blur-xl",
          isScrolled
            ? "bg-[#0c0c14]/85 border-brand-purple/20 shadow-glow-dual py-2.5"
            : "bg-[#11111a]/70"
        )}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] shadow-glow-purple">
            <div className="w-full h-full bg-brand-black rounded-[11px] flex items-center justify-center transition-colors group-hover:bg-[#151522]">
              <Zap className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-wider text-white">
              VENOM<span className="text-brand-cyan">.</span>DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 select-none",
                  isActive
                    ? "text-white"
                    : "text-brand-gray hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-glow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-purple/25 to-brand-cyan/25 border border-brand-purple/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(item.key)}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />

          <GlassButton
            size="sm"
            variant="primary"
            onClick={() => scrollTo("contact")}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            {t("nav.contactCta")}
          </GlassButton>
        </div>

        {/* Mobile Hamburger Toggle & Language Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl glass-panel text-brand-gray hover:text-white border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto absolute top-20 inset-x-4 max-w-lg mx-auto rounded-2xl glass-panel-elevated p-6 border border-brand-purple/25 shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-3 rounded-xl text-start font-medium text-sm transition-all",
                      isActive
                        ? "bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 text-white border border-brand-purple/30"
                        : "text-brand-gray hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    <span>{t(item.key)}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-glow-cyan" />
                    )}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10">
                <GlassButton
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => scrollTo("contact")}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {t("nav.contactCta")}
                </GlassButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
