import { ColorPaletteProp } from "@mui/joy/styles";
import { SxProps, VariantProp } from "@mui/joy/styles/types";
import { getBackgroundColor } from "../accordion.style";

export const getInputFocusStyle = (
  color: ColorPaletteProp = "primary",
  variant: VariantProp = "solid",
  level: number = 0
): SxProps => {
  let innerColor = getBackgroundColor(level);
  let outerColor = "transparent";

  let colorPalette = "100";
  switch (variant) {
    case "outlined":
    case "solid":
    case "plain": {
      colorPalette = "500";
      break;
    }
    case "soft": {
      colorPalette = "100";
      break;
    }
  }

  outerColor = `var(--joy-palette-${color}-${colorPalette})`;

  return {
    "&:focus, &:focus-visible, &:focus-within": {
      boxShadow: `0 0 0 2px ${innerColor}, 0 0 0 4px ${outerColor}, 0 1px 2px 0 black`,
      borderColor: "transparent",
      outline: "none",
      ["&:before"]: { "--Input-focused": 0, boxShadow: "none" },
    },
  };
};
