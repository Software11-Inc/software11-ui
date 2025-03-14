import { IDynamicShape, IShapeChange } from "@models";
import { RowProperties } from "../deck-label/deck-label.types";

interface TooltipProps {
  title?: RowProperties;
  description?: RowProperties;
}

export interface IDeckDatasetDataShapeItemProps {
  figureName?: string;
  emptyValue?: string;
  shape?: IDynamicShape;
  isSelected?: boolean;
  apiChange?: IShapeChange;
  userChange?: IShapeChange;
  loading?: boolean;
  onReset?: () => void;
  resetTooltip?: TooltipProps;
  onSync?: () => void;
  syncTooltip?: TooltipProps;
  onDelete?: () => void;
  deleteTooltip?: TooltipProps;
  onCopy?: () => void;
  onUnlink?: () => void;
  unlinkTooltip?: TooltipProps;
  onMouseEnter?: () => void;
}
