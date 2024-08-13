import { SxProps } from "@mui/joy/styles/types";
import { inputFocusStyle } from "../input.style";

export const imageOverlayClass = "deck-slide-upload-item-overlay";

export const uploadItemStyle = (ignore = false, loading = false): SxProps => ({
  display: "flex",
  flexDirection: ignore ? "row" : "column",
  borderRadius: `calc(var(--border-radius) / ${ignore ? 2 : 1})`,
  overflow: "hidden",
  boxShadow: ignore ? "none" : "var(--shadow)",
  bgcolor: ignore ? "var(--joy-palette-background-surface)" : "var(--joy-palette-background-body)",
  transition: ".3s",
  border: "1px solid var(--joy-palette-divider)",
  position: "relative",

  ...(ignore && {
    borderColor: "var(--joy-palette-background-level1)",
  }),

  ...(loading && {
    boxShadow: "var(--focus-shadow)",
  }),
});

export const uploadImageStyle = (ignore = false): SxProps => ({
  display: "flex",
  aspectRatio: "16/9",
  transition: ".3s",
  position: "relative",
  overflow: "hidden",
  flex: 1,

  img: {
    width: "100%",
    height: "100%",
    filter: ignore ? "grayscale(50%)" : "none",
  },

  [`&:hover .${imageOverlayClass}`]: {
    backdropFilter: "blur(2px)",
    bgcolor: "rgba(255, 255, 255, 0.7)",
    opacity: 1,
  },
});

export const uploadImageOverlay: SxProps = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pb: 2,
  gap: 0.5,
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
  flex: 1,
  p: 1,
};
