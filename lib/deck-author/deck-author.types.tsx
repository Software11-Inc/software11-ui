import { IUser, Size } from "@models";
import { ColorPaletteProp } from "@mui/joy/styles";

export interface IDeckAuthorProps {
  user?: IUser;
  showName?: boolean;
  showAvatar?: boolean;
  size?: Size;
  color?: ColorPaletteProp;
}
