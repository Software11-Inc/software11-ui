import { DeckSnackbarTextIcon } from "@models";
import { ColorPaletteProp } from "@mui/joy/styles";

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
