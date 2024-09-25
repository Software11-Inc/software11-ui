import { IAlbum, Size } from "@models";

export interface IDeckAlbumCardProps {
  size?: Size;
  item?: IAlbum;
  tagLimit?: number;
  onClick?: () => void;
  onOpen?: () => void;
}
