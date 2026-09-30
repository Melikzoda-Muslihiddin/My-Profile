import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import { SiteProvider } from "@/lib/site-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://melikow.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muslihiddin Melikzoda — Fullstack Developer & Designer | melikow.dev",
    template: "%s | melikow.dev",
  },
  description:
    "Muslihiddin Melikzoda (melikow) — Fullstack Developer & Design Mentor from Dushanbe, Tajikistan. Next.js, React, TypeScript, C++, Prisma — and design in Photoshop, Illustrator, After Effects, Figma, Blender. Design mentor at Academy SoftClub. Creator of Tuyona.tj.",
  keywords: [
    "Muslihiddin Melikzoda", "melikow", "melikow.dev",
    "fullstack developer Tajikistan", "frontend developer Dushanbe",
    "Next.js developer", "React TypeScript developer", "C++ developer",
    "UI UX designer Tajikistan", "graphic designer Dushanbe",
    "Photoshop", "Illustrator", "CorelDRAW", "After Effects", "Figma", "Blender",
    "design mentor", "SoftClub", "Tuyona.tj",
    "веб-разработчик Душанбе", "дизайнер Таджикистан",
  ],
  authors: [{ name: "Muslihiddin Melikzoda", url: SITE_URL }],
  creator: "Muslihiddin Melikzoda",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  } as Metadata["robots"],
  openGraph: {
    type: "website",
    siteName: "melikow.dev",
    title: "Muslihiddin Melikzoda — Fullstack Developer & Designer",
    description:
      "Fullstack Developer & Design Mentor from Dushanbe, Tajikistan. Code with Next.js, React, TypeScript, C++ — and design in Photoshop, Illustrator, After Effects, Figma, Blender.",
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["ru_RU", "tg_TJ"],
    images: [{ url: "/photo_2026-03-24_09-43-39.jpg", width: 800, height: 800, alt: "Muslihiddin Melikzoda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muslihiddin Melikzoda — Fullstack Developer & Designer",
    description:
      "Fullstack Developer & Design Mentor from Dushanbe, Tajikistan. Code + Design under one roof.",
    images: ["/photo_2026-03-24_09-43-39.jpg"],
  },
  icons: { icon: "/photo_2026-03-24_09-43-39.jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muslihiddin Melikzoda",
  alternateName: "melikow",
  url: SITE_URL,
  image: `${SITE_URL}/photo_2026-03-24_09-43-39.jpg`,
  jobTitle: "Fullstack Developer & Design Mentor",
  email: "mailto:muslimmelikzoda@gmail.com",
  telephone: "+992003333991",
  worksFor: {
    "@type": "Organization",
    name: "Academy SoftClub",
    description: "Design mentor and frontend developer at Academy SoftClub, Dushanbe.",
  },
  address: { "@type": "PostalAddress", addressLocality: "Dushanbe", addressCountry: "TJ" },
  knowsAbout: [
    "Fullstack Development", "Frontend Development", "Next.js", "React",
    "TypeScript", "JavaScript", "C++", "Node.js", "Prisma", "PostgreSQL",
    "UI/UX Design", "Graphic Design", "Branding", "Photoshop", "Illustrator",
    "CorelDRAW", "Adobe After Effects", "Figma", "Blender", "Canva",
  ],
  sameAs: [
    "https://github.com/Melikzoda-Muslihiddin",
    "https://t.me/MuslihiddinMelikzoda",
    "https://instagram.com/mel1kow.l8",
    "https://wa.me/992003333991",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${syne.variable}`}>
      <body>
        <SiteProvider>{children}</SiteProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
