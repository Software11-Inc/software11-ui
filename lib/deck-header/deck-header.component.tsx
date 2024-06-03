import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/joy";
// import type { ButtonProps as MuiButtonProps } from "@mui/joy/Button";
// import MuiButton from "@mui/joy/Button";
import React from "react";

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const DeckHeader: React.FC<ButtonProps> = ({
  label,
  ...rest
}: ButtonProps) => <MuiButton {...rest}>{label}</MuiButton>;
