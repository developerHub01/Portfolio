import { ComponentType } from "react";
import { IconProps } from "@/components/icons";

export interface SidebarMenuItemInterface {
  id: string;
  title: string;
  url: string;
  Icon: ComponentType<IconProps>;
}
