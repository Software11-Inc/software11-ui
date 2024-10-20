import { SxProps } from "@mui/joy/styles/types";

export const closeIconStyle: SxProps = {
  right: "1rem",
  top: "1.25rem",
};

export const drawerSlotProps = {
  content: {
    sx: {
      borderRadius: "var(--border-radius) var(--border-radius) 0 0",
      height: "unset",
      minHeight: "85vh",
    },
  },
};

export const headerStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  mx: 2,
  my: 1,
  alignItems: "center",

  ":before": {
    content: '""',
    flex: 1,
    height: "1px",
    width: ".5rem",
    bgcolor: "background.level1",
    position: "absolute",
    left: "0",
  },

  ":after": {
    content: '""',
    flex: 1,
    height: "1px",
    width: ".5rem",
    bgcolor: "background.level1",
    position: "absolute",
    right: "0",
  },
};

export const sepatorStyle: SxProps = {
  flex: 1,
  height: "1px",
  bgcolor: "background.level1",
};

export const stepsStyle: SxProps = {
  fontSize: "16px",
  fontWeight: 600,
  color: "primary.500",
};

export const mainStepStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  mx: 1,
  p: 1,
  flex: 1,
};

export const infoIconStyle: SxProps = {
  display: "inline-flex",
  height: "20px",
  verticalAlign: "sub",
  mx: 0.5,
  borderRadius: "50%",
  boxShadow: "var(--shadow)",
  overflow: "hidden",
};
