import { SxProps } from "@mui/joy/styles/types";

export const selectShapeFigureClass = "select-shape--figure";

export const selectShapeInnerClass = "select-shape--inner";

export const selectShapeActionClass = "select-shape--action";

export const selectShapeContentClass = "select-shape--content";

export const dynamicClass = "select-shape--dynamic";

export const staticClass = "select-shape--static";

export const selectShapeStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  boxShadow: "var(--shadow)",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",

  [`&.${dynamicClass}`]: {
    [`& .${selectShapeInnerClass}`]: {
      borderTop: "1px solid",
      borderColor: "divider",
      borderRadius: "var(--border-radius)",
    },
  },

  [`& .${selectShapeFigureClass}`]: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    padding: 1,
    bgcolor: "background.surface",
  },

  [`& .${selectShapeInnerClass}`]: {
    display: "grid",
    gridTemplateColumns: "3rem 1fr",
    alignItems: "center",
    bgcolor: "background.body",
    minHeight: "3rem",
  },

  [`& .${selectShapeContentClass}`]: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    padding: 2,
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
