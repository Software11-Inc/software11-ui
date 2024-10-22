export const boxStyle = {
  display: "flex",
  gap: 0.5,
  alignItems: "center",
};

export const typographySlotProps = {
  root: {
    sx: {
      fontSize: "9px",
      lineHeight: "1.2",
    },
  },
};

export const emptyTypographySlotProps = {
  root: {
    sx: {
      fontSize: "9px",
      lineHeight: "1.2",
      color: "var(--joy-palette-danger-500)",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
};

export const valueTypographySlotProps = {
  root: {
    sx: {
      fontSize: "9px",
      lineHeight: "1.2",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
    },
  },
};
