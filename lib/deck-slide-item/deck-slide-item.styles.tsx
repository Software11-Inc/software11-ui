import { SxProps } from "@mui/joy/styles/types";

export const slideItemStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
  boxShadow: "var(--shadow)",
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
};

export const slideItemButtonStyle: SxProps = {
  // padding: "0.25rem 0.5rem",
  minHeight: "unset",
  fontSize: "11px",
  borderRadius: "calc(var(--border-radius) / 2)",
  textTransform: "uppercase",
};
