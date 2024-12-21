import React from "react";
import { DeckSnackbarTextIcon, IDeckSnackbarMessageProps } from "./deck-snackbar-message.types";
import ErrorRounded from "@mui/icons-material/ErrorRounded";
import NearbyErrorRounded from "@mui/icons-material/NearbyErrorRounded";
import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { SxProps } from "@mui/joy/styles/types";
import DoneAllRounded from "@mui/icons-material/DoneAllRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import Snackbar, { SnackbarCloseReason } from "@mui/joy/Snackbar";
import { DeckIconButton } from "../deck-icon-button";
import CloseRounded from "@mui/icons-material/CloseRounded";

const messageBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
};

const messageIconStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: 0.75,
};

const snackbarStyles = (first: boolean = false): SxProps => ({
  position: "relative",
  minWidth: "unset",
  "--Snackbar-inset": "0",
  "--Snackbar-radius": "unset",
  "--Snackbar-padding": first ? "0.5rem" : "0.25rem",
  px: "0.5rem",
  border: "unset",
  bgcolor: first ? "var(--joy-palette-background-body)" : "var(--joy-palette-background-surface)",

  ...(first && {
    borderBottom: "1px solid",
    borderColor: "var(--joy-palette-divider)",
  }),
});

export const DeckSnackbarMessage: React.FC<IDeckSnackbarMessageProps> = ({
  textIcon = null,
  customIcon = null,
  title = "",
  message = "",
  color = "primary",
  autoHideDuration = -1,
  onClose = () => {},
  first = false,
}) => {
  const hasCustomIcon = customIcon !== null;
  const hasTextIcon = textIcon !== null;

  const hasIcon = hasCustomIcon || hasTextIcon;

  const handleClose = (reason: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    onClose();
  };

  const endDecorator = (
    <DeckIconButton icon={<CloseRounded />} variant="plain" onClick={() => handleClose("escapeKeyDown")} />
  );
  return (
    <Snackbar
      open
      autoHideDuration={autoHideDuration}
      endDecorator={endDecorator}
      color={color}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={snackbarStyles(first)}
    >
      <Box sx={messageBoxStyle}>
        {hasIcon && (
          <Box sx={messageIconStyle}>
            {hasTextIcon ? <DeckSnackbarTextIconComponent textIcon={textIcon} /> : customIcon}
          </Box>
        )}
        <DeckLabel
          title={{ text: title, limit: first ? 2 : 1 }}
          description={{ text: message, limit: first ? 4 : 1 }}
        />
      </Box>
    </Snackbar>
  );
};

export const DeckSnackbarTextIconComponent: React.FC<{ textIcon: DeckSnackbarTextIcon }> = ({ textIcon }) => {
  switch (textIcon) {
    case "success":
      return <DoneAllRounded />;
    case "error":
      return <ErrorRounded />;
    case "warning":
      return <WarningRounded />;
    case "info":
      return <NearbyErrorRounded />;
    default:
      return null;
  }
};
