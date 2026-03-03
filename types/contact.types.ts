import { ComponentType } from "react";
import { IconProps } from "@/components/icons";

export interface ContactMethodInterface {
  id: string;
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<IconProps>;
  external: boolean;
}
