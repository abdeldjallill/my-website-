/**
 * VENOM DEV — Global Brand & Site Configuration
 * Abdeldjalil Medjahdi
 */

export const SITE_CONFIG = {
  brandName: "VENOM DEV",
  authorName: "Abdeldjalil Medjahdi",
  authorNameAr: "عبد الجليل مجاهدي",
  motto: "BUILD. AUTOMATE. INNOVATE.",
  mottoAr: "ابنِ. أتمت. ابتكر.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://venom-dev.vercel.app",
  primaryEmail: "medjahdi.abdeldjalil08@gmail.com",
  telegramHandle: "@venom_ff31",
  telegramUrl: "https://t.me/venom_ff31",
  githubUrl: "https://github.com/abdeldjallill",
  linkedinUrl: "https://www.linkedin.com/in/abdeldjalil-medjahdi-8b48b73a0",
  tiktokUrl: "https://www.tiktok.com/@venom_dev",

  /**
   * AVAILABILITY STATUS CONFIGURATION
   * Set isAvailable to:
   * - true: displays "Available for Select Projects & Consulting"
   * - false: displays "Currently Focused on Ongoing Projects"
   */
  availability: {
    isAvailable: true,
    statusTextEn: "Available for Select Projects",
    statusTextAr: "متاح لمشاريع مختارة واستشارات",
    unavailableTextEn: "Engaged with Current Projects",
    unavailableTextAr: "منشغل حالياً بمشاريع قائمة",
  },

  seo: {
    title: "Abdeldjalil Medjahdi | VENOM DEV – Web Development & AI Automation",
    titleAr: "عبد الجليل مجاهدي | VENOM DEV – تطوير الويب والأتمتة بالذكاء الاصطناعي",
    description:
      "Discover VENOM DEV, the personal portfolio of Abdeldjalil Medjahdi, offering modern web development, AI automation, and intelligent digital solutions.",
    descriptionAr:
      "اكتشف منصة VENOM DEV، معرض الأعمال والعلامة الرقمية لعبد الجليل مجاهدي، لتقديم خدمات تطوير الويب الحديثة وحلول الأتمتة بالذكاء الاصطناعي.",
    keywords: [
      "VENOM DEV",
      "Abdeldjalil Medjahdi",
      "AI Automation",
      "Web Development",
      "Next.js Developer",
      "AI Solutions",
      "Digital Transformation",
      "Process Automation",
      "Algeria Developer",
    ],
  },
};
