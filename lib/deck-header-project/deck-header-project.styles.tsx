export const deckHeaderProjectStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  status: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",

    "&:hover": {
      boxShadow: "0 0 0 2px #ffffff, 0 0 0 4px var(--joy-palette-primary-100), 0 0px 0px 0 black",
    },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    position: "absolute",
    left: "calc(1.25rem + 0.5rem)",

    transition: "opacity 0.3s",
    transitionDelay: "0.15s",

    "&.visible": {
      opacity: 1,
    },

    "&.hidden": {
      opacity: 0,
    },
  },
};
