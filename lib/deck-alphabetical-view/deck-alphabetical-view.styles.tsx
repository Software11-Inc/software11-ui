import { SxProps } from "@mui/joy/styles/types";

export const alphabeticalViewContentClass = "alphabetical-view--content";

export const alphabeticalViewSectionClass = "alphabetical-view--section";

export const alphabeticalViewSectionItemClass = "alphabetical-view--section-item";

export const alphabeticalViewSectionTitleClass = "alphabetical-view--section-title";

export const alphabeticalViewNavClass = "alphabetical-view--nav";

export const alphabeticalViewNavInnerClass = "alphabetical-view--nav-inner";

export const alphabeticalViewNavButtonClass = "alphabetical-view--nav-button";

export const alphabeticalViewNavButtonLetterClass = "alphabetical-view--nav-button--letter";

export const alphabeticalViewLoadingClass = "alphabetical-view--loading";

export const alphabeticalViewStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: 1,

  position: "relative",

  [`& .${alphabeticalViewContentClass}`]: {
    paddingRight: "1.5rem",
    pb: 2,
    flex: 1,
    display: "flex",
    flexDirection: "column",

    [`& .${alphabeticalViewLoadingClass}`]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },

    [`& .${alphabeticalViewSectionClass}`]: {
      [`.${alphabeticalViewSectionItemClass}`]: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
      },

      [`&:first-of-type .${alphabeticalViewSectionTitleClass}`]: {
        paddingTop: "unset",
      },

      [`.${alphabeticalViewSectionTitleClass}`]: {
        fontSize: "1.5rem",
        fontWeight: 600,
        padding: "0.5rem .5rem",
        color: "primary.200",
      },
    },
  },

  [`& .${alphabeticalViewNavClass}`]: {
    position: "fixed",
    right: ".5rem",
    top: "calc(var(--header-height) + var(--subheaders-height) + 0.5rem);",
    bottom: "calc(var(--footer-height) + 0.5rem)",
    zIndex: 1000,
    transition: "0.125s ease-in-out",

    [`& .${alphabeticalViewNavInnerClass}`]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",

      [`& .${alphabeticalViewNavButtonClass}`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc((100% - 2rem) / 26)",
        cursor: "pointer",
        userSelect: "none",
        paddingInline: "0.25rem",
        color: "primary.300",

        "&.active": { color: "primary.500" },

        "&:hover": { color: "primary.700" },

        "&.disabled": { color: "primary.100", cursor: "default" },

        [`& .${alphabeticalViewNavButtonLetterClass}`]: {
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
  },
};
