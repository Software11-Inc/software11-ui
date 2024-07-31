import { IDate } from "./date.model";
import { IDefaultItem } from "./default-item.model";

/**
 * Interface representing a library slide, extending the default item properties.
 * It includes optional properties for managing slide resources and metadata.
 */
export interface ILibrarySlide extends IDefaultItem {
  previewImage?: string; // Optional URL for the slide's preview image
  storedFileURL?: string[]; // Optional URL where the slide's file is stored
  latestUpdateTime?: IDate; // Optional date of the latest update to the slide
}
