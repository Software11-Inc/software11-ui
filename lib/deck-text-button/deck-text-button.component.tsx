import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import React from "react";
import { iconButtonSxProps } from "./deck-text-button.styles";
import { IDeckTextButtonProps } from "./deck-text-button.types";

export const DeckTextButton: React.FC<IDeckTextButtonProps> = ({
  icon,
  endIcon,
  text,
  textAlign = "center",
  size = "sm",
  action,
  disabled,
  color,
  variant,
  active,
  hasShadow = false,
  fullWidth = false,
  uppercase = true,
}) => {
  return (
    <Button
      variant={active ? "solid" : variant || "soft"}
      color={color}
      disabled={disabled}
      size={size}
      className={`${active ? "active" : ""} `}
      sx={iconButtonSxProps({ hasShadow, textAlign, uppercase, size })}
      endDecorator={endIcon}
      onClick={action}
      fullWidth={fullWidth}
    >
      <Box sx={{ display: "flex", flex: 1, justifyContent: textAlign }}>
        {icon}
        <div>{text}</div>
      </Box>
    </Button>
  );
};
