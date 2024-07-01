import { IDataGroupCommonProps, ITableFigure } from "@models";

export interface DeckDatasetDataGroupProps extends IDataGroupCommonProps {
  groupName: string;
  items: ITableFigure[];
}
