import { ILibrarySlide } from "@models";

export interface IDeckSlideItemProps {
  item: ILibrarySlide;
  onInsert?: () => void;
}
