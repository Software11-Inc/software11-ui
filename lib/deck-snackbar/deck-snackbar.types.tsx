import { SnackbarCloseReason } from "@mui/joy/Snackbar";
import { ColorPaletteProp } from "@mui/joy/styles/types";

export interface IDeckSnackbarProps {
  open: boolean;
  color: ColorPaletteProp;
  autoHideDuration?: number;
  title?: string;
  description?: string;
  startDecorator?: React.ReactElement | null;
  endDecorator?: React.ReactElement | null;
  handleClose: (reason: SnackbarCloseReason) => void;
}
