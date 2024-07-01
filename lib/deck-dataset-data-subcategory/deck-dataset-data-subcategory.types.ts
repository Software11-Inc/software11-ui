import { IDataGroupCommonProps, OnceGroupedTableFigure } from "@models";

export interface DeckDatasetDataSubcategoryProps extends IDataGroupCommonProps {
  groupName: string;
  items: OnceGroupedTableFigure;
}
