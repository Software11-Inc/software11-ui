import { SxProps } from "@mui/joy/styles/types";
import { getBackgroundColor } from "../accordion.style";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { linearProgressClasses } from "@mui/joy/LinearProgress";

export const chatActionStyle: SxProps = {
  display: "flex",
  flexDirection: "column",

  [`& > .deck-chat-action--content`]: {
    display: "grid",
    gridTemplateColumns: "1rem auto 1fr",
    alignItems: "center",
    gap: 1,
    p: 0.5,
    px: 1,
    borderRadius: "var(--border-radius)",
    // border: "1px solid",
    borderColor: getBackgroundColor(4),
    boxShadow: "var(--shadow)",

    bgcolor: getBackgroundColor(2),
    height: "2rem",
    zIndex: 1,

    [`& > .deck-chat-action--icon`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",

      [`& > .${svgIconClasses.root}`]: {
        fontSize: "16px",
        color: "var(--joy-palette-primary-500)",
      },

      [`& > .deck-chat-action--icon-status`]: {
        position: "absolute",
        transform: "scale(0.7)",
        bottom: "-0.5rem",
        left: "-0.5rem",
      },
    },

    [`& > .deck-chat-action--action`]: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--joy-palette-primary-500)",
    },

    [`& > .deck-chat-action--resource`]: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,

      [`& > .deck-chat-action--resource-icon`]: {
        display: "flex",
        alignItems: "center",
      },

      [`& > .deck-chat-action--resource-name`]: {
        fontSize: "12px",
        color: "var(--joy-palette-primary-500)",
      },
    },

    [`& > .deck-chat-action--progress`]: {
      px: 1,
      [`& > .${linearProgressClasses.root}`]: {
        borderRadius: "1rem",
      },
    },
  },

  [`& > .deck-chat-action--footer`]: {
    display: "flex",
    mx: 1,
    px: 1,
    py: 0.25,
    pr: 0.25,
    bgcolor: getBackgroundColor(3),
    borderRadius: "0 0 var(--border-radius) var(--border-radius)",
    transition: "0.1s ease-in-out",

    "&.hide": {
      transform: "translateY(-100%)",
    },

    [`& > .deck-chat-action--location`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      overflow: "hidden",

      [`& > .deck-chat-action--location-text`]: {
        fontSize: "9px",
        letterSpacing: "0.3px",
        color: "var(--joy-palette-primary-500)",
        lineBreak: "anywhere",
      },

      [`& > .deck-chat-action--location-action`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
};
