import { SxProps } from "@mui/joy/styles/types";

export const selectShapeActionClass = "select-shape--action";

export const selectShapeContentClass = "select-shape--content";

export const selectShapeStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "3rem 1fr",
  alignItems: "center",
  bgcolor: "background.body",
  boxShadow: "var(--shadow)",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
  minHeight: "3rem",

  [`& .${selectShapeContentClass}`]: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: 1,
  },

  [`& .${selectShapeActionClass}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "auto",
    borderRight: "1px solid",
    borderColor: "divider",
  },

  "&:hover": {
    boxShadow: "var(--focus-shadow)",
  },
};
