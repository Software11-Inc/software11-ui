import type { IconButtonProps as MuiButtonProps } from "@mui/joy/IconButton";

type ButtonBaseProps = Pick<MuiButtonProps, "color" | "variant" | "disabled" | "hidden">;

export interface DeckIconButtonProps extends ButtonBaseProps {
  icon: React.ReactNode;
  rounded?: boolean;
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
  onMouseEnter?: () => void;
}
