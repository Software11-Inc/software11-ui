import { ColorPaletteProp, SxProps } from "@mui/joy/styles/types";
import { Size } from "../models/common.model";

export const boxStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const avatarStyle: SxProps = {
  width: "1rem",
  height: "1rem",
  boxShadow: "unset",
};

const sizeMap: Record<Size, string> = {
  sm: "11px",
  md: "12px",
  lg: "14px",
};

export const typographyStyle = (size: Size = "md", color: ColorPaletteProp = "primary"): SxProps => ({
  fontSize: sizeMap[size],
  lineHeight: sizeMap[size],
  color: `var(--joy-palette-${color}-500)`,
  fontWeight: "bold",
});
