# VENOM DEV — Premium Personal Portfolio Website

![VENOM DEV Open Graph Preview](public/images/og-image.svg)

> **"BUILD. AUTOMATE. INNOVATE."**  
> Personal brand and high-performance digital portfolio platform for **Abdeldjalil Medjahdi** (`VENOM DEV`).  
> Specializing in **AI Automation**, **Web Development**, **AI Solutions**, and **Digital Solutions**.

---

## 🌟 Overview & Brand Identity

**VENOM DEV** is an ultra-premium, futuristic, minimalist portfolio website engineered with Next.js App Router, Tailwind CSS, Framer Motion, and advanced Liquid Glassmorphism.

### Key Highlights
- **Dominant Luxury Dark Aesthetic**: Deep Black (`#050505`) base with Electric Purple (`#9B7CFF`) and Neon Cyan (`#38CFFF`) ambient lighting.
- **Liquid Glass Design System**: Multi-layered backdrop blur, illuminated specular highlights, subtle 3D hover interactions, and ambient particle effects.
- **Bilingual English & Arabic**: Instant language switcher with complete Right-to-Left (RTL) layout adaptation and typography support.
- **Data-Driven Architecture**: Easily update projects, services, social links, and availability without touching the UI templates.
- **Secure Contact Form**: Next.js Server Route Handler (`/api/contact`) with full server-side validation and [Resend](https://resend.com) email delivery.
- **Production-Ready & Fully Optimized**: High Core Web Vitals score, Next.js Metadata API, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14 (App Router)** | Framework for React Server & Client Components, Route Handlers, SEO |
| **React 18 & TypeScript** | Component library, type safety, modular design patterns |
| **Tailwind CSS** | Custom styling, glassmorphism utilities, dark-surface palettes |
| **Framer Motion** | Silky 60fps entrance reveals, micro-interactions, layout transitions |
| **Lucide React** | Clean interface and status icons |
| **React Icons (`react-icons/fa6`)** | Official verified social media brand icons (GitHub, LinkedIn, Telegram, etc.) |
| **Resend API** | Reliable email dispatch for inbound contact inquiries |
| **Canvas Confetti** | Celebratory micro-interaction on verified form submission |

---

## 🎨 Color Palette & Design Tokens

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Deep Black** | `#050505` | Dominant website background |
| **Dark Surface** | `#111116` | Base glass container background |
| **Elevated Surface** | `#181822` | Highlighted glass surfaces & modals |
| **Electric Purple** | `#9B7CFF` | Primary accent, glow lighting, AI tags |
| **Neon Cyan** | `#38CFFF` | Secondary accent, interactive states, links |
| **Pure White** | `#FFFFFF` | Primary headings & high-contrast typography |
| **Secondary Gray** | `#A7A7B5` | Body copy, secondary metadata & labels |

---

## 📂 Project Directory Structure

```text
venom-dev/
├── public/
│   ├── images/
│   │   ├── projects/               # SVG previews for project gallery
│   │   │   ├── venom-portfolio.svg
│   │   │   ├── ai-automation.svg
│   │   │   ├── smart-crm.svg
│   │   │   └── modern-web.svg
│   │   └── og-image.svg            # Open Graph social sharing banner
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # Server-side contact form handler
│   │   ├── layout.tsx              # Root layout with fonts, metadata & providers
│   │   ├── page.tsx                # Single-page assembled sections
│   │   ├── globals.css             # Liquid glass utility classes & animations
│   │   ├── sitemap.ts              # Dynamic search engine sitemap
│   │   └── robots.ts               # Search engine crawler policies
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Floating sticky glass navbar with mobile drawer
│   │   │   └── Footer.tsx          # Minimal glass footer with back-to-top
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Fullscreen intro, availability badge & 3D avatar card
│   │   │   ├── AboutSection.tsx    # 2-column bio, photo placeholder & technical pillars
│   │   │   ├── ServicesSection.tsx # 4 core service cards with deliverables lists
│   │   │   ├── ProjectsSection.tsx # Data-driven gallery with category filter & disclosures
│   │   │   ├── SocialSection.tsx   # Official brand icons with copy-to-clipboard email
│   │   │   └── ContactSection.tsx  # Validated form with direct reach cards
│   │   └── ui/
│   │       ├── GlassCard.tsx       # Reusable liquid glass container
│   │       ├── GlassButton.tsx     # Multi-variant animated glass button
│   │       ├── BackgroundFX.tsx    # Ambient lights & subtle particle canvas
│   │       ├── SectionHeading.tsx  # Standardized animated section headers
│   │       ├── LanguageSwitcher.tsx# EN / AR spring animated pill toggle
│   │       └── AvailabilityBadge.tsx# Toggleable project availability indicator
│   ├── config/
│   │   └── site.ts                 # Site-wide settings, SEO & availability status
│   ├── context/
│   │   └── LanguageContext.tsx     # Reactive EN/AR state, translations & RTL control
│   ├── data/
│   │   ├── services.ts             # Services data (English & Arabic)
│   │   ├── projects.ts             # Featured projects data & metadata
│   │   └── social-links.ts         # Verified social links & contact details
│   ├── lib/
│   │   └── utils.ts                # Class merging utility (clsx + tailwind-merge)
│   └── types/
│       └── index.ts                # TypeScript interfaces and types
├── .env.example                    # Sample environment variables
├── package.json                    # Project dependencies and scripts
├── tailwind.config.ts              # Extended Tailwind configuration
├── tsconfig.json                   # TypeScript configuration with aliases
└── README.md                       # Complete documentation
```

---

## ⚡ Getting Started (Local Development)

### 1. Prerequisites
- Node.js `18.18+` or higher (tested with Node `25.x` and `20.x`)
- npm, pnpm, or yarn

### 2. Installation
Open your terminal in the `venom-dev` directory and run:

```bash
npm install
```

### 3. Environment Setup
Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
# Optional: Resend API key for sending emails from the contact form
# Get your free key at https://resend.com
RESEND_API_KEY=re_your_api_key_here

# Recipient email where client inquiries will be forwarded
CONTACT_RECEIVER_EMAIL=medjahdi.abdeldjalil08@gmail.com

# Verified sender address in Resend (default is onboarding@resend.dev)
CONTACT_SENDER_EMAIL=onboarding@resend.dev

# Production URL for Open Graph metadata
NEXT_PUBLIC_SITE_URL=https://venom-dev.vercel.app
```

> **Note on Contact Form**: If `RESEND_API_KEY` is not provided, the contact form will transparently inform the user in development mode without pretending the message was sent, preventing missed client leads.

### 4. Running the Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

### 5. Production Build & Start
```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

---

## 🌐 Customizing Content

All personal content is centralized in `src/data/` and `src/config/`:

### 1. Changing Availability Status
Edit `src/config/site.ts`:
```typescript
availability: {
  isAvailable: true, // Set to false when busy with client work
  statusTextEn: "Available for Select Projects",
  statusTextAr: "متاح لمشاريع مختارة واستشارات",
  ...
}
```

### 2. Adding or Editing Projects
Edit `src/data/projects.ts` to add your live projects, repository URLs, and preview images:
```typescript
{
  id: "my-new-project",
  title: "AI Automation Agent",
  titleAr: "وكيل أتمتة بالذكاء الاصطناعي",
  description: "...",
  category: "AI Automation",
  technologies: ["Next.js", "Python", "OpenAI"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/abdeldjallill/repo",
  image: "/images/projects/my-preview.png",
  isPlaceholder: false,
}
```

### 3. Social Media Links
Edit `src/data/social-links.ts` to update URLs or add your real Instagram profile:
```typescript
{
  id: "instagram",
  name: "Instagram",
  handle: "@your_handle",
  url: "https://instagram.com/your_handle",
  iconName: "instagram",
  isPlaceholder: false, // Change to false when provided
}
```

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete VENOM DEV portfolio website"
   git branch -M main
   git remote add origin https://github.com/abdeldjallill/venom-dev.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new).
   - Import your `venom-dev` GitHub repository.
   - Framework preset will automatically be recognized as **Next.js**.

3. **Configure Environment Variables in Vercel**:
   In the Vercel project settings, add:
   - `RESEND_API_KEY`: your API key from [resend.com](https://resend.com)
   - `CONTACT_RECEIVER_EMAIL`: `medjahdi.abdeldjalil08@gmail.com`
   - `NEXT_PUBLIC_SITE_URL`: `https://venom-dev.vercel.app` (or your custom domain)

4. **Deploy**:
   Click **Deploy**. Your portfolio will be live globally on Vercel's Edge Network with automatic SSL.

---

## 📄 License & Attribution

Designed and engineered for **Abdeldjalil Medjahdi** (`VENOM DEV`).  
All rights reserved © 2026.
