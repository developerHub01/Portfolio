export interface TechItemInterface {
  id: string;
  label: string;
}

export interface ProjectDataInterface {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  images: Array<string>;
  features: Array<string>;
  techStack: Array<TechItemInterface>;
  links: Array<{
    label: string;
    url: string;
    type: "github" | "external";
  }>;
}
