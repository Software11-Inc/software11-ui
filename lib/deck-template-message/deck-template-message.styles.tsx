import { typographyClasses } from "@mui/joy/Typography";
import { SxProps } from "@mui/joy/styles/types";

export const mainBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  borderRadius: "var(--border-radius)",
  position: "relative",
  gap: 1,
};

export const mainHeaderStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",

  [`& > .${typographyClasses.root}`]: {
    lineHeight: 1.2,
    fontWeight: "bold",
  },
};

export const mainContentStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  padding: 1,

  bgcolor: "background.body",
  boxShadow: "var(--shadow)",
  borderRadius: "var(--border-radius)",

  [`& > .${typographyClasses.root}`]: {
    fontSize: "12px",
    lineHeight: 1.5,
  },
};
