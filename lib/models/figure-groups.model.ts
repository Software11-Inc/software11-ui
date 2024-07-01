import { Size } from "./common.model";
import { DatasetType } from "./dataset.model";
import { ITableFigure } from "./figure.model";
import { FigureShapeMap, ShapeChangeMap } from "./shape.model";

export type OnceGroupedTableFigure = Record<string, ITableFigure[]>;

export type TwiceGroupedTableFigure = Record<string, OnceGroupedTableFigure>;

export type GroupedTableFigure = OnceGroupedTableFigure | TwiceGroupedTableFigure;

export interface IDataCommonProps {
  hasStatus?: boolean;
  hasActions?: boolean;
  compact?: boolean;
  size?: Size;
  level?: number;
}

export interface IDataGroupCommonProps extends IDataCommonProps {
  type: DatasetType;
  shapes: FigureShapeMap;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;

  onAddShape?: (figureID: string) => void;
  onResetShapes?: (figureID: string, shapeIDs: string[]) => void;
  onSyncShapes?: (figureID: string, shapeIDs: string[]) => void;
  onSettings?: (figureID: string) => void;
}
