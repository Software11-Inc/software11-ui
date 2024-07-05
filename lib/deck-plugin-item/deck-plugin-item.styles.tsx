import { SxProps } from "@mui/joy/styles/types";

export const pluginItemStyles: SxProps = {
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
  backgroundColor: "var(--joy-palette-background-body)",
  borderRadius: "var(--border-radius)",
  boxShadow: "var(--shadow)",
  overflow: "hidden",
  position: "relative",
  transition: "box-shadow 0.3s ease 0s",
};

export const pluginItemImageStyles: SxProps = {
  padding: 1,
  backgroundColor: "var(--joy-palette-background-surface)",
  borderRightWidth: "1px",
  borderRightStyle: "solid",
  borderColor: "var(--joy-palette-divider)",
  overflow: "hidden",
  cursor: "pointer",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.3s ease 0s",
  },
};

export const pluginItemContentStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  padding: 1,
};

export const pluginItemTagStyles: SxProps = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
};

export const pluginItemTagContentStyles: SxProps = {
  padding: "0.2rem 0.3rem",
  backgroundColor: "var(--joy-palette-warning-50)",
  borderRadius: "calc(var(--border-radius) / 2)",
  display: "flex",
  alignItems: "center",
  flexGrow: 0,
};

export const pluginItemTagTextStyles: SxProps = {
  fontSize: "10px",
  color: "var(--joy-palette-warning-500)",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "bold",
};

export const nameStyle: SxProps = {
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "1.2",
  color: "primary.500",
  cursor: "pointer",
  textDecoration: "underline",
  textUnderlineOffset: 0,
  textDecorationColor: "transparent",
  transition: " 0.3s",
  textDecorationThickness: "2px",

  "&:hover": {
    textUnderlineOffset: "2px",
    textDecorationColor: "var(--joy-palette-background-level1)",
  },
};

export const descriptionStyle: SxProps = {
  fontSize: "10px",
  lineHeight: "1.2",
  color: "text.secondary",
  flex: 1,
};
