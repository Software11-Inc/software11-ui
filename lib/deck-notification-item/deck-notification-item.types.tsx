import { ColorPaletteProp } from "@mui/joy/styles";
import { DeckSnackbarTextIcon } from "../models/notification.model";
import { RowProperties } from "../deck-label/deck-label.types";
import { IActionButton } from "../models/action-button.model";

export interface DeckNotificationItemProps {
  title?: RowProperties;
  description?: RowProperties;
  message?: string;
  customIcon?: React.ReactNode;
  textIcon?: DeckSnackbarTextIcon;
  fileTypes?: string[];
  color?: ColorPaletteProp;
  defaultExpanded?: boolean;
  expanded?: boolean;
  fade?: boolean;
  onClick?: () => void;
  onClear?: () => void;
  action?: IActionButton;
}
