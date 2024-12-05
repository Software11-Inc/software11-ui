import { SxProps } from "@mui/joy/styles/types";

export const columnStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export const rowStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
};

export const cardStyle: SxProps = {
  ...columnStyle,
  gap: 0,
  bgcolor: "background.body",
  borderRadius: "var(--border-radius)",
  boxShadow: "var(--shadow)",
};

export const cardHeaderStyle: SxProps = {
  ...rowStyle,
  p: 1,

  borderBottom: "1px solid",
  borderColor: "background.level1",
};

export const cardContentStyle: SxProps = {
  ...columnStyle,
  gap: 1,
  p: 1,
};
