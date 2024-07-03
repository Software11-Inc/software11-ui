import { SxProps } from "@mui/joy/styles/types";

export const projectCardActionClass = "project-card--action";
export const projectCardContentClass = "project-card--content";

export const projectCardStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "3rem 1fr",
  alignItems: "center",
  bgcolor: "background.body",
  boxShadow: "var(--shadow)",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
  minHeight: "3rem",

  [`& .${projectCardContentClass}`]: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: 1,
  },

  [`& .${projectCardActionClass}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    bgcolor: "background.surface",
    borderRight: "1px solid",
    borderColor: "divider",
  },

  "&:hover": {
    boxShadow: "var(--focus-shadow)",
  },
};
