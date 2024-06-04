import { SxProps } from "@mui/joy/styles/types";

export const userProfileStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,

  position: "relative",
};

export const userDataStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  position: "absolute",
  left: "calc(1.25rem + 0.5rem)",

  transition: "opacity 0.3s",
  transitionDelay: "0.15s",

  "&.visible": {
    opacity: 1,
  },

  "&.hidden": {
    opacity: 0,
  },
};
