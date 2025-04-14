import { ColorPaletteProp, SxProps } from "@mui/joy/styles/types";

export const inputFocusStyle: SxProps = {
  "&:focus, &:focus-visible, &:focus-within": {
    boxShadow:
      "0 0 0 2px var(--joy-palette-background-surface), 0 0 0 4px var(--joy-palette-primary-100), 0 1px 2px 0 black",
    borderColor: "transparent",
    outline: "none",

    ["&:before"]: { "--Input-focused": 0 },
  },
};

const fontSizeMap = {
  xs: 9,
  sm: 10,
  md: 12,
  lg: 14,
};

export const inputThemedFocusStyle = (size: "xs" | "sm" | "md" | "lg" = "md", color: ColorPaletteProp) => ({
  fontSize: fontSizeMap[size],
  "&:focus, &:focus-visible, &:focus-within": {
    boxShadow:
      "0 0 0 2px var(--joy-palette-background-surface), 0 0 0 4px var(--joy-palette-" +
      color +
      "-100), 0 1px 2px 0 black",
    borderColor: "transparent",
    outline: "none",

    ["&:before"]: { "--Input-focused": 0 },
  },
});
