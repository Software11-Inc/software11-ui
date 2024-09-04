import { SxProps } from "@mui/joy/styles/types";
import { inputFocusStyle } from "../input.style";
import { UploadGeneralState } from "./deck-slide-upload-item.types";

export const imageOverlayClass = "deck-slide-upload-item__overlay";

export const itemImageSectionClass = "deck-slide-upload-item__image-section";
export const itemImageOverlayClass = "deck-slide-upload-item__image-overlay";
export const itemImageHoverClass = "deck-slide-upload-item__image-hover";
export const itemErrorOverlayClass = "deck-slide-upload-item__error-overlay";
export const itemStatusSectionClass = "deck-slide-upload-item__status-section";
export const itemContentSectionClass = "deck-slide-upload-item__content-section";

export const itemImageClass = "deck-slide-upload-item__image";

export const itemAddButtonClass = "deck-slide-upload-item__add-button";

export const getGeneralStyles: SxProps = {
  [`&.${UploadGeneralState.NONE}`]: {
    borderRadius: "calc(var(--border-radius) / 2)",

    [`& .${itemImageSectionClass}`]: {
      [`& .${itemImageClass}`]: {
        height: "3rem",

        "&::after": {
          backgroundPositionX: "100%",
        },
      },
      [`& .${itemAddButtonClass}`]: {
        flex: 2,
        px: 1,
      },
    },

    [`& .${itemContentSectionClass}`]: {
      flex: 0,
      maxHeight: 0,
    },
  },
  [`&.${UploadGeneralState.NONE}, &.${UploadGeneralState.EDIT}`]: {
    [`& .${itemStatusSectionClass}`]: {
      height: "0px",
    },
  },
  [`&.${UploadGeneralState.EDIT}, &.${UploadGeneralState.SAVED}`]: {
    [`& .${itemImageSectionClass}:hover`]: {
      [`& .${itemImageHoverClass}`]: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
};

const transition = ".3s ease-in-out";

export const getStyles = (): SxProps => ({
  ...getGeneralStyles,
});

export const itemBoxStyle: SxProps = {
  position: "relative",
  borderRadius: "var(--border-radius)",
  boxShadow: "var(--shadow)",

  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition,
  aspectRatio: "none",

  [`& .${itemImageSectionClass}`]: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    position: "relative",

    [`& .${itemImageClass}`]: {
      display: "flex",
      flex: 1,
      aspectRatio: "16/9",
      height: "9rem",
      overflow: "hidden",
      position: "relative",
      transition,

      img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },

      "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: "2rem",
        background: "linear-gradient(to right, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1)) 100%",
        zIndex: 1,
        backgroundSize: "200% 200%",
        backgroundPositionX: "0",
        transition,
      },
    },

    [`& .${itemImageOverlayClass}, & .${itemErrorOverlayClass}`]: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(255,255,255,0.5)",
    },

    [`& .${itemErrorOverlayClass}`]: {
      justifyContent: "flex-end",
      alignItems: "flex-start",
      background: "linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 75%)",
      padding: 1,
      flexDirection: "column",
    },

    [`& .${itemAddButtonClass}`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 1,
      px: 0,
      flex: 0,
      transition,
      overflow: "hidden",
    },

    [`& .${itemImageHoverClass}`]: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      pb: 1,
      gap: 0.5,
      opacity: 0,

      background: "linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 75%)",
      transform: "translateY(100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",

      transition,
    },
  },

  [`& .${itemContentSectionClass}`]: {
    display: "flex",
    flex: 1,
    transition,
    maxHeight: "unset",
    overflow: "hidden",
  },

  [`& .${itemStatusSectionClass}`]: {
    display: "flex",
    flexDirection: "column",
    height: "1.5rem",
    transition,
  },

  ...getGeneralStyles,
};

export const buttonSx = {
  fontSize: 10,
  lineHeight: "12px",
  minHeight: "unset",
  textTransform: "uppercase",
  borderRadius: "calc(var(--border-radius)/2)",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const editButtonSx = {
  ...buttonSx,
  borderRadius: "0 0 calc(var(--border-radius)/2) calc(var(--border-radius)/2)",
  flex: 1,
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

export const accordionHeaderStyle: SxProps = {
  display: "flex",
  flex: 1,
  alignItems: "center",
  gap: 1,
};

export const itemLinearProgressStyle = {
  height: "3px",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 2,

  "&:before": {
    transition: ".3s",
  },
};
