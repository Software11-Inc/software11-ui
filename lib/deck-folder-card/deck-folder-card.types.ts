import { IFolder, Size } from "@models";

export interface IDeckFolderCardProps {
  size?: Size;
  item?: IFolder;
  tagLimit?: number;
  onClick?: () => void;
  onOpen?: () => void;
}
