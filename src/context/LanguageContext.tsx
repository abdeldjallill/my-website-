"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.social": "Connect",
    "nav.contact": "Contact",
    "nav.contactCta": "Contact Me",

    // Availability
    "hero.available": "Available for Select Projects & Consulting",
    "hero.notAvailable": "Currently Busy with Ongoing Projects",
    "hero.badgeConfigNote": "Status can be toggled anytime",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.name": "Abdeldjalil Medjahdi",
    "hero.brand": "VENOM DEV",
    "hero.tagline": "Web Developer | AI Automation Specialist | AI Enthusiast",
    "hero.description":
      "I build modern digital experiences and intelligent automation solutions that help businesses work smarter, save time, and grow.",
    "hero.ctaServices": "Explore My Services",
    "hero.ctaContact": "Contact Me",
    "hero.scroll": "Scroll to explore",

    // About
    "about.title": "About Me",
    "about.subtitle": "Driven by innovation, engineered with precision.",
    "about.p1":
      "I'm Abdeldjalil Medjahdi, a technology enthusiast passionate about web development, automation, and artificial intelligence.",
    "about.p2":
      "I focus on building modern websites and intelligent digital solutions that help individuals and businesses improve productivity, automate repetitive tasks, and establish a stronger online presence.",
    "about.p3":
      "My goal is to transform ideas into practical digital experiences through technology, creativity, and innovation.",
    "about.brandMotto": "BUILD. AUTOMATE. INNOVATE.",
    "about.coreCompetencies": "Core Technical Focus",
    "about.focus1": "AI & Workflow Automation",
    "about.focus2": "Modern Fullstack Web Development",
    "about.focus3": "Intelligent Digital Solutions",
    "about.focus4": "Process Optimization & Integration",

    // Services
    "services.title": "What I Do",
    "services.subtitle": "Turning ideas into intelligent digital solutions.",
    "services.badge": "High-Impact Capabilities",
    "services.explore": "Key Deliverables",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of the things I've been building.",
    "projects.badge": "Portfolio & Prototypes",
    "projects.viewLive": "Live Preview",
    "projects.github": "GitHub",
    "projects.all": "All Solutions",
    "projects.placeholderBadge": "Transparent Disclosure",

    // Social
    "social.title": "Let's Connect",
    "social.subtitle": "Find me across the digital world.",
    "social.badge": "Social Presence",
    "social.directEmail": "Direct Email Inquiries",
    "social.copyEmail": "Copy Address",
    "social.copied": "Copied to clipboard!",
    "social.openLink": "Open Profile",

    // Contact
    "contact.title": "Let's Work Together",
    "contact.subtitle":
      "Have a project in mind? Let's turn your idea into something amazing.",
    "contact.badge": "Get in Touch",
    "contact.nameLabel": "Full Name",
    "contact.namePlaceholder": "Abdeldjalil Medjahdi",
    "contact.emailLabel": "Email Address",
    "contact.emailPlaceholder": "your.name@company.com",
    "contact.subjectLabel": "Subject",
    "contact.subjectPlaceholder": "e.g., AI Workflow Automation Project",
    "contact.messageLabel": "Your Message",
    "contact.messagePlaceholder":
      "Tell me about your business goals, what processes you want to automate, or your website project details...",
    "contact.submit": "Send Message",
    "contact.submitting": "Transmitting Message...",
    "contact.successTitle": "Message Sent Successfully!",
    "contact.successDesc":
      "Thank you for reaching out. I've received your inquiry and will respond to your email as soon as possible.",
    "contact.errorTitle": "Submission Notice",
    "contact.requiredFields": "Please fill in all required fields.",
    "contact.invalidEmail": "Please provide a valid email address.",
    "contact.directReach": "Prefer direct channels?",
    "contact.telegramDirect": "Chat on Telegram",
    "contact.emailDirect": "Send Direct Email",

    // Footer
    "footer.brandTagline": "Building the Future, One Solution at a Time.",
    "footer.quickNav": "Quick Navigation",
    "footer.connect": "Social Links",
    "footer.rights": "All rights reserved.",
    "footer.backToTop": "Back to top",
  },
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.services": "الخدمات",
    "nav.projects": "الأعمال",
    "nav.social": "تواصل معي",
    "nav.contact": "اتصل بي",
    "nav.contactCta": "تواصل معي",

    // Availability
    "hero.available": "متاح لمشاريع مختارة واستشارات تقنية",
    "hero.notAvailable": "منشغل حالياً بمشاريع قائمة",
    "hero.badgeConfigNote": "يمكن تغيير الحالة في أي وقت",

    // Hero
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "عبد الجليل مجاهدي",
    "hero.brand": "VENOM DEV",
    "hero.tagline":
      "مطور ويب | متخصص أتمتة بالذكاء الاصطناعي | مهتم بالذكاء الاصطناعي",
    "hero.description":
      "أبني تجارب رقمية حديثة وحلول أتمتة ذكية تساعد الأفراد والشركات على العمل بذكاء، توفير الوقت، وتحقيق النمو.",
    "hero.ctaServices": "استكشف خدماتي",
    "hero.ctaContact": "تواصل معي",
    "hero.scroll": "مرر للأسفل للاستكشاف",

    // About
    "about.title": "نبذة عني",
    "about.subtitle": "مدفوع بالابتكار، ومبني بأعلى درجات الدقة والاحتراف.",
    "about.p1":
      "أنا عبد الجليل مجاهدي، شغوف بالتقنية وتطوير الويب والأتمتة والذكاء الاصطناعي.",
    "about.p2":
      "أركز على بناء مواقع ويب عصرية وحلول رقمية ذكية تساعد الأفراد والشركات على رفع الإنتاجية، أتمتة المهام الروتينية المتكررة، وترسيخ حضور رقمي استثنائي.",
    "about.p3":
      "هدفي هو تحويل الأفكار والرؤى إلى تجارب رقمية عملية عبر التكنولوجيا، الإبداع، والابتكار المستمر.",
    "about.brandMotto": "ابنِ. أتمت. ابتكر.",
    "about.coreCompetencies": "المجالات التقنية الرئيسية",
    "about.focus1": "الأتمتة وتدفقات العمل الذكية",
    "about.focus2": "تطوير مواقع الويب الحديثة",
    "about.focus3": "حلول الذكاء الاصطناعي الرقمية",
    "about.focus4": "تحسين العمليات والتكامل التقني",

    // Services
    "services.title": "ما أقدمه",
    "services.subtitle": "تحويل الأفكار إلى حلول رقمية ذكية.",
    "services.badge": "خدمات تقنية متقدمة",
    "services.explore": "أبرز ما يشمله العمل",

    // Projects
    "projects.title": "المشاريع والأعمال",
    "projects.subtitle": "نماذج ومشاريع من واقع رحلتي في التطوير والبناء.",
    "projects.badge": "معرض المشاريع والنماذج",
    "projects.viewLive": "معاينة حية",
    "projects.github": "جيت هاب",
    "projects.all": "جميع الحلول",
    "projects.placeholderBadge": "إفصاح وشفافية",

    // Social
    "social.title": "تواصل معي",
    "social.subtitle": "تابعني وتواصل معي عبر مختلف المنصات الرقمية.",
    "social.badge": "الحضور الرقمي",
    "social.directEmail": "التواصل المباشر عبر البريد",
    "social.copyEmail": "نسخ البريد",
    "social.copied": "تم نسخ البريد للحافظة!",
    "social.openLink": "فتح الملف الشخصي",

    // Contact
    "contact.title": "لنبدأ العمل معاً",
    "contact.subtitle":
      "هل لديك فكرة أو مشروع؟ دعنا نحولها إلى واقع تقني متميز.",
    "contact.badge": "ابدأ المحادثة",
    "contact.nameLabel": "الاسم الكامل",
    "contact.namePlaceholder": "عبد الجليل مجاهدي",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.emailPlaceholder": "your.name@company.com",
    "contact.subjectLabel": "موضوع الرسالة",
    "contact.subjectPlaceholder": "مثال: استشارة بخصوص أتمتة العمليات",
    "contact.messageLabel": "تفاصيل رسالتك",
    "contact.messagePlaceholder":
      "أخبرني عن أهداف عملك، العمليات التي ترغب في أتمتتها، أو تفاصيل الموقع الذي تود إنشاءه...",
    "contact.submit": "إرسال الرسالة",
    "contact.submitting": "جارٍ إرسال الرسالة...",
    "contact.successTitle": "تم إرسال رسالتك بنجاح!",
    "contact.successDesc":
      "شكراً لتواصلك. لقد تم استلام استفسارك وسأقوم بالرد على بريدك الإلكتروني في أقرب وقت ممكن.",
    "contact.errorTitle": "ملاحظة الإرسال",
    "contact.requiredFields": "يرجى تعبئة كافة الحقول المطلوبة.",
    "contact.invalidEmail": "يرجى إدخال بريد إلكتروني صالح.",
    "contact.directReach": "هل تفضل التواصل السريع المباشر؟",
    "contact.telegramDirect": "محادثة عبر تيليجرام",
    "contact.emailDirect": "إرسال بريد إلكتروني",

    // Footer
    "footer.brandTagline": "نبني المستقبل، حلاً تلو الآخر.",
    "footer.quickNav": "روابط سريعة",
    "footer.connect": "منصات التواصل",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.backToTop": "العودة للأعلى",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Read saved preference or detect browser language safely
    try {
      const savedLang = localStorage.getItem("venom_dev_lang") as Language | null;
      if (savedLang === "en" || savedLang === "ar") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  useEffect(() => {
    const isRtl = language === "ar";
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    try {
      localStorage.setItem("venom_dev_lang", language);
    } catch {
      // Ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const isRtl = language === "ar";

  const t = (key: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English
    return translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
