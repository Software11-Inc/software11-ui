import { IErrorMessage, ILibrarySlide } from "@models";

export enum ItemState {
  DEFAULT = "DEFAULT",
  INSERTING = "INSERTING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface IDeckSlideItemProps {
  item: ILibrarySlide;
  errorMessage?: IErrorMessage;
  onInsert?: () => void;
  state?: ItemState;
}
