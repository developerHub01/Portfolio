import {
  ContactIcon,
  EducationIcon,
  HomeIcon,
  ProjectIcon,
  SkillsIcon,
  UserIcon,
} from "@/components/icons";

export const SIDEBAR_MENU_LIST = [
  {
    id: "home",
    title: "Home",
    url: "/",
    Icon: HomeIcon,
  },
  {
    id: "about",
    title: "About",
    url: "/about",
    Icon: UserIcon,
  },
  {
    id: "education",
    title: "Education",
    url: "/education",
    Icon: EducationIcon,
  },
  {
    id: "skills",
    title: "Skills",
    url: "/skills",
    Icon: SkillsIcon,
  },
  {
    id: "projects",
    title: "Projects",
    url: "/projects",
    Icon: ProjectIcon,
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
    Icon: ContactIcon,
  },
] as const;

export const RESUME_HREF = "/resume/abdus-shohid-shakil-resume.pdf";
