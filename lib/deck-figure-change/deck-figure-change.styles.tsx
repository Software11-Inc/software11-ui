import { SxProps } from "@mui/joy/styles/types";

export const changesHeaderStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "1.25rem 1fr",
  alignItems: "center",
  gap: 1,
};

export const changesHeaderIcon: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const textStyle: SxProps = {
  fontSize: "12px",
  lineHeight: "16px",
  color: "text.secondary",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  verticalAlign: "top",
};

export const valueStyle = (changed: boolean = false, wrap: boolean = false): SxProps => ({
  ...textStyle,
  fontSize: "12px",
  lineHeight: "1.2",
  color: "var(--joy-palette-text-primary)",
  fontWeight: "bold",

  userSelect: "text",

  ...(wrap && {
    maxWidth: "unset",
    whiteSpace: "normal",
    textOverflow: "unset",
    overflow: "unset",
    verticalAlign: "unset",
  }),
  ...(changed && {
    textDecoration: "var(--joy-palette-warning-500) wavy underline",
    textUnderlineOffset: "1px",
  }),
});

export const nameStyle = (changed: boolean = false): SxProps => ({
  ...textStyle,
  fontSize: "9px",
  lineHeight: "12px",

  ...(changed && {
    textDecoration: "var(--joy-palette-warning-500) wavy underline",
    textUnderlineOffset: "1px",
  }),
});

export const changesBoxStyle: SxProps = {
  // display: "grid",
  // gridTemplateColumns: "1fr 2rem 1fr",
  // flex: 1,
  overflow: "hidden",
};
