import { IErrorMessage } from "../models/error-message.model";
import { ILibrarySlide } from "../models/library-slide.model";

export enum UploadGeneralState {
  NONE = "general-state-none",
  EDIT = "general-state-edit",
  SAVED = "general-state-saved",
  PROCESSING = "general-state-processing",
}

export enum UploadLoadingState {
  NONE = "loading-state-none",
  LOADING = "loading-state-loading",
  LOADED = "loading-state-loaded",
  ERROR = "loading-state-error",
}

export interface IDeckSlideUploadItem {
  generalState?: UploadGeneralState;
  loadingState?: UploadLoadingState;
  errorMessage?: IErrorMessage;
  slideName?: string;
  previewImage?: string;
  base64Image?: string;
  loaded?: boolean;
  disabled?: boolean;
  item?: Partial<ILibrarySlide>;
  onSave?: (name?: string, tags?: string[]) => void;
  onEdit?: () => void;
  onIgnore?: () => void;
  onContinue?: () => void;
  onCancel?: () => void;
  onReset?: () => void;
  onRetry?: () => void;
}
