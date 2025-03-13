import { IDynamicShape, IShapeChange } from "@models";

export interface IDeckDatasetDataShapeItemProps {
  figureName?: string;
  emptyValue?: string;
  shape?: IDynamicShape;
  isSelected?: boolean;
  apiChange?: IShapeChange;
  userChange?: IShapeChange;
  loading?: boolean;
  onReset?: () => void;
  onSync?: () => void;
  onDelete?: () => void;
  onCopy?: () => void;
  onUnlink?: () => void;
  onMouseEnter?: () => void;
}
