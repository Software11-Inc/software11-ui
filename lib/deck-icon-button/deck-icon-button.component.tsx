import IconButton from "@mui/joy/IconButton";
import React from "react";
import { className, iconButtonStyle } from "./deck-icon-button.style";
import { DeckIconButtonProps } from "./deck-icon-button.types";

export const DeckIconButton = React.forwardRef<HTMLButtonElement, DeckIconButtonProps>(
  (
    {
      rounded,
      size = "sm",
      color = "primary",
      variant = "soft",
      label,
      disabled,
      hidden,
      tabIndex = 0,
      onClick = () => {},
      onMouseEnter = () => {},
      icon,
    },
    ref
  ) => {
    const buttonSize = size === "xs" ? "sm" : size;
    return (
      <IconButton
        ref={ref}
        sx={iconButtonStyle(rounded, size, hidden, Boolean(label?.length), color)}
        size={buttonSize}
        color={color}
        variant={variant}
        disabled={disabled}
        hidden={hidden}
        className={[className, hidden ? "hidden" : ""].join(" ")}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
      >
        {icon}
        {label && <span className="deck-label">{label}</span>}
      </IconButton>
    );
  }
);

DeckIconButton.displayName = "DeckIconButton";
