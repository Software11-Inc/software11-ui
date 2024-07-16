import { IDatasetChange } from "../models/dataset-changes.model";

export interface IDeckFigureChangeProps {
  change: IDatasetChange;
  defaultExpanded?: boolean;
}
