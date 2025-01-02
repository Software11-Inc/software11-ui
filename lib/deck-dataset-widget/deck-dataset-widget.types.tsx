import { FigureUserChangeMap } from "../models/dataset-changes.model";

export interface DeckDatasetWidgetProps {
  name?: string;
  description?: string;
  highlighted?: boolean;
  loading?: boolean;
  changes?: FigureUserChangeMap;
  onSelectCell?: (cell: string) => void;
  onOpen?: () => void;
  groupNameChangeTitle?: string;
  groupNameChangeDescription?: string;
}
