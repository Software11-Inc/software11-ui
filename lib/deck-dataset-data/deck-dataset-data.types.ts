import { IDataGroupCommonProps, OnceGroupedTableFigure, TwiceGroupedTableFigure } from "@models";

export interface DeckDatasetDataProps extends IDataGroupCommonProps {
  data?: OnceGroupedTableFigure | TwiceGroupedTableFigure;
}
