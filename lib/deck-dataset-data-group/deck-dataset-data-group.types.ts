import { DatasetType, FigureShapeMap, IDataCommonProps, ITableFigure, ShapeChangeMap } from "@models";

export interface DeckDatasetDataGroupProps extends IDataCommonProps {
  groupName: string;
  items: ITableFigure[];
  type: DatasetType;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;
  shapes: FigureShapeMap;
}
