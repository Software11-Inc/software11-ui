import { IDate } from "./date.model";
import { IDefaultItem } from "./default-item.model";

export interface ILibrarySlide extends IDefaultItem {
  previewImage?: string;
  storedFileUrl?: string;
  latestUpdateTime?: IDate;
}
