import { ILibrarySlide } from "../models/library-slide.model";

export interface IDeckSlideUploadItem {
  slideName?: string;
  previewImage?: string;
  base64Image?: string;
  loaded?: boolean;
  saved?: boolean;
  ignore?: boolean;
  item?: Partial<ILibrarySlide>;
  onSave?: (name?: string, tags?: string[]) => void;
}
