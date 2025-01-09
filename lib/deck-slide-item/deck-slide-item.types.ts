import { IErrorMessage, ILibrarySlide } from "@models";
import { RowProperties } from "../deck-label/deck-label.types";

export enum ItemState {
  DEFAULT = "DEFAULT",
  INSERTING = "INSERTING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface IDeckMenuItem {
  icon: JSX.Element;
  title?: RowProperties;
  description?: RowProperties;
  onClick: () => void;
  disabled?: boolean;
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

  menuItems: IDeckMenuItem[];
}
