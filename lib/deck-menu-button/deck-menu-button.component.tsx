import Button from "@mui/joy/Button";
import React from "react";
import {
  buttonClass,
  buttonContentClass,
  buttonHeaderClass,
  buttonTextClass,
  menuButtonStyles,
} from "./deck-menu-button.styles";
import { DeckMenuButtonProps } from "./deck-menu-button.types";

export const DeckMenuButton: React.FC<DeckMenuButtonProps> = ({
  buttonKey,
  action,
  header,
  text,
  iconStart,
  iconEnd,
  color = "primary",
  variant = "solid",
  disabled = false,
  hidden = false,
}) => {
  return (
    <React.Fragment>
      <Button
        key={buttonKey}
        className={buttonClass}
        sx={menuButtonStyles}
        fullWidth
        color={color}
        variant={variant}
        disabled={disabled}
        hidden={hidden}
        onClick={action}
        startDecorator={iconStart}
        endDecorator={iconEnd}
      >
        <div className={buttonContentClass}>
          <div className={buttonHeaderClass}>{header}</div>
          {Boolean(text?.length) && <div className={buttonTextClass}>{text}</div>}
        </div>
      </Button>
    </React.Fragment>
  );
};
