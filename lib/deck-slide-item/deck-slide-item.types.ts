import { IErrorMessage, ILibrarySlide } from "@models";
import { RowProperties } from "../deck-label/deck-label.types";

export enum ItemState {
  DEFAULT = "DEFAULT",
  INSERTING = "INSERTING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface IDeckSlideItemProps {
  item: ILibrarySlide;
  errorMessage?: IErrorMessage;
  state?: ItemState;

  title?: RowProperties;
  description?: RowProperties;

  previewImage?: string;

  buttonText?: string;
  loadingText?: string;
  successText?: string;

  onImageClick?: () => void;
  onOpen?: () => void;
  onUpgrade?: () => void;
}
