import { ITableFigure } from "./figure.model";

export type OnceGroupedTableFigure = Record<string, ITableFigure[]>;

export type TwiceGroupedTableFigure = Record<string, OnceGroupedTableFigure>;

export type GroupedTableFigure =
  | OnceGroupedTableFigure
  | TwiceGroupedTableFigure;
