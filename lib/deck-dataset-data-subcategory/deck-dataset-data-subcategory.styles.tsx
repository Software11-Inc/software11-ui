import { SxProps } from "@mui/joy/styles/types";

export const headerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  flex: 1,
};

export const dataColumn = (compact: boolean = false): SxProps => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: compact ? 0 : 2,
});
