import { svgIconClasses } from "@mui/joy/SvgIcon";
import { ColorPaletteProp, SxProps } from "@mui/joy/styles/types";

export const className = "small-icon-button";

export const iconButtonStyle = (
  rounded = false,
  size = "sm",
  hidden = false,
  hasLabel = false,
  color: ColorPaletteProp
): SxProps => ({
  fontSize: "12px",
  lineHeight: "14px",
  padding: "0.25rem ",
  minHeight: "unset",
  minWidth: "unset",
  borderRadius: rounded ? "1rem" : "var(--border-radius)",
  opacity: hidden ? "0" : "1",
  transition: "opacity 0.2s ease-in-out",
  alignItems: "center",

  [`&.${className} > .${svgIconClasses.root}`]: {
    fontSize: size === "xs" ? "12px" : size === "sm" ? "16px" : size === "md" ? "20px" : "24px",
    transition: "transform 0.2s ease-in-out",
  },

  ["&:not(:disabled):hover"]: {
    [`&.${className} > .${svgIconClasses.root}`]: {
      transform: "scale(1.25)",
      backgroundColor: hasLabel ? `var(--joy-palette-${color}-500)` : "transparent",
      color: hasLabel ? "var(--joy-palette-background-body)" : "inherit",
      borderRadius: rounded ? "1rem" : "var(--border-radius)",
    },
  },

  ["& > .deck-label"]: {
    fontSize: "12px",
    lineHeight: "1.2",
    textTransform: "uppercase",
    mx: "0.25rem",
  },
});
