import { IDefaultItem } from "./default-item.model";

export interface IFolder extends Partial<IDefaultItem> {
  albumID: string;
  library: any; // TODO: Figure out what this is
  images: IImage[];
}

export interface IAlbum extends Partial<IDefaultItem> {
  folders: IFolder[];
  itemsCount: number;
}

export interface IImage extends Partial<IDefaultItem> {
  storedFileURL?: string;
  folder?: string; // TODO: Change to folderID
  previewImageURL?: string;
}
