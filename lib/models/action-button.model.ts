import { DefaultColorPalette, VariantProp } from "@mui/joy/styles/types";
import * as React from "react";

export interface IActionButton {
  key: string;
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  text?: string;
  header?: string;
  hasBadge?: boolean;
  badgeNumber?: number;
  action: () => void;
  disabled?: boolean;
  hidden?: boolean;
  color?: DefaultColorPalette;
  variant?: VariantProp;
  flex?: number;
}
