import { SxProps } from "@mui/joy/styles/types";

const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  width: "100%",
};

const inputStyle: SxProps = {
  "--Input-focused": 0,
  minHeight: "unset",
  background: "transparent",
  "&:focus, &:focus-visible, &:focus-within": {
    "&::before": {
      boxShadow: "unset",
    },
  },

  input: {
    borderBottom: "1px solid var(--joy-palette-primary-100)",
    fontSize: "12px",
    "&::placeholder": {
      color: "var(--joy-palette-primary-300)",
    },
  },
};

export const searchBoxStyles = {
  container: containerStyle,
  input: inputStyle,
};
