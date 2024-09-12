import Snackbar, { SnackbarCloseReason } from "@mui/joy/Snackbar";
import React, { memo, useMemo } from "react";
import { DeckLabel } from "../deck-label";
import { snackbarStyles } from "./deck-snackbar.styles";
import { IDeckSnackbarProps } from "./deck-snackbar.types";

const DeckSnackbar = memo(
  ({
    open,
    color = "primary",
    title,
    description,
    startDecorator = null,
    endDecorator = null,
    handleClose,
  }: IDeckSnackbarProps) => {
    const safeHandleClose = (_: any, reason: SnackbarCloseReason) => {
      if (typeof handleClose === "function") {
        handleClose(reason);
      }
    };

    const memoizedStartDecorator = useMemo(
      () => (startDecorator ? React.cloneElement(startDecorator, {}) : null),
      [startDecorator]
    );
    const memoizedEndDecorator = useMemo(
      () => (endDecorator ? React.cloneElement(endDecorator, { color }) : null),
      [endDecorator, color]
    );

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        color={color}
        open={open}
        autoHideDuration={6000}
        onClose={safeHandleClose}
        sx={snackbarStyles}
        startDecorator={memoizedStartDecorator}
        endDecorator={memoizedEndDecorator}
      >
        <DeckLabel title={{ text: title }} description={{ text: description }} color={color} />
      </Snackbar>
    );
  }
);

export { DeckSnackbar };
