import { SxProps } from "@mui/joy/styles/types";

export const mainBoxSxProps = (fit: boolean = false) => ({
  position: "sticky",
  bottom: 0,
  height: "4.25rem",
  display: "flex",
  alignItems: "center",
  paddingInline: "var(--spacing)",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  zIndex: 999,
  overflow: "hidden",
  transition: "height 0.2s ease-in-out",

  bgcolor: "background.body",
  borderTop: "1px solid",
  borderColor: "primary.100",

  "&.hidden": {
    height: 0,
    borderColor: "transparent",
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
