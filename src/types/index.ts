export type Language = "en" | "ar";

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
  placeholderNotice?: string;
  placeholderNoticeAr?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  detailedDescription: string;
  detailedDescriptionAr: string;
  servicesIncluded: string[];
  servicesIncludedAr: string[];
  iconName: "Cpu" | "Code" | "Sparkles" | "Layers";
}

export interface SocialLink {
  id: string;
  name: string;
  nameAr: string;
  handle: string;
  url: string;
  iconName: "github" | "linkedin" | "tiktok" | "telegram" | "instagram" | "email";
  isPlaceholder?: boolean;
  placeholderNotice?: string;
  placeholderNoticeAr?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  configured?: boolean;
}
