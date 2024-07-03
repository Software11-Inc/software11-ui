import { buttonClasses } from "@mui/joy/Button";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { SxProps } from "@mui/joy/styles/types";

export const buttonClass = "deck-menu-button";
export const buttonContentClass = "deck-menu-button-content";
export const buttonHeaderClass = "deck-menu-button-header";
export const buttonTextClass = "deck-menu-button-text";

export const menuButtonStyles: SxProps = {
  [`&.${buttonClass}`]: {
    [`&.${buttonClasses.root}`]: {
      p: 1.5,
      transition: "0.1s ease-in-out",

      [`& .${buttonClasses.startDecorator} > .${svgIconClasses.root}, & .${buttonClasses.endDecorator} > .${svgIconClasses.root}`]:
        {
          fontSize: 36,
          mx: 1.5,
        },

      [`& .${buttonContentClass}`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        gap: 1,
        flex: 1,
      },

      [`& .${buttonHeaderClass}`]: {
        fontSize: 12,
        fontWeight: "bold",
        lineHeight: 1.5,
        color: "inherit",
      },

      [`& .${buttonTextClass}`]: {
        fontSize: 9,
        fontWeight: "normal",
        lineHeight: 1.2,
        color: "inherit",
      },
    },

    "&[hidden]": {
      display: "none",
    },
  },
};
