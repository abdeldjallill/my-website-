import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "venom-dev-portfolio",
    title: "VENOM DEV Digital Portfolio",
    titleAr: "موقع معمارية VENOM DEV الرقمي",
    description:
      "A luxury futuristic personal brand platform built with Next.js App Router, Tailwind CSS, Liquid Glassmorphism, and bilingual English/Arabic localization.",
    descriptionAr:
      "منصة العلامة الشخصية الرقمية المبنية بأحدث تقنيات Next.js App Router وTailwind CSS وتأثيرات Liquid Glass مع دعم ثنائي كامل للغتين العربية والإنجليزية.",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Liquid Glass"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdeldjallill",
    image: "/images/projects/venom-portfolio.svg",
    isFeatured: true,
    isPlaceholder: false,
  },
  {
    id: "ai-workflow-automation",
    title: "AI Business Automation Pipeline",
    titleAr: "نظام أتمتة تدفقات العمل بالذكاء الاصطناعي",
    description:
      "An intelligent workflow automation architecture linking webhooks, LLM agents, and database operations to eliminate repetitive administrative tasks.",
    descriptionAr:
      "هندسة مسارات عمل ذكية تربط تقنيات الـ Webhooks مع نماذج الذكاء الاصطناعي وقواعد البيانات لأتمتة المهام الإدارية المعقدة وتوفير الوقت.",
    category: "AI Automation",
    categoryAr: "الأتمتة بالذكاء الاصطناعي",
    technologies: ["AI Automation", "Python", "REST APIs", "Workflow Pipelines", "LLMs"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdeldjallill",
    image: "/images/projects/ai-automation.svg",
    isFeatured: true,
    isPlaceholder: true,
    placeholderNotice: "Concept Showcase — Architecture & Implementation Pipeline",
    placeholderNoticeAr: "مشروع استعراضي — هيكلية وتدفق تنفيذي للأتمتة",
  },
  {
    id: "smart-crm-lead-intake",
    title: "Smart Lead Intake & AI Response Engine",
    titleAr: "نظام استقطاب العملاء والرد الآلي الذكي",
    description:
      "Automated lead capture system that parses inbound client requests, categorizes urgency with AI, and notifies via Telegram while drafting tailored responses.",
    descriptionAr:
      "نظام تلقائي لاستقبال طلبات العملاء وتحليلها فورياً باستخدام الذكاء الاصطناعي وإرسال تنبيهات لحظية عبر تيليجرام مع مسودة رد مخصصة.",
    category: "AI Solutions",
    categoryAr: "حلول الذكاء الاصطناعي",
    technologies: ["TypeScript", "Next.js Route Handlers", "Telegram Bot API", "AI Parsing"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdeldjallill",
    image: "/images/projects/smart-crm.svg",
    isFeatured: true,
    isPlaceholder: true,
    placeholderNotice: "Functional Prototype & Architecture Pattern",
    placeholderNoticeAr: "نموذج أولي عملي ونمط معماري للحلول",
  },
  {
    id: "modern-saas-web-experience",
    title: "High-Performance Modern Web Platform",
    titleAr: "منصة ويب عصرية عالية السرعة والأداء",
    description:
      "Responsive, SEO-optimized digital web application with dark-mode glassmorphism, instant page loads, and accessible interface design.",
    descriptionAr:
      "تطبيق ويب رقمي متجاوب وسريع ومحسن بالكامل لمحركات البحث مع واجهات Glassmorphism أنيقة وتجربة مستخدم تفاعلية وسلسة.",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO Architecture", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdeldjallill",
    image: "/images/projects/modern-web.svg",
    isFeatured: false,
    isPlaceholder: true,
    placeholderNotice: "Design Concept & Frontend Engineering Prototype",
    placeholderNoticeAr: "نموذج تصميمي وهندسة واجهات أمامية",
  },
];
