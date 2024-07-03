import { ColorPaletteProp } from "@mui/joy/styles";
import { DefaultVariantProp } from "@mui/joy/styles/types";

// Define the props for the ActionButton component
export interface IDeckTextButtonProps {
  icon: React.ReactElement;
  text?: string;
  action: () => void;
  disabled?: boolean;
  color?: ColorPaletteProp;
  variant?: DefaultVariantProp;
  active?: boolean;
  hasShadow?: boolean;
}
