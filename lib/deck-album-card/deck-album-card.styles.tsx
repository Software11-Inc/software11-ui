export const classes = {
  baseBox: "deck-album-card-base",
  headerBox: "deck-album-card-header",
  contentBox: "deck-album-card-content",
  mediaIcon: "deck-album-card-media-icon",
  tagBox: "deck-album-card-tag-box",
  tag: "deck-album-card-tag",
};

const baseBoxStyle = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "var(--border-radius)",
  bgcolor: "var(--joy-palette-background-body)",
  boxShadow: "var(--shadow)",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    [`.${classes.contentBox}`]: {
      bgcolor: "var(--joy-palette-background-level1)",
    },
  },
};

const headerBoxStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1.5rem",
  gap: 1,
  alignItems: "center",
  p: 1,
  bgcolor: "var(--joy-palette-background-body)",
  borderBottom: "1px solid",
  borderColor: "var(--joy-palette-divider)",
};

const contentBoxStyle = {
  display: "flex",
  flexDirection: "column",
  p: 1,
  bgcolor: "var(--joy-palette-background-surface)",
  gap: 1,
};

const mediaIconStyle = {
  fontSize: "14px",
  color: "var(--joy-palette-primary-500)",
};

export const styles = {
  [`&.${classes.baseBox}`]: baseBoxStyle,
  [`.${classes.headerBox}`]: headerBoxStyle,
  [`.${classes.contentBox}`]: contentBoxStyle,
  [`.${classes.mediaIcon}`]: mediaIconStyle,
};
