import { SxProps } from "@mui/joy/styles/types";
import { getBackgroundColor } from "../accordion.style";

export const confirmButtonStyles: SxProps = {
  display: "flex",
  alignItems: "center",

  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: getBackgroundColor(3),

  bgcolor: getBackgroundColor(2),

  minHeight: "2rem",

  py: 0.5,
  px: 2,

  "&:hover": {
    borderColor: getBackgroundColor(4),
    bgcolor: getBackgroundColor(3),
    cursor: "pointer",
  },

  [`& > .deck-chat-confirm-button--text`]: {
    fontSize: "14px",
    color: "var(--joy-palette-primary-500)",
  },
};
