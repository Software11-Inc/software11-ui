import { Size } from "@models";
import { SxProps } from "@mui/joy/styles/types";
import { getBackgroundColor } from "../accordion.style";

export const className = "deck-dataset-data-item";

export const dataItemStyle = (level = 1, size: Size = "sm", compact = false, order = 0): SxProps => ({
  [`&.${className}`]: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    order: order,

    borderRadius: !compact ? "var(--border-radius)" : "unset",
    bgcolor: getBackgroundColor(level),
    boxShadow: !compact ? "var(--shadow)" : "unset",

    ...(size == "sm" && {
      py: 0.5,
      px: 1,
      gap: 1,
    }),
    ...(size == "md" && {
      py: 0.5,
      px: 1.25,
      gap: 1.5,
    }),
    ...(size == "lg" && {
      py: 1,
      px: 2,
      gap: 2,
    }),

    "&:hover": {
      backgroundColor: getBackgroundColor(level + 1),
    },
  },
});

// Define the styles for the inner Box component
export const columnStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export const actionButtonsStyle: SxProps = {
  display: "flex",
  gap: 1,
  alignItems: "center",
};
