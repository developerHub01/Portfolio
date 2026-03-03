import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
} from "@/components/icons";
import { ContactMethodInterface } from "@/types/contact.types";

export const CONTACT_METHODS: Array<ContactMethodInterface> = [
  {
    id: "email",
    label: "Email",
    value: "shakil102043@gmail.com",
    href: "mailto:shakil102043@gmail.com",
    Icon: EnvelopeIcon,
    external: false,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+880 1703374162",
    href: "tel:+8801703374162",
    Icon: PhoneIcon,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/abdus-shohid-shakil-870959387",
    href: "https://www.linkedin.com/in/abdus-shohid-shakil-870959387/",
    Icon: LinkedinIcon,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/developerHub01",
    href: "https://github.com/developerHub01",
    Icon: GithubIcon,
    external: true,
  },
];
