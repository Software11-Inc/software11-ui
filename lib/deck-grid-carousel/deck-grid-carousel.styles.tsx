import { SxProps } from "@mui/joy/styles/types";

export const containerStyle = {
  position: "relative",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "16px",

  [` .deck-grid-carousel--header`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [` .deck-grid-carousel--title`]: {
      display: "flex",
      alignItems: "center",
    },
  },

  [` .deck-grid-carousel--controls`]: {
    display: "flex",
    gap: "8px",
  },
};

export const gridStyle = (chunks: number, itemWidth: number, index: number, spacing: number): SxProps => ({
  display: "block",

  "--data-chunks": chunks,
  "--data-item-width": `${itemWidth}px`,
  "--spacing": `${spacing}px`,

  width: "calc(var(--data-item-width) * var(--data-chunks) + var(--spacing) * (var(--data-chunks) - 1))",
  transform: `translateX(calc(var(--data-item-width) * -${index} - var(--spacing) * ${index}))`,
  transition: "transform 0.3s ease",

  [` .deck-grid-carousel--column`]: {
    width: "attr(data-width px)",
    float: "left",
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacing)",
    transition: "0.3s ease",

    "&.hidden": {
      opacity: 0,
      transform: "scale(0.3)",
    },

    [` .deck-grid-carousel--item`]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },

  [` .deck-grid-carousel--column:not(:first-of-type)`]: {
    marginLeft: "var(--spacing)",
  },
});
