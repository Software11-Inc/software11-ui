import { SxProps } from "@mui/joy/styles/types";
import { getBackgroundColor } from "../accordion.style";
import { svgIconClasses } from "@mui/joy/SvgIcon";

export const menuButtonStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,

  bgcolor: getBackgroundColor(2),
  border: "1px solid",
  borderColor: getBackgroundColor(3),

  minHeight: "2rem",

  py: 0.5,
  px: 1,

  "&:hover": {
    borderColor: getBackgroundColor(4),
    bgcolor: getBackgroundColor(3),
    cursor: "pointer",
  },

  [`& > .deck-chat-menu-button--text`]: {
    fontSize: "14px",
    color: "var(--joy-palette-primary-500)",
  },

  [`& > .deck-chat-menu-button--icon`]: {
    display: "flex",
    alignItems: "center",
    [`& > .${svgIconClasses.root}`]: {
      fontSize: "14px",
      color: "var(--joy-palette-primary-500)",
    },
  },
};
