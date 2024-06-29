import { Size } from "./common.model";
import { ITableFigure } from "./figure.model";

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
