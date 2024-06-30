import { DatasetType, IDataCommonProps, OnceGroupedTableFigure, TwiceGroupedTableFigure } from "@models";

export interface DeckDatasetDataSubcategoryProps extends IDataCommonProps {
  groupName: string;
  items: OnceGroupedTableFigure;
  type: DatasetType;
}
