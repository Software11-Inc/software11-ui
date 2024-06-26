import { DatasetType, ITableFigure } from "@models";
import { IDataCommonProps } from "../deck-dataset-data-item/deck-dataset-data-item.types";

export interface DeckDatasetDataGroupProps extends IDataCommonProps {
  groupName: string;
  items: ITableFigure[];
  type: DatasetType;
}
