import { SxProps } from "@mui/joy/styles/types";

export const selectStyle: SxProps = {
  bgcolor: "background.body",
  border: "unset",
  borderColor: "unset",
  boxShadow: "var(--shadow)",
  fontSize: "14px",
  "--Select-minHeight": "2rem",

  ["&:hover"]: {
    bgcolor: "background.level1",
    boxShadow: "var(--focus-shadow)",
  },
};

export const optionStyle: SxProps = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "primary.500",
  bgcolor: "background.body",

  [`&.Mui-disabled`]: {
    bgcolor: "background.surface",
  },
};
