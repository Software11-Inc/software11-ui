import { Size } from "@models";
import accordionClasses from "@mui/joy/Accordion/accordionClasses";
import accordionDetailsClasses from "@mui/joy/AccordionDetails/accordionDetailsClasses";
import accordionSummaryClasses from "@mui/joy/AccordionSummary/accordionSummaryClasses";
import { SxProps } from "@mui/joy/styles/types/theme";

const sizePaddingMap = {
  sm: 1,
  md: 1.25,
  lg: 2,
};

export const getBackgroundColor = (level: number): string => {
  switch (level) {
    case 0:
      return "var(--joy-palette-background-body)";
    case 1:
      return "var(--joy-palette-background-surface)";
    case 2:
      return "var(--joy-palette-background-level1)";
    case 3:
      return "var(--joy-palette-background-level2)";
    case 4:
      return "var(--joy-palette-background-level3)";
    default:
      return "var(--joy-palette-background-body)";
  }
};

const highlightInnerColor = getBackgroundColor(0);
const highlightOuterColor = "var(--joy-palette-primary-500)";

export const accordionGroupStyles = (
  className: string,
  compact: boolean,
  level: number,
  size: Size,
  hasShadow: boolean,
  order: number = 0,
  hidden = false
): SxProps => {
  const paddingInline = sizePaddingMap[size];
  return {
    [`&.${className}`]: {
      display: "flex",
      flexDirection: "column",
      border: "unset",
      order,

      "&:hover": {
        zIndex: 3,
      },

      ...(hidden && {
        display: "none",
      }),

      ...(!compact && {
        gap: 2,
      }),

      [`& > .${accordionClasses.root}`]: {
        ...(!compact && {
          borderRadius: "var(--border-radius)",

          ...(hasShadow && {
            boxShadow: "var(--shadow)",
          }),
        }),

        [`& > .${accordionSummaryClasses.root}`]: {
          zIndex: 1,

          [`& > .${accordionSummaryClasses.button}`]: {
            transition: "0.125s ease-in-out",
            paddingInline,

            ...(!compact && {
              borderRadius: "var(--border-radius)",
            }),

            [`&:hover`]: {
              ...(!compact && {
                boxShadow: "var(--focus-shadow)",
              }),
              bgcolor: getBackgroundColor(level + 1),
            },
            [`& > .${accordionSummaryClasses.indicator}`]: {
              transition: "0.125s ease-in-out",
            },
          },
        },

        [`& > .${accordionDetailsClasses.root}`]: {
          bgcolor: "transparent",
          zIndex: 0,

          [`& > .${accordionDetailsClasses.content}`]: {
            p: 0,
            bgcolor: getBackgroundColor(level + 1),
          },
        },
      },

      [`& > .${accordionClasses.root}.${accordionClasses.expanded}`]: {
        [`& > .${accordionSummaryClasses.root}`]: {
          [`& > .${accordionSummaryClasses.button}`]: {
            ...(!compact && {
              borderRadius: "var(--border-radius) var(--border-radius) 0 0",
            }),
            bgcolor: getBackgroundColor(level + 1),
            [`&:hover`]: {
              bgcolor: getBackgroundColor(level + 2),
            },
          },
          [`&.custom-indicator`]: {
            [`& > .${accordionSummaryClasses.button}`]: {
              [`& > .${accordionSummaryClasses.indicator}`]: {
                "--Icon-color": "var(--joy-palette-primary-500)",
                transform: "unset",
              },
            },
          },
        },
        [`& > .${accordionDetailsClasses.root}`]: {
          [`& > .${accordionDetailsClasses.content}`]: {
            p: 0,
            ...(!compact && {
              borderRadius: `0 0 var(--border-radius) var(--border-radius)`,
              overflow: "hidden",
            }),
            borderTop: "1px solid",
            borderColor: "divider",
          },
        },
      },
      [`& > .${accordionClasses.root}:last-child`]: {
        borderBottom: "unset",
      },

      ["&.deck-highlighted"]: {
        [`& > .${accordionClasses.root}:not(.${accordionClasses.expanded})`]: {
          [`& > .${accordionSummaryClasses.root}`]: {
            [`& > .${accordionSummaryClasses.button}`]: {
              boxShadow: `0 0 0 2px ${highlightInnerColor}, 0 0 0 4px ${highlightOuterColor}, 0 1px 2px 0 black`,
              bgcolor: getBackgroundColor(level + 1),

              "&:hover": {
                bgcolor: getBackgroundColor(level + 2),
              },
            },
          },
        },
      },
    },
  };
};

export const accordionTransition = {
  initial: "0.125s ease-out",
  expanded: "0.125s ease-out",
};
