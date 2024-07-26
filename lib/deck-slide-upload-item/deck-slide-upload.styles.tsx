import { SxProps } from "@mui/joy/styles/types";
import { inputFocusStyle } from "../input.style";

export const imageOverlayClass = "deck-slide-upload-item-overlay";

export const uploadItemStyle = (ignore = false): SxProps => ({
  display: "flex",
  flexDirection: ignore ? "row" : "column",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
  boxShadow: ignore ? "none" : "var(--shadow)",
  bgcolor: ignore ? "var(--joy-palette-background-surface)" : "var(--joy-palette-background-body)",
  transition: ".3s",
  border: "1px solid var(--joy-palette-divider)",

  ...(ignore && {
    borderColor: "var(--joy-palette-background-level1)",
  }),

  [`&:hover .${imageOverlayClass}`]: {
    backdropFilter: "blur(2px)",
    opacity: 1,
  },
});

export const uploadImageStyle = (ignore = false): SxProps => ({
  display: "flex",
  aspectRatio: "16/9",
  maxWidth: ignore ? "8.5rem" : "auto",
  transition: ".3s",
  position: "relative",
  flexGrow: 1,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    filter: ignore ? "grayscale(25%)" : "none",
  },
});

export const uploadImageOverlay: SxProps = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  gap: 1,
  pb: 2,

  opacity: 0,

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",

  transition: ".3s",
};

export const accordionBoxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
  flex: 1,
};

export const accordionDetailsBoxStyle = {
  display: "flex",
  flexDirection: "column",
  p: 1,
  gap: 1,
};

export const inputStyle = {
  fontSize: 12,

  ...inputFocusStyle,
};

export const dividerStyle = {
  bgcolor: "var(--joy-palette-divider)",
};

export const saveButtonBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  p: 1,
  gap: 1,
};

export const ignoreBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 1,
};
