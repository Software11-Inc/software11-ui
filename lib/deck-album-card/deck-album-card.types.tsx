import { IAlbum, Size } from "@models";

export interface IDeckAlbumCardProps {
  size?: Size;
  item?: IAlbum;
  onClick?: () => void;
  onOpen?: () => void;
}
