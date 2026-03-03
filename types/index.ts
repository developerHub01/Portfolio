import { Icon } from "@/components/icons/Icon";

export type IconType = typeof Icon;

export interface SidebarMenuItemInterface {
  id: string;
  title: string;
  url: string;
  Icon: IconType;
}
