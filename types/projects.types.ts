export interface TechItemInterface {
  id: string;
  label: string;
}

export type ProjectLinkType = "github" | "external" | "video";

export type ProjectType =
  | "web"
  | "desktop"
  | "mobile"
  | "chrome extension"
  | "firefox extension"
  | "vscode extension";

export interface ProjectDataInterface {
  id: string;
  title: string;
  subtitle: string;
  year?: string;
  status?: "complete" | "ongoing" | "in-complete";
  version?: string;
  duration?: string;
  projectType?: ProjectType | Array<ProjectType>;
  description: string;
  images: Array<string>;
  features?: Array<string>;
  techStack: Array<TechItemInterface>;
  links: Array<{
    label: string;
    url: string;
    type: ProjectLinkType;
  }>;
}
