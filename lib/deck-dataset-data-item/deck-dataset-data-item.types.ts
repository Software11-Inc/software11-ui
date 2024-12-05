import { DatasetType, IDataCommonProps, IDynamicShape, IFigure, IFigureUserChange, IShapeChange } from "@models";

export interface DeckDatasetDataItemProps extends IDataCommonProps {
  figure?: IFigure;
  shapes?: IDynamicShape[];
  shapeApiChanges?: IShapeChange[];
  shapeUserChanges?: IShapeChange[];
  figureUserChange?: IFigureUserChange;
  type?: DatasetType;
  onAdd?: () => void;
  onReset?: () => void;
  onSync?: () => void;
  onSettings?: () => void;
  onSelectCell?: (cell: string) => void;
}
