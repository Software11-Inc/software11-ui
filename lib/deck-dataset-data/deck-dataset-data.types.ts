import {
  DatasetType,
  FigureShapeMap,
  IDataCommonProps,
  OnceGroupedTableFigure,
  ShapeChangeMap,
  TwiceGroupedTableFigure,
} from "@models";

export interface DeckDatasetDataProps extends IDataCommonProps {
  data: OnceGroupedTableFigure | TwiceGroupedTableFigure;
  type: DatasetType;
  shapes: FigureShapeMap;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;
}
