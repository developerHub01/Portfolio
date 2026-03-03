import { ComponentProps } from "react";
import { Icon } from "@/components/icons/Icon";

export interface ContactMethodInterface {
  id: string;
  label: string;
  value: string;
  href: string;
  Icon: (props: ComponentProps<typeof Icon>) => React.JSX.Element;
  external: boolean;
}
