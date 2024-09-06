import { IFolder, Size } from "@models";

export interface IDeckFolderCardProps {
  size?: Size;
  item?: IFolder;
  onClick?: () => void;
  onOpen?: () => void;
}
