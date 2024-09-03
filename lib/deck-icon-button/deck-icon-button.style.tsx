import { svgIconClasses } from "@mui/joy/SvgIcon";
import { SxProps } from "@mui/joy/styles/types";

export const className = "small-icon-button";

export const iconButtonStyle = (rounded = false, size = "sm", hidden = false): SxProps => ({
  fontSize: "12px",
  lineHeight: "14px",
  padding: "0.25rem ",
  minHeight: "unset",
  minWidth: "unset",
  borderRadius: rounded ? "50%" : "var(--border-radius)",
  opacity: hidden ? "0" : "1",
  transition: "opacity 0.2s ease-in-out",

  [`&.${className} > .${svgIconClasses.root}`]: {
    fontSize: size === "sm" ? "16px" : size === "md" ? "20px" : "24px",
    transition: "transform 0.2s ease-in-out",
  },

  ["&:not(:disabled):hover"]: {
    [`&.${className} > .${svgIconClasses.root}`]: {
      transform: "scale(1.3)",
    },
  },
});
