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
  img: {
    width: "100%",
    height: "auto",
    borderRadius: "var(--border-radius)",
    objectFit: "cover",
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
  padding: "0.25rem 0.5rem",
  minHeight: "unset",
  fontSize: "11px",
  borderRadius: "calc(var(--border-radius) / 2)",
  textTransform: "uppercase",
};
