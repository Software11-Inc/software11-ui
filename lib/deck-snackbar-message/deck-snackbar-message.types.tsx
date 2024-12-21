import { ColorPaletteProp } from "@mui/joy/styles";

export type DeckSnackbarTextIcon = "success" | "error" | "warning" | "info";

export const deckSnackbarTextIcon: DeckSnackbarTextIcon[] = ["success", "error", "warning", "info"];

export interface IDeckSnackbarMessageProps {
  textIcon?: DeckSnackbarTextIcon;
  customIcon?: React.ReactElement;
  title?: string;
  message?: string;
  color?: ColorPaletteProp;
  autoHideDuration?: number;
  onClose?: () => void;
  first?: boolean;
}
