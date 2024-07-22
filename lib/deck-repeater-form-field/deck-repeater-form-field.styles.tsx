import { SxProps } from "@mui/joy/styles/types";

export const boxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 1,
};

export const fieldBoxStyle: SxProps = {
  ...boxStyle,
  position: "sticky",
  top: 0,
  bgcolor: "background.body",
  zIndex: 1,
};
