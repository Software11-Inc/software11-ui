import { accordionClasses } from "@mui/joy/Accordion";
import { accordionDetailsClasses } from "@mui/joy/AccordionDetails";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import { buttonClasses } from "@mui/joy/Button";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { SxProps } from "@mui/joy/styles/types";

export const className = "deck-section";

export const indicatorClassName = "deck-section-indicator";
export const actionClassName = "deck-section-action";

export const sectionStyle: SxProps = {
  [`&.${className}`]: {
    marginInline: "calc(var(--spacing) * -1)",

    "&.hidden": {
      display: "none",
    },

    "&.with-line": {
      [`& > .${accordionClasses.root}`]: {
        [`& > .${accordionSummaryClasses.root}`]: {
          [`& > .${accordionSummaryClasses.button}`]: {
            "&:before, &:after": {
              bgcolor: "background.level1",
            },
          },
        },
      },
    },

    [`& > .${accordionClasses.root}`]: {
      p: 0,

      [`& > .${accordionSummaryClasses.root}`]: {
        p: 0,
        m: 0,

        [`& > .${accordionSummaryClasses.button}`]: {
          m: 0,
          p: 0,
          gap: 0,

          [`& > .${indicatorClassName}`]: {
            display: "flex",
            mx: 1,
            fontSize: "18px",
            lineHeight: "20px",
            fontWeight: "bold",
          },

          "&:before, &:after": {
            content: "''",
            display: "flex",
            height: "1px",
            bgcolor: "transparent",
          },
          "&:before": {
            width: "var(--spacing)",
            minWidth: "var(--spacing)",
          },
          "&:after": {
            flex: 1,
            minWidth: "var(--spacing)",
          },

          "&:hover": {
            bgcolor: "transparent",

            [`& > .${indicatorClassName}`]: {
              color: "primary.500",
            },
          },
        },
      },

      [`& > .${accordionDetailsClasses.root}`]: {
        m: 0,

        [`& > .${accordionDetailsClasses.content}`]: {
          px: "var(--spacing)",
        },
        [`& > .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]: {
          p: "var(--spacing)",
        },
      },
    },
  },
};

export const actionContainerStyle: SxProps = {
  position: "absolute",
  right: "var(--spacing)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [`& .${buttonClasses.root}`]: {
    fontSize: "12px",
    lineHeight: "14px",
    p: "0.25rem 0.75rem",
    m: 0,
    borderRadius: "1rem",
    minWidth: "auto",
    minHeight: "auto",
    textTransform: "uppercase",
    alignItems: "center",

    "--Icon-fontSize": "12px",
    boxShadow: "var(--shadow)",
  },
};

export const iconStyle = (color: string): SxProps => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mx: 1,
  [`& .${svgIconClasses.root}`]: {
    color: `${color}.500`,
  },
});
