import { FigureShapeMap, IShapeChange, ShapeChangeMap } from "@models";

export interface DeckDatasetShapesProps {
  name?: string;
  description?: string;
  hasChanges?: boolean;
  loading?: boolean;
  highlighted?: boolean;
  highlightedShapes?: string[];
  shapes: FigureShapeMap;
  apiChanges: ShapeChangeMap;
  userChanges: ShapeChangeMap;
  loaded: boolean;
  disabled?: boolean;

  onOpenDataset: () => void;
  onSyncDataset: () => void;
  onResetFigure: (figureID: string, shapeIDs: IShapeChange[]) => void;
  onSyncFigure: (figureID: string, shapeIDs: IShapeChange[]) => void;
  onSelectShapes: (shapeIDs: string[]) => void;
}
