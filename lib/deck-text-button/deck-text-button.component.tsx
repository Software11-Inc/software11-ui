import Button from "@mui/joy/Button";
import { IDeckTextButtonProps } from "./deck-text-button.types";
import { iconButtonSxProps } from "./deck-text-button.styles";
import Box from "@mui/joy/Box";
import React from "react";

export const DeckTextButton: React.FC<IDeckTextButtonProps> = ({
  icon,
  text,
  action,
  disabled,
  color,
  variant,
  active,
  hasShadow = false,
}) => {
  return (
    <Button
      variant={active ? "solid" : variant || "soft"}
      color={color}
      disabled={disabled}
      size="sm"
      className={`${active ? "active" : ""} `}
      sx={iconButtonSxProps({ hasShadow })}
      onClick={action}
    >
      <Box>
        {icon}
        <div>{text}</div>
      </Box>
    </Button>
  );
};
