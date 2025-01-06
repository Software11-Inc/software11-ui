import { SxProps } from "@mui/joy/styles/types";

export const mainBoxSxProps = (fit: boolean = false) => ({
  position: "sticky",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  paddingInline: "var(--spacing)",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  boxShadow: "var(--shadow)",
  zIndex: 5,
  overflow: "hidden",
  transition: "0.2s ease-in-out",

  bgcolor: "var(--joy-palette-primary-100)",
  borderTop: "1px solid",
  borderColor: "primary.100",
  py: 1,
  height: "3.25rem",

  "&.hidden": {
    height: 0,
    py: 0,
    borderColor: "transparent",
    borderTop: "0px solid",
  },

  ...(fit && {
    mt: "var(--spacing)",
    mx: "calc(var(--spacing) * -1)",
    mb: "calc(var(--spacing) * -1)",
  }),
});

// Define styles for the inner box
export const innerBoxSxProps: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
  flexWrap: "wrap",
  gap: 1,
};

export const footerActionStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-between",
  gap: 1,
};
