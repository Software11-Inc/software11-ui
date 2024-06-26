import { DatasetType, IDynamicShape, IFigure, IShapeChange } from "@models";
import { Size } from "../accordion.style";

export interface DeckDatasetDataItemProps extends IDataCommonProps {
  figure: IFigure;
  shapes: IDynamicShape[];
  apiChanges: IShapeChange[];
  userChanges: IShapeChange[];
  type: DatasetType;
}

export interface IDataCommonProps {
  hasStatus?: boolean;
  hasActions?: boolean;
  compact?: boolean;
  size?: Size;
  level?: number;
}
