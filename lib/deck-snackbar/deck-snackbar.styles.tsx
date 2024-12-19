import { snackbarClasses } from "@mui/joy/Snackbar";
import { SxProps } from "@mui/joy/styles/types";

export const snackbarStyles: SxProps = {
  [`&.${snackbarClasses.root}`]: {
    minWidth: "unset",
    boxShadow: "var(--shadow)",
    borderRadius: "0",
    border: "unset",
    borderBottom: "1px solid",
    borderColor: "var(--joy-palette-divider)",
    backgroundColor: "var(--joy-palette-background-body)",
    py: 1,
  },
};
