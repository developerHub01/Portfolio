import { SkillInterface } from "@/types/skills.types";

export const SKILLS: Record<"primary" | "secondary", Array<SkillInterface>> = {
  primary: [
    {
      id: "javascript",
      label: "JavaScript",
    },
    {
      id: "typescript",
      label: "TypeScript",
    },
    {
      id: "redux-toolkit",
      label: "Redux Toolkit",
    },
    {
      id: "react",
      label: "React.js",
    },
    {
      id: "next",
      label: "Next.js",
    },
    {
      id: "shadcn",
      label: "Shadcn/ui",
    },
    {
      id: "electron",
      label: "Electron.js",
    },
    {
      id: "figma",
      label: "Figma",
    },
    {
      id: "node",
      label: "Node.js",
    },
    {
      id: "express",
      label: "Express.js",
    },
    {
      id: "sqlite",
      label: "SQLite",
    },
    {
      id: "mysql",
      label: "MySQL",
    },
    {
      id: "mongodb",
      label: "MongoDB",
    },
    {
      id: "drizzle",
      label: "Drizzle ORM",
    },
    {
      id: "mongoose",
      label: "Mongoose ORM",
    },
  ],
  secondary: [
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
    {
      id: "python",
      label: "Python",
    },
  ],
} as const;
