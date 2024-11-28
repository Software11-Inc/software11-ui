import { SxProps } from "@mui/joy/styles/types";
import { getBackgroundColor } from "../accordion.style";

export const emptyHeaderStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const headerStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: 1,
  flex: 1,
};

export const contentHeaderStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 1,
  px: 1.5,
  borderBottom: "1px solid",
  borderColor: "divider",
};

export const contentStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export const itemStyle: SxProps = {
  "&.deck-api-changed": {
    // order: -1,
  },
  "&.deck-user-changed": {
    // order: -2,
  },
  "&.deck-highlighted": {
    // order: -3,
  },
};

const highlightInnerColor = getBackgroundColor(1);
const highlightOuterColor = "var(--joy-palette-primary-500)";

export const itemInnerStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "1.5rem minmax(100px, auto) 2rem 1.5rem",
  gap: 1,
  px: 1,
  py: 0.5,
  alignItems: "center",
  bgcolor: "background.surface",
  borderRadius: "var(--border-radius)",

  boxShadow: "var(--shadow)",

  position: "relative",
  zIndex: 1,

  "&:hover": {
    bgcolor: "background.body",
  },

  "&.deck-highlighted": {
    bgcolor: "background.body",
    boxShadow: `0 0 0 2px ${highlightInnerColor}, 0 0 0 4px ${highlightOuterColor}, 0 1px 2px 0 black`,
  },
};

export const boxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export const horizontalBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const counterStyle: SxProps = {
  display: "flex",
  gap: 0.5,
  py: 0.5,
  px: 1,
  alignItems: "center",
  justifyContent: "center",
  bgcolor: getBackgroundColor(1),
  borderRadius: "var(--border-radius)",
};

export const hintStyle: SxProps = {
  display: "flex",
  mx: 0.75,
  px: 1,
  py: 0.5,
  bgcolor: "background.surface",
  borderRadius: "0 0 var(--border-radius) var(--border-radius)",
};

export const actionButtonStyle: SxProps = {
  px: 1.5,
  py: 1,
  flex: 1,
  fontSize: 11,
  lineHeight: "14px",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

export const cellStyle: SxProps = {
  fontSize: "clamp(9px, 12px, 24px)",
  lineHeight: "24px",
  fontWeight: "bold",
  color: "warning.200",
  minHeight: "2rem",
  mr: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  ["&:hover"]: {
    color: "warning.500",
    cursor: "pointer",
  },

  width: "4rem",
};

export const figureValuesStyle: SxProps = {
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "bold",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "5rem",
};

export const figureNameStyle: SxProps = {
  fontSize: "10px",
  lineHeight: "12px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "5rem",
};
