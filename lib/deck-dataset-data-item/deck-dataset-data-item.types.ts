import { DatasetType, IDataCommonProps, IDynamicShape, IFigure, IShapeChange } from "@models";

export interface DeckDatasetDataItemProps extends IDataCommonProps {
  figure?: IFigure;
  shapes?: IDynamicShape[];
  apiChanges?: IShapeChange[];
  userChanges?: IShapeChange[];
  type?: DatasetType;
  onAdd?: () => void;
  onReset?: () => void;
  onSync?: () => void;
  onSettings?: () => void;
}
