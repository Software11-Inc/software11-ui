import IconButton from "@mui/joy/IconButton";
import React from "react";
import { className, iconButtonStyle } from "./deck-icon-button.style";
import { DeckIconButtonProps } from "./deck-icon-button.types";

export const DeckIconButton: React.FC<DeckIconButtonProps> = ({
  rounded,
  size = "sm",
  color = "primary",
  variant = "soft",
  disabled,
  hidden,
  onClick,
  icon,
}) => {
  return (
    <IconButton
      sx={iconButtonStyle(rounded, size, hidden)}
      size={size}
      color={color}
      variant={variant}
      disabled={disabled}
      hidden={hidden}
      className={[className, hidden ? "hidden" : ""].join(" ")}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};
