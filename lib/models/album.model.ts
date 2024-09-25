import { IDefaultItem } from "./default-item.model";

export interface IFolder extends Partial<IDefaultItem> {
  albumID: string;
  library: any; // TODO: Figure out what this is
  images: IImage[];
  itemsCount: number;
}

export interface IAlbum extends Partial<IDefaultItem> {
  folders: IFolder[];
  folderID?: string;
  itemsCount: number;
}

export interface IImage extends Partial<IDefaultItem> {
  storedFileURL?: string;
  folderID?: string;
  albumID?: string;
  previewImageURL?: string;
}
