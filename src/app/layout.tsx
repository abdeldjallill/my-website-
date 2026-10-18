import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BackgroundFX } from "@/ui/BackgroundFX";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://venom-dev.vercel.app"
  ),
  title: {
    default: "Abdeldjalil Medjahdi | VENOM DEV – Web Development & AI Automation",
    template: "%s | VENOM DEV",
  },
  description:
    "Discover VENOM DEV, the personal portfolio of Abdeldjalil Medjahdi, offering modern web development, AI automation, and intelligent digital solutions.",
  keywords: [
    "Abdeldjalil Medjahdi",
    "VENOM DEV",
    "AI Automation",
    "Web Development",
    "Next.js Developer",
    "AI Solutions",
    "Digital Transformation",
    "Frontend Architect",
    "Workflow Automation",
    "Algeria",
  ],
  authors: [{ name: "Abdeldjalil Medjahdi" }],
  creator: "Abdeldjalil Medjahdi",
  publisher: "VENOM DEV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_DZ", "ar_SA"],
    url: "https://venom-dev.vercel.app",
    siteName: "VENOM DEV",
    title: "Abdeldjalil Medjahdi | VENOM DEV – Web Development & AI Automation",
    description:
      "Discover VENOM DEV, the personal portfolio of Abdeldjalil Medjahdi, offering modern web development, AI automation, and intelligent digital solutions.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "VENOM DEV – Abdeldjalil Medjahdi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdeldjalil Medjahdi | VENOM DEV",
    description:
      "Web Developer & AI Automation Specialist. Modern digital experiences and intelligent workflows.",
    creator: "@venom_dev",
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="bg-brand-black text-white antialiased font-sans selection:bg-brand-purple/30 selection:text-white min-h-screen flex flex-col justify-between overflow-x-hidden">
        <LanguageProvider>
          {/* Animated Liquid Glass Background */}
          <BackgroundFX />

          {/* Floating Sticky Glass Navbar */}
          <Navbar />

          {/* Main Application Sections */}
          <main className="flex-grow relative z-10">{children}</main>

          {/* Futuristic Glass Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
