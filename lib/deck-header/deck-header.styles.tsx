import { SxProps } from "@mui/joy/styles/types";

export const className = "deck-header";

export const headerStyle: SxProps = {
  [`&.${className}`]: {
    display: "flex",
    height: "var(--header-height)",
    p: "var(--spacing)",
    bgcolor: "background.surface",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 10,

    [`& .${className}-content`]: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      bgcolor: "background.body",
      borderRadius: "calc(var(--border-radius) / 0)",
      boxShadow: "var(--shadow)",
      overflow: "hidden",
      position: "relative",

      [`& .animation`]: {
        display: "inline-flex",
        mx: 1,
        transition: "all 0.3s ease-in-out",

        "&.visible": {
          opacity: 1,
        },

        "&.hidden": {
          opacity: 0,
          mx: 0,
        },
      },

      [`& .animation-navigation`]: {
        overflow: "hidden",
        ml: 0.5,
        "--navigation-width": "100vw",
        "&.visible": {
          width: "var(--navigation-width)",
        },
        "&.hidden": {
          width: "0",
        },
      },

      [`& .animation-profile`]: {
        flex: 1,
      },

      [`& .animation-actions`]: {
        ml: 0.5,
        "&.visible": {
          width: "3.5rem",
        },
        "&.hidden": {
          width: "0",
        },
      },
    },
  },
};
