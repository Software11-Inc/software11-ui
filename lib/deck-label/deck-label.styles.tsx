import { SxProps } from "@mui/joy/styles/types";

export const className = "deck-label";

export const deckLabelStyle = (color = "primary", size = "sm", order = 0, mt = 0, gap = 0, italic = false): SxProps => {
  const fontSizeMap = {
    xs: { title: "10px", description: "8px" },
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
      justifyContent: "center",

      [`& > .${className}__title`]: {
        fontWeight: "bold",
        color: `var(--joy-palette-${color}-500)`,
        fontSize: titleFontSize,
        fontStyle: italic ? "italic" : "normal",

        "& > .deck-required": {
          color: "var(--joy-palette-danger-500)",
          fontSize: "12px",
          marginLeft: "0.25rem",
        },
      },

      [`& > .${className}__title, & > .${className}__description`]: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",

        "&.deck-link span": {
          fontWeight: "bold",
          textDecoration: "underline dotted",
          textDecorationThickness: "2px",
          textUnderlineOffset: "3px",
          cursor: "pointer",

          "&:hover": {
            textDecoration: "underline 2px solid",
          },
        },
      },

      [`& > .${className}__description`]: {
        color: `${color}.700`,
        fontSize: descriptionFontSize,

        "&.deck-link span": {
          fontWeight: "inherit",
        },
      },
    },
  };
};

export const textStyle = (limit = 2, bold = false, lineHeight = "1.2"): SxProps => ({
  WebkitLineClamp: limit,
  fontWeight: bold ? "bold" : "normal",
  lineHeight,
});
