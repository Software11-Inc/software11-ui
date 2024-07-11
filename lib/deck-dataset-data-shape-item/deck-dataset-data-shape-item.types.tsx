import { IDynamicShape } from "@models";

export interface IDeckDatasetDataShapeItemProps {
  figureName?: string;
  shape?: IDynamicShape;
  isSelected?: boolean;
  hasApiChanges?: boolean;
  hasUserChanges?: boolean;
  loading?: boolean;
  onReset?: () => void;
  onSync?: () => void;
  onDelete?: () => void;
  onCopy?: () => void;
  onMouseEnter?: () => void;
}
