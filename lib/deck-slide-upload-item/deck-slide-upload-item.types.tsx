import { ILibrarySlide } from "../models/library-slide.model";

export enum UploadGeneralState {
  INIT = "INIT",
  LOADED = "LOADED",
}

export interface IDeckSlideUploadItem {
  slideName?: string;
  previewImage?: string;
  base64Image?: string;
  loaded?: boolean;
  loading?: boolean;
  saved?: boolean;
  ignore?: boolean;
  disabled?: boolean;
  item?: Partial<ILibrarySlide>;
  onSave?: (name?: string, tags?: string[]) => void;
  onEdit?: () => void;
  onIgnore?: () => void;
  onContinue?: () => void;
}
