import { IDefaultItem } from "./default-item.model";

export interface ILibraryImage extends IDefaultItem {
  previewImage?: string;
  storedFileUrl?: string;
}
