import { DatasetType, FigureShapeMap, IDataCommonProps, OnceGroupedTableFigure, ShapeChangeMap } from "@models";

export interface DeckDatasetDataSubcategoryProps extends IDataCommonProps {
  groupName: string;
  items: OnceGroupedTableFigure;
  type: DatasetType;
  shapes: FigureShapeMap;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;
}
