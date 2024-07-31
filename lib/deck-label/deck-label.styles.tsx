import { SxProps } from "@mui/joy/styles/types";

export const className = "deck-label";

export const deckLabelStyle = (color = "primary", size = "sm", order = 0, mt = 0, gap = 0.25): SxProps => {
  const fontSizeMap = {
    sm: { title: "12px", description: "9px" },
    md: { title: "14px", description: "10px" },
    lg: { title: "16px", description: "11px" },
  };

  const { title: titleFontSize, description: descriptionFontSize } =
    fontSizeMap[size as keyof typeof fontSizeMap] || fontSizeMap.sm;

  return {
    [`&.${className}`]: {
      display: "flex",
      flexDirection: "column",
      order,
      mt,
      gap,

      [`& > .${className}__title`]: {
        lineHeight: "1.2",
        fontWeight: "bold",
        color: `var(--joy-palette-${color}-500)`,
        fontSize: titleFontSize,

        "& > .deck-required": {
          color: "var(--joy-palette-danger-500)",
          fontSize: "12px",
          marginLeft: "0.25rem",
        },
      },

      [`& > .${className}__description`]: {
        lineHeight: "1.2",
        color: `${color}.700`,
        fontSize: descriptionFontSize,
      },

      [`& > .${className}__title, & > .${className}__description`]: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
      },
    },
  };
};

export const textStyle = (limit = 2, bold = false): SxProps => ({
  WebkitLineClamp: limit,
  fontWeight: bold ? "bold" : "normal",
});
