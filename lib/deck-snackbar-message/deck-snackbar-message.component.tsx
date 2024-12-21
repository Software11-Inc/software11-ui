import React, { useEffect, useState } from "react";
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
import { LinearProgress } from "@mui/joy";

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
  const [progress, setProgress] = useState(100);

  console.log("Progress", progress);

  const hasCustomIcon = customIcon !== null;
  const hasTextIcon = textIcon !== null;

  const hasIcon = hasCustomIcon || hasTextIcon;

  const handleClose = (reason: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    onClose();
  };

  useEffect(() => {
    if (autoHideDuration === -1) return;
    let startTime = Date.now();

    // This function updates progress on each animation frame
    function updateProgress() {
      const elapsed = Date.now() - startTime;
      const fraction = elapsed / autoHideDuration; // how much of the time has passed
      const newProgress = 100 - Math.floor(fraction * 100);

      if (newProgress <= 0) {
        setProgress(0);
      } else {
        setProgress(newProgress);
        requestAnimationFrame(updateProgress); // schedule next frame
      }
    }

    // Start animation
    const requestId = requestAnimationFrame(updateProgress);

    // Cleanup on unmount
    return () => cancelAnimationFrame(requestId);
  }, [autoHideDuration]);

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
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgcolor: "transparent",
        }}
      >
        <LinearProgress determinate thickness={1} value={progress} />
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
