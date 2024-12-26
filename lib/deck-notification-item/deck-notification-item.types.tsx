import { ColorPaletteProp } from "@mui/joy/styles";
import { DeckSnackbarTextIcon } from "../models/notification.model";
import { RowProperties } from "../deck-label/deck-label.types";
import { IActionButton } from "../models/action-button.model";
import { IUser } from "../models/user.model";
import { ISourceProject } from "../models/dataset-tree.model";
import { DeckApplcationType } from "../models/application.model";

export interface DeckNotificationItemProps {
  title?: RowProperties;
  description?: RowProperties;
  author?: IUser;
  sourceProject?: ISourceProject;
  source: DeckApplcationType;
  customIcon?: React.ReactNode;
  textIcon?: DeckSnackbarTextIcon;
  color?: ColorPaletteProp;
  defaultExpanded?: boolean;
  expanded?: boolean;
  fade?: boolean;
  onClick?: () => void;
  onClear?: () => void;
  actionButton?: IActionButton;
  action?: string;
  objectName?: string;
}
