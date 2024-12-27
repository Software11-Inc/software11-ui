import type { IconButtonProps as MuiButtonProps } from "@mui/joy/IconButton";

type ButtonBaseProps = Pick<MuiButtonProps, "color" | "size" | "variant" | "disabled" | "hidden">;

export interface DeckIconButtonProps extends ButtonBaseProps {
  icon: React.ReactNode;
  rounded?: boolean;
  label?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}
