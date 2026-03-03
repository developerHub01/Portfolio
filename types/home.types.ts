import { ComponentType } from "react";
import { IconProps } from "@/components/icons";

export interface PersonalInfoInterface {
  label: string;
  value: string;
}

export interface SocialItemInterface {
  id: string;
  Icon: ComponentType<IconProps>;
  href: string;
}
