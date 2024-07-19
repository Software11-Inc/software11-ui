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
  gap: 1.5,
  p: 1.5,
};

export const itemStyle: SxProps = {
  "&.deck-api-changed": {
    order: -1,
  },
  "&.deck-user-changed": {
    order: -2,
  },
  "&.deck-highlighted": {
    order: -3,
  },
};

export const itemInnerStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "1.5rem auto 2rem 1.5rem",
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
    boxShadow: "var(--highlight-shadow)",

    "&:hover": {
      boxShadow: "var(--shadow)",
    },
  },
};

export const horizontalBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
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
