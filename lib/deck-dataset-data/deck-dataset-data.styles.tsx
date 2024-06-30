import { SxProps } from "@mui/joy/styles/types";

export const dataColumn = (compact: boolean = false): SxProps => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: compact ? 0 : 2,
});
