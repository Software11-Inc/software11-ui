import { SxProps } from "@mui/joy/styles/types";

export const fileListClass = "file-list";
export const fileListItemClass = "file-list-item";

export const fileListStyle: SxProps = {
  display: "flex",

  [`& .${fileListClass}`]: {
    display: "flex",
    flexDirection: "row",
  },
};

export const fileListItemStyle = (order: number) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",

  zIndex: order,
  padding: 0.75,

  borderRadius: "var(--border-radius)",
  bgcolor: "background.surface",

  border: "1px solid",
  borderColor: "divider",

  transition: "all 0.125s ease",

  "&:not(:first-of-type)": {
    marginLeft: "-0.75rem",
  },

  "&:hover": {
    boxShadow: "var(--shadow)",
    transform: "scale(1.1)",
  },
});
