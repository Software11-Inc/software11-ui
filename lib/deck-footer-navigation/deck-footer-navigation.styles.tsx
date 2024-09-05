import { svgIconClasses } from "@mui/joy/SvgIcon";
import { SxProps } from "@mui/joy/styles/types";

const baseClassName = "deck-footer-navigation";

// Simplified classNames object by using a function to generate repetitive patterns
const generateClassNames = (base: string) => ({
  base,
  inner: `${base}-inner`,
  indicator: {
    base: `${base}-indicator`,
    background: `${base}-indicator-background`,
    backgroundInner: `${base}-indicator-background-inner`,
    inner: `${base}-indicator-inner`,
    container: `${base}-indicator-container`,
  },
  item: {
    base: `${base}-item`,
    text: `${base}-item-text`,
    icon: `${base}-item-icon`,
  },
  spacer: `${base}-spacer`,
  state: {
    active: "deck-active",
    sticky: "deck-sticky",
  },
});

export const classNames = generateClassNames(baseClassName);

const transition = ".3s ease-in-out";

// Centralized style variables for easier maintenance and readability
const styleVariables = {
  baseIconSize: "var(--footer-nav-icon-size)",
  baseTextColor: "var(--joy-palette-text-secondary)",
  activeIconTransform: "translateY(-50%)",
  activeTextTransform: "translateY(10px)",
  inactiveTextTransform: "translateY(20px)",
  baseFontSize: "var(--footer-nav-text-size)",
  baseLineHeight: "var(--footer-nav-text-height)",
  letterSpacing: "0.05rem",
  textTransform: "uppercase",
  indicatorSize: "calc(var(--footer-nav-indicator-size) - var(--footer-nav-indicator-border-width) * 2)",
  indicatorMargin: "var(--footer-nav-indicator-border-width)",
  indicatorPositionX:
    "calc(var(--footer-nav-indicator-position) * var(--footer-nav-tab-width) + var(--footer-nav-indicator-spacing))",
};

// Refactored styles to use centralized style variables
const indicatorBackgroundStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  "&:before, &:after": {
    content: '""',
    display: "flex",
    bgcolor: "var(--footer-nav-background)",
    transition,
  },
  "&:before": {
    width: `calc(${styleVariables.indicatorPositionX} - 1rem + 1px)`,
    marginRight: "-1px",
  },
  "&:after": {
    flexGrow: 1,
    marginLeft: "-1px",
  },
  [`& > .${classNames.indicator.backgroundInner}`]: {
    bgcolor: "var(--footer-nav-background)",
    maskImage: "url(#mask-tab), url(#mask-outer)",
    maskMode: "alpha",
    maskComposite: "exclude",
    width: "5rem",
    transition,
  },
};

const footerInnerStyles = {
  [`& > ul`]: {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    padding: 0,
    margin: 0,
    [`& > li`]: {
      position: "relative",
      listStyle: "none",
      height: "var(--footer-nav-item-height)",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      "& > a": {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: "none",
        [`& > .${classNames.item.icon}`]: {
          position: "relative",
          height: "var(--footer-nav-item-height)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition,
          "--Icon-fontSize": styleVariables.baseIconSize,
          "--Icon-color": styleVariables.baseTextColor,
          [`& > .${svgIconClasses.root}`]: {
            transition,
          },
        },
        [`& > .${classNames.item.text}`]: {
          position: "absolute",
          fontSize: styleVariables.baseFontSize,
          lineHeight: styleVariables.baseLineHeight,
          color: styleVariables.baseTextColor,
          letterSpacing: styleVariables.letterSpacing,
          textTransform: styleVariables.textTransform,
          transition,
          transform: styleVariables.inactiveTextTransform,
          opacity: 0,
        },
      },
      [`&.${classNames.state.active}`]: {
        "& > a": {
          [`& > .${classNames.item.icon}`]: {
            animation: "slide-up .3s ease-in-out",
            transform: styleVariables.activeIconTransform,
            "--Icon-color": "var(--footer-nav-background)",
          },
          [`& > .${classNames.item.text}`]: {
            transform: styleVariables.activeTextTransform,
            color: "var(--joy-palette-primary-500)",
            opacity: 1,
          },
        },
      },
      [`&:hover:not(.${classNames.state.active})`]: {
        "& > a": {
          [`& > .${classNames.item.icon}`]: {
            "--Icon-color": "var(--joy-palette-primary-500)",
            transform: `translateY(-15%) scale(0.9)`,
          },
          [`& > .${classNames.item.text}`]: {
            transform: "translateY(10px)",
            color: "var(--joy-palette-primary-500)",
            fontSize: "0.5rem",
            opacity: 1,
          },
        },
      },
    },
  },
};

const indicatorStyle = {
  position: "absolute",
  top: "-50%",
  left: 0,
  right: 0,
  bottom: 0,
  [`& > .${classNames.indicator.inner}`]: {
    position: "relative",
    width: styleVariables.indicatorSize,
    height: styleVariables.indicatorSize,
    margin: styleVariables.indicatorMargin,
    background: "var(--joy-palette-primary-500)",
    boxShadow: "var(--shadow)",
    borderRadius: "50%",
    padding: "6px",
    boxSizing: "border-box",
    left: styleVariables.indicatorPositionX,
    transition,
  },
};

export const deckFooterSpacerStyle: SxProps = {
  [`&.${classNames.spacer}`]: {
    height: "var(--footer-nav-item-height)",
  },
};

export const deckFooterNavigationStyle: SxProps = {
  [`&.${classNames.base}`]: {
    [`&.${classNames.state.sticky}`]: {
      position: "fixed",
      bottom: 0,
      zIndex: 1000,
    },
    width: "100%",
    "--footer-nav-indicator-position-x": styleVariables.indicatorPositionX,
    [`& > .${classNames.indicator.background}`]: indicatorBackgroundStyles,
    [`& > .${classNames.inner}`]: footerInnerStyles,
    [`& > .${classNames.indicator.base}`]: indicatorStyle,
  },
};
