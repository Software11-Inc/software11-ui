import { ColorPaletteProp, DefaultVariantProp } from "@mui/joy/styles/types";

export interface IDeckSelectTagsProps {
  tags: string[];
  size?: "sm" | "md" | "lg";
  onChange: (tags: string[]) => void;
  title?: string;
  description?: string;
  placeholder?: string;
  color?: ColorPaletteProp;
  variant?: DefaultVariantProp;
  disabled?: boolean;
}

export interface IDeckSelectTagsState {
  inputTag: string;
}
