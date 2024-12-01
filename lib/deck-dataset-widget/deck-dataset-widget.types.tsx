import { DatasetFigureChangeMap } from "../models/dataset-changes.model";

export interface DeckDatasetWidgetProps {
  name?: string;
  description?: string;
  highlighted?: boolean;
  loading?: boolean;
  changes?: DatasetFigureChangeMap;
  onSelectCell?: (cell: string) => void;
  onOpen?: () => void;
}
