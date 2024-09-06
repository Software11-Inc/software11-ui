import { IDefaultItem } from "./default-item.model";

export interface IFolder extends Partial<IDefaultItem> {
  albumID: string;
  library: any; // TODO: Figure out what this is
}

export interface IAlbum extends Partial<IDefaultItem> {
  folders: IFolder[];
  itemsCount: number;
}
