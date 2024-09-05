import { INavItem } from "@models";

export interface IDeckFooterNavigationProps {
  activeIndex: number;
  items: INavItem[];
  onTabChange?: (index: number) => void;
  className?: string;
}
