import Box from "@mui/joy/Box";
import type { IconButtonProps as MuiButtonProps } from "@mui/joy/IconButton";
import IconButton from "@mui/joy/IconButton";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { SxProps } from "@mui/joy/styles/types";
import React from "react";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "color" | "size" | "variant" | "disabled" | "hidden"
>;

export interface DeckIconButtonProps extends ButtonBaseProps {
  icon: React.ReactNode;
  rounded?: boolean;
  onClick?: () => void;
}

const className = "small-icon-button";

const iconButtonStyle = (rounded = false, size = "sm"): SxProps => ({
  fontSize: "12px",
  lineHeight: "14px",
  padding: "0.25rem ",
  minHeight: "unset",
  minWidth: "unset",
  borderRadius: rounded ? "50%" : "var(--border-radius)",

  [`&.${className} > .${svgIconClasses.root}`]: {
    fontSize: size === "sm" ? "16px" : size === "md" ? "20px" : "24px",
    transition: "transform 0.2s ease-in-out",
  },

  ["&:not(:disabled):hover"]: {
    [`&.${className} > .${svgIconClasses.root}`]: {
      transform: "scale(1.3)",
    },
  },
});

export const DeckIconButton: React.FC<DeckIconButtonProps> = (props) => {
  return (
    <React.Fragment>
      <Box>
        <IconButton
          sx={iconButtonStyle(props.rounded, props.size)}
          color={props.color}
          variant={props.variant}
          disabled={props.disabled}
          hidden={props.hidden}
          className={[className, props.hidden ? "hidden" : ""].join(" ")}
          onClick={props.onClick}
        >
          {props.icon}
        </IconButton>
      </Box>
    </React.Fragment>
  );
};
