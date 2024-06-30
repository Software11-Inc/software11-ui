import { DatasetType, FigureShapeMap, IDataCommonProps, OnceGroupedTableFigure, ShapeChangeMap } from "@models";

export interface DeckDatasetDataSubcategoryProps extends IDataCommonProps {
  groupName: string;
  items: OnceGroupedTableFigure;
  type: DatasetType;
  shapes: FigureShapeMap;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;

  onAddShape: (figureID: string) => void;
  onResetShapes: (figureID: string, shapeIDs: string[]) => void;
  onSyncShapes: (figureID: string, shapeIDs: string[]) => void;
  onSettings: (figureID: string) => void;
}
