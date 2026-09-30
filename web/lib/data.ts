/* ============================================================
   Static portfolio data — projects, stack, design tools/works
   ============================================================ */

export type ProjectCategory = "fullstack" | "frontend";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  link: string;
  cta?: string;
}

export const projects: Project[] = [
  {
    title: "Tuyona.tj",
    description:
      "My flagship — a production wedding marketplace for Tajikistan (venues, photographers, decorators). Next.js 16 App Router, TypeScript, Prisma + PostgreSQL, NextAuth, Tailwind, maps, image uploads, multi-language, deployed on Vercel.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    category: "fullstack",
    link: "https://tuyona.tj",
    cta: "open live site",
  },
  {
    title: "CRM Dashboard",
    description:
      "A CRM admin dashboard built with Next.js and TypeScript — data tables, auth, and a clean, responsive management UI.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "Dashboard"],
    category: "fullstack",
    link: "https://github.com/Melikzoda-Muslihiddin/CRM-system",
  },
  {
    title: "Fast-Cart",
    description:
      "My first big React e-commerce project — product catalog, cart logic, state management and a polished shopping UI.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "E-commerce"],
    category: "frontend",
    link: "https://github.com/Melikzoda-Muslihiddin/Fast-Cart",
  },
  {
    title: "AI-Job",
    description:
      "An AI-powered job platform interface built in React + TypeScript with API integration and a modern, responsive layout.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Axios", "AI"],
    category: "frontend",
    link: "https://github.com/Melikzoda-Muslihiddin/Ai-Job",
  },
  {
    title: "Instagram Prototype",
    description:
      "A social-feed prototype built with Next.js and TypeScript — feed, posts and an Instagram-style responsive interface.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "UI"],
    category: "frontend",
    link: "https://github.com/Melikzoda-Muslihiddin/Istagram-prototype",
  },
];

export const techStack: string[] = [
  "Next.js", "React", "TypeScript", "JavaScript", "C++", "Node.js", "Prisma",
  "PostgreSQL", "NextAuth", "Tailwind CSS", "Redux", "Zustand", "shadcn/ui",
  "REST API", "Git", "Vercel",
];

export interface DesignTool {
  name: string;
  tag: string;
  level: number;
  use: string;
}

export const designTools: DesignTool[] = [
  { name: "Photoshop", tag: "Ps", level: 95, use: "photo · retouch · composites" },
  { name: "Illustrator", tag: "Ai", level: 90, use: "logos · vector · icons" },
  { name: "CorelDRAW", tag: "Cdr", level: 92, use: "print · layout · vector" },
  { name: "After Effects", tag: "Ae", level: 80, use: "motion · animation" },
  { name: "Figma", tag: "Fig", level: 90, use: "ui/ux · prototypes" },
  { name: "Blender", tag: "Bl", level: 70, use: "3d · modeling · render" },
  { name: "Canva", tag: "Cv", level: 95, use: "fast social · templates" },
  { name: "Office Suite", tag: "Off", level: 90, use: "docs · slides · sheets" },
];

export interface DesignWork {
  title: string;
  tag: string;
  image: string;
}

export const designWorks: DesignWork[] = [
  {
    title: "SoftClub — Brand Identity",
    tag: "Branding",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Print & Business Cards",
    tag: "Print",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Poster & Visual Series",
    tag: "Graphic",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "UI / UX Concepts",
    tag: "Figma",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "3D & Motion",
    tag: "Blender · Ae",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Logo Marks",
    tag: "Identity",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
  },
];

export const contacts = {
  email: "muslimmelikzoda@gmail.com",
  telegram: { handle: "@MuslihiddinMelikzoda", url: "https://t.me/MuslihiddinMelikzoda" },
  whatsapp: { display: "+992 00 3333 991", url: "https://wa.me/992003333991" },
  instagram: { handle: "@mel1kow.l8", url: "https://instagram.com/mel1kow.l8" },
  github: "https://github.com/Melikzoda-Muslihiddin",
};
