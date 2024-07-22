import { ITableFigure } from "../models/figure.model";

export interface IDeckRepeaterSelectFigureDrawerProps {
  figures: ITableFigure[];
  selected?: string;
  open: boolean;
  onClose: () => void;
  onSelect: (value: ITableFigure) => void;
}
