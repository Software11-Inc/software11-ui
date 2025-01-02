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
  onAuthorClick?: () => void;
  authorLabel?: string;

  sourceProject?: ISourceProject;
  onSourceProjectClick?: () => void;
  sourceProjectLabel?: string;

  action?: string;
  onActionClick?: () => void;
  actionLabel?: string;

  objectName?: string;
  onObjectNameClick?: () => void;
  objectNameLabel?: string;

  actionButtons?: IActionButton[];

  expanded?: boolean;

  fade?: boolean;

  color?: ColorPaletteProp;
  defaultExpanded?: boolean;
  source: DeckApplcationType;
  customIcon?: React.ReactNode;
  textIcon?: DeckSnackbarTextIcon;

  onClick?: () => void;
  onClear?: () => void;
  onMouseEnter?: () => void;
}
