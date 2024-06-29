import { DatasetType, FigureShapeMap, IDataCommonProps, ITableFigure, ShapeChangeMap } from "@models";

export interface DeckDatasetDataGroupProps extends IDataCommonProps {
  groupName: string;
  items: ITableFigure[];
  type: DatasetType;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;
  shapes: FigureShapeMap;

  onAddShape: (figureID: string) => void;
  onResetShapes: (figureID: string, shapeIDs: string[]) => void;
  onSyncShapes: (figureID: string, shapeIDs: string[]) => void;
  onSettings: (figureID: string) => void;
}
