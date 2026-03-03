import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  YouTubeIcon,
} from "@/components/icons";
import { PersonalInfoInterface, SocialItemInterface } from "@/types/home.types";

export const PERSONAL_INFO: Array<PersonalInfoInterface> = [
  {
    label: "Name",
    value: "Abdus Shohid Shakil",
  },
  {
    label: "Role",
    value: "Software Developer",
  },
  {
    label: "Stack",
    value: "Fullstack JavaScript",
  },
  {
    label: "Focus",
    value: "Frontend",
  },
  {
    label: "Scope",
    value: "Web & Desktop",
  },
  {
    label: "Email",
    value: "shakil102043@gmail.com",
  },
  {
    label: "Phone",
    value: "+880 1703374162",
  },
  {
    label: "Location",
    value: "Bangladesh",
  },
];

export const SOCIALS: Array<SocialItemInterface> = [
  {
    id: "github",
    Icon: GithubIcon,
    href: "https://github.com/developerHub01",
  },
  {
    id: "linkedin",
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/abdus-shohid-shakil-870959387/",
  },
  {
    id: "youtube",
    Icon: YouTubeIcon,
    href: "https://www.youtube.com/@DeveloperHub1",
  },
  {
    id: "email",
    Icon: EnvelopeIcon,
    href: "mailto:shakil102043@gmail.com",
  },
  {
    id: "phone",
    Icon: PhoneIcon,
    href: "tel:+8801703374162",
  },
] as const;
