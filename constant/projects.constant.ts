import { ProjectDataInterface } from "@/types/projects.types";

export const PROJECTS: Array<ProjectDataInterface> = [
  {
    id: "apibolt",
    title: "APIBolt",
    subtitle: "Desktop REST API Client",
    year: "2025 — Present",
    description:
      "A full-featured desktop API client built from scratch with project-based request management. Designed as a developer-first tool with deep customization for Web & Desktop.",
    images: Array.from(
      { length: 1 },
      (_, index) => `/projects/api-bolt/${index + 1}.png`,
    ),
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
        url: "https://www.youtube.com/embed/u2t3AvMtXXI",
        type: "video",
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
    images: Array.from(
      { length: 6 },
      (_, index) => `/projects/api-bolt-web/${index + 1}.png`,
    ),
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
  {
    id: "cf-dark",
    title: "CF Dark",
    subtitle: "Codeforces Dark Theme Extension",
    year: "2023",
    description:
      "A Chrome extension that applies a dark theme to Codeforces, reducing eye strain during long coding sessions. Features 10 distinct themes inspired by popular VS Code color palettes.",
    images: Array.from(
      { length: 11 },
      (_, index) => `/projects/cf-dark/${index + 1}.png`,
    ),
    features: [
      "Persistent theme settings",
      "Eye-friendly dark themes to reduce strain",
      "10 distinct themes including a default dark mode",
      "Themes inspired by popular VS Code color palettes",
      "Lightweight and performant extension",
    ],
    techStack: [
      {
        id: "html",
        label: "HTML",
      },
      {
        id: "css",
        label: "CSS",
      },
      {
        id: "javascript",
        label: "JavaScript",
      },
      {
        id: "chrome",
        label: "Chrome",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/developerHub01/CF_Dark",
        type: "github",
      },
    ],
  },
  {
    id: "schedular-2.o",
    title: "Scheduler 2.0",
    subtitle: "Task Scheduling Chrome Extension",
    year: "2023",
    description:
      "A versatile Chrome extension for scheduling reminders. Supports one-time, daily, and weekly recurring schedules. Ideal for students and professionals to manage tasks and get timely notifications.",
    images: Array.from(
      { length: 13 },
      (_, index) => `/projects/schedular-2-o/${index + 1}.png`,
    ),
    features: [
      "Three flexible schedule types: One-time, Regular (Daily), and Frequent (Weekly)",
      "One-time Schedule: Perfect for single events or meetings",
      "Regular Schedule: Daily recurring reminders at a set time",
      "Frequent Schedule: Custom weekly patterns (e.g., specific days and times)",
      "Task Management: Create, update, and delete tasks with title and description",
      "Global 'Clear Task' feature to remove all scheduled items",
      "Interactive dashboard with task previews and hover details",
      "Popup notifications for scheduled tasks",
    ],
    techStack: [
      {
        id: "html",
        label: "HTML",
      },
      {
        id: "css",
        label: "CSS",
      },
      {
        id: "javascript",
        label: "JavaScript",
      },
      {
        id: "chrome",
        label: "Chrome",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/developerHub01/Schedular-2.o",
        type: "github",
      },
    ],
  },
] as const;
