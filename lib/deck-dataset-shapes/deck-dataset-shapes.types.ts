import { FigureShapeMap, ShapeChangeMap } from "@models";

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

  onOpenDataset: () => void;
  onSyncDataset: () => void;
  onResetFigure: (figureID: string, shapeIDs: string[]) => void;
  onSyncFigure: (figureID: string, shapeIDs: string[]) => void;
  onSelectShapes: (shapeIDs: string[]) => void;
}
