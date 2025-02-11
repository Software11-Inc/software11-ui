import { SxProps } from "@mui/joy/styles/types";

export const slideItemStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
  boxShadow: "var(--shadow)",
  position: "relative",

  "&:hover": {
    boxShadow: "var(--focus-shadow)",
  },
};

export const slideItemImageStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  aspectRatio: "16/9",
  overflow: "hidden",
  bgcolor: "background.surface",
  borderBottom: "1px solid",
  borderColor: "divider",
  position: "relative",

  "&.deck-disabled": {
    cursor: "progress",
  },

  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",

    "&:empty": {
      display: "flex",
      height: "100%",
      color: "transparent",

      "&::before": {
        content: "'No Preview'",
        display: "flex",
        color: "text.secondary",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "10px",
      },
    },
  },

  "& > .deck-insert-button": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "none",
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
    background: "rgba(0,0,0,0.5)",
    transition: "0.3s ease-in-out",
    cursor: "pointer",

    "& > .deck-insert-button-text": {
      color: "white",
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },

  "&:not(.deck-disabled):hover": {
    "& > .deck-insert-button": {
      display: "flex",
    },
  },
};

export const slideItemOverlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  background: "linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 75%)",
  padding: 1,
  flexDirection: "column",
  transform: "translateY(100%)",
  transition: "0.3s ease-in-out",

  "&.deck-error": {
    transform: "translateY(0)",
  },
};

export const slideItemContentStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  padding: 1,
  gap: 1,
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
};

export const slideItemButtonStyle: SxProps = {
  // padding: "0.25rem 0.5rem",
  minHeight: "unset",
  fontSize: "11px",
  borderRadius: "calc(var(--border-radius) / 2)",
  textTransform: "uppercase",
};
