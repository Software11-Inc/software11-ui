import { SxProps } from "@mui/joy/styles/types";

export const mainBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0.25rem 0.3rem 0.25rem 0.5rem",
  boxShadow: "var(--shadow)",
  gap: 1,
  borderRadius: "var(--border-radius)",
  bgcolor: "background.body",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    bgcolor: "background.level1",
    boxShadow: "var(--focus-shadow)",
    cursor: "pointer",
  },
};

export const iconBoxStyle = (changed: boolean): SxProps => ({
  px: 0.5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  filter: `grayscale(${changed ? 0 : 1})`,
  width: "1.5rem",
  transition: "all 1s ease-in-out",
});
