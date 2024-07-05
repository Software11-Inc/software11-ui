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
  },
};

export const iconBoxStyle = (changed: boolean): SxProps => ({
  px: 0.5,
  display: "flex",
  flexDirection: "column",
  filter: `grayscale(${changed ? 0 : 1})`,
});
