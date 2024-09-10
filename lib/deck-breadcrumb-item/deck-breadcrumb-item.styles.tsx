import { SxProps } from "@mui/joy/styles/types";

export const breadcrumbItemStyles: SxProps = {
  bgcolor: "var(--joy-palette-primary-100)",
  borderRadius: "1rem",
  maxWidth: "45vw",
  p: 0.5,
  pl: 1.5,

  display: "flex",
  alignItems: "center",
  gap: 1,

  boxShadow: "var(--shadow)",

  "&:hover": {
    boxShadow: "var(--focus-shadow)",
    cursor: "pointer",
  },
};
