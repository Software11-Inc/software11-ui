import { SxProps } from "@mui/joy/styles/types";

export const mainBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  boxShadow: "var(--shadow)",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
};

export const imageStyle: SxProps = {
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

export const contentStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "auto 1.5rem",
  flex: 1,
  alignItems: "center",
  padding: 1,
};
