import { SxProps } from "@mui/joy/styles/types";

export const userActionsStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
};

export const badgeStyle: SxProps = {
  [`& .MuiBadge-badge`]: {
    fontSize: 9,
    lineHeight: 1,
    py: 0.5,
    px: 0.75,
    minWidth: "unset",
    minHeight: "unset",
  },
};
