import { ITableFigure } from "../models/figure.model";
import { IDynamicShape, ISelectedShape } from "../models/shape.model";

export interface IDeckSelectShapeProps {
  shape: ISelectedShape;
  dynamicShape?: IDynamicShape;
  figure?: ITableFigure;
  datasetName?: string;
  checked?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  onOpen?: () => void;
  onClick?: () => void;
}
