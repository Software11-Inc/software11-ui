import { ColorPaletteProp } from "@mui/joy/styles";
import { DefaultVariantProp } from "@mui/joy/styles/types";

// Define the props for the ActionButton component
export interface IDeckTextButtonProps {
  icon?: React.ReactElement;
  endIcon?: React.ReactElement;
  text?: string;
  textAlign?: "flex-start" | "flex-end" | "center";
  action: () => void;
  disabled?: boolean;
  color?: ColorPaletteProp;
  variant?: DefaultVariantProp;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  hasShadow?: boolean;
  fullWidth?: boolean;
  uppercase?: boolean;
}
