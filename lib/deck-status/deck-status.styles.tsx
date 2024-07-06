import { SxProps } from "@mui/joy/styles/types";
import { Status } from "./deck-status.types";

export const statusClassNameMap = {
  [Status.WAITING]: {
    state: "waiting",
    color: "#757575",
  },
  [Status.SUCCESS]: {
    state: "success",
    color: "#43a047",
  },
  [Status.WARNING]: {
    state: "warning",
    color: "#ffb300",
  },
  [Status.ERROR]: {
    state: "error",
    color: "#e53935",
  },
  [Status.PROCESSING]: {
    state: "processing",
    color: "#00bcd4",
  },
};

const generateStateStyles = (state: string, color: string): SxProps => ({
  [`& .${state}`]: {
    bgcolor: color,
    boxShadow: `0px 0px 1px 1px ${color}`,
  },
  [`& .${state}.pulse`]: {
    animation: `pulse-animation-${state} 2s infinite`,
  },
  [`& .${state}.loading`]: {
    animation: `pulse-animation-${state} .5s infinite`,
  },
});

export const statusStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "1.5rem",
  height: "1.5rem",
  transition: "all 3s ease-in-out",

  flexShrink: 0,

  "& .circle": {
    borderRadius: "50%",
    width: "0.5rem",
    height: "0.5rem",
  },

  ...Object.entries(statusClassNameMap).reduce((acc, [, { state, color }]) => {
    return { ...acc, ...generateStateStyles(state, color) };
  }, {}),
};
