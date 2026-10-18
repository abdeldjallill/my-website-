"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { GlassButton } from "@/ui/GlassButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  MessageSquare,
  User,
  CheckCircle2,
  AlertTriangle,
  Info,
  Clock,
  Sparkles,
} from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { PRIMARY_EMAIL, TELEGRAM_URL } from "@/data/social-links";

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [unconfiguredNotice, setUnconfiguredNotice] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessResponse(null);
    setUnconfiguredNotice(null);

    // Client-side quick checks
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage(t("contact.requiredFields"));
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setErrorMessage(t("contact.invalidEmail"));
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessResponse(data.message || t("contact.successDesc"));
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });

        // Trigger celebratory confetti if available
        try {
          const confetti = (await import("canvas-confetti")).default;
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#9B7CFF", "#38CFFF", "#FFFFFF"],
          });
        } catch {
          // Ignore
        }
      } else {
        // If Resend API key is not configured, explain transparently as required
        if (data.configured === false) {
          setUnconfiguredNotice(data.error);
        } else {
          setErrorMessage(
            data.error || "Unable to send your message right now. Please try again."
          );
        }
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please verify your connection or reach out directly via Telegram."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("contact.badge")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries & Response Promise */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard variant="elevated" className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-purple/10 border border-brand-purple/30 text-brand-purple">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">VENOM DEV</h3>
                  <p className="text-xs text-brand-cyan font-mono">
                    Direct Client &amp; Collaboration Channel
                  </p>
                </div>
              </div>

              <p className="text-sm text-brand-gray leading-relaxed">
                Whether you need a custom modern web application, an automated business workflow, or AI solution consulting, I am ready to collaborate and bring your ideas to life.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* Email Direct Card */}
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/10 hover:border-brand-cyan/40 hover:shadow-glow-cyan transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-white/[0.05] text-brand-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-mono uppercase text-brand-gray">
                      {t("contact.emailDirect")}
                    </span>
                    <span className="block text-sm font-semibold text-white truncate">
                      {PRIMARY_EMAIL}
                    </span>
                  </div>
                </a>

                {/* Telegram Direct Card */}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/10 hover:border-brand-purple/40 hover:shadow-glow-purple transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-white/[0.05] text-[#229ED9] group-hover:scale-110 transition-transform">
                    <SiTelegram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-brand-gray">
                      {t("contact.telegramDirect")}
                    </span>
                    <span className="block text-sm font-semibold text-white">
                      @venom_ff31
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-brand-gray">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Inquiries are typically reviewed within 24 hours. Clear project objectives and requirements help speed up our first consultation.
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard variant="default" className="p-8 sm:p-10 relative">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-gray"
                    >
                      {t("contact.nameLabel")} <span className="text-brand-cyan">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-brand-gray">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-xl bg-[#0b0b12]/80 border border-white/10 text-white placeholder-brand-gray/50 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-gray"
                    >
                      {t("contact.emailLabel")} <span className="text-brand-cyan">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-brand-gray">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.emailPlaceholder")}
                        className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-xl bg-[#0b0b12]/80 border border-white/10 text-white placeholder-brand-gray/50 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-brand-gray"
                  >
                    {t("contact.subjectLabel")} <span className="text-brand-purple">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-brand-gray">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.subjectPlaceholder")}
                      className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-xl bg-[#0b0b12]/80 border border-white/10 text-white placeholder-brand-gray/50 text-sm focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-brand-gray"
                  >
                    {t("contact.messageLabel")} <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full p-4 rounded-xl bg-[#0b0b12]/80 border border-white/10 text-white placeholder-brand-gray/50 text-sm focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {/* Feedback Alerts */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-xs sm:text-sm text-red-300"
                    >
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {unconfiguredNotice && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm text-amber-300"
                    >
                      <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">{t("contact.errorTitle")}</p>
                        <p>{unconfiguredNotice}</p>
                      </div>
                    </motion.div>
                  )}

                  {successResponse && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs sm:text-sm text-emerald-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">{t("contact.successTitle")}</p>
                        <p>{successResponse}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <div className="pt-2">
                  <GlassButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    isLoading={isLoading}
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isLoading ? t("contact.submitting") : t("contact.submit")}
                  </GlassButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
