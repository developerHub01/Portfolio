import { ProjectDataInterface } from "@/types/projects.types";

export const PROJECTS: Array<ProjectDataInterface> = [
  {
    id: "apibolt",
    title: "APIBolt",
    subtitle: "Desktop REST API Client",
    year: "2025 — Present",
    description:
      "A full-featured desktop API client built from scratch with project-based request management. Designed as a developer-first tool with deep customization for Web & Desktop.",
  images: Array.from({length: 1}, (_, index)=> `/projects/api-bolt/${index+1}.png`),
    features: [
      "Project-based request management",
      "Auth systems (API Key, Bearer Token) with inheritance",
      "Environment variables & cookie management",
      "Response viewer with multiple formats",
      "Theme builder & customizable workspace layout",
      "Local security with password hashing",
      "Auto code generation for multiple languages",
    ],
    techStack: [
      {
        id: "typescript",
        label: "TypeScript",
      },
      {
        id: "electron",
        label: "Electron.js",
      },
      {
        id: "react",
        label: "React.js",
      },
      {
        id: "tailwind",
        label: "TailwindCSS",
      },
      {
        id: "motion",
        label: "Framer motion",
      },
      {
        id: "shadcn",
        label: "ShadCN",
      },
      {
        id: "redux-toolkit",
        label: "Redux Toolkit",
      },
      {
        id: "sqlite",
        label: "SQLite",
      },
      {
        id: "drizzle",
        label: "DrizzleORM",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/developerHub01/ApiBolt",
        type: "github",
      },
      {
        label: "Video Demo",
        url: "https://youtu.be/u2t3AvMtXXI?si=WD3oeDaWIJ4uEpTB",
        type: "external",
      },
    ],
  },
  {
    id: "apibolt-market",
    title: "APIBolt Market",
    subtitle: "Theme Marketplace Platform",
    year: "2022 — Present",
    description:
      "Official marketplace for APIBolt. Developers can publish and share themes with one-click installation inside the desktop app. Fullstack implementation.",
    images: Array.from({length: 6}, (_, index)=> `/projects/api-bolt-web/${index+1}.png`),
    features: [
      "Full theme marketplace with auth & publishing",
      "Theme management & app integration",
      "One-click theme installation inside the app",
      "130+ community-created themes hosted",
      "100 Performance & 100 SEO scores",
    ],
    techStack: [
      {
        id: "typescript",
        label: "TypeScript",
      },    
      {
        id: "tailwind",
        label: "TailwindCSS",
      },
      {
        id: "gsap",
        label: "GSAP",
      },
      {
        id: "shadcn",
        label: "ShadCN",
      },
      {
        id: "vue",
        label: "Vue.js",
      },
      {
        id: "nuxt",
        label: "Nuxt.js",
      },
      {
        id: "supabase",
        label: "Supabase",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/developerHub01/ApiBolt-web",
        type: "github",
      },
      {
        label: "Live Preview",
        url: "https://apibolt.vercel.app/",
        type: "external",
      },
    ],
  },
] as const;
