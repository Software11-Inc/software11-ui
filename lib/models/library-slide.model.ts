import { ISourceProject } from "./dataset-tree.model";
import { IDefaultItem } from "./default-item.model";

/**
 * Interface representing a library slide, extending the default item properties.
 * It includes optional properties for managing slide resources and metadata.
 */
export interface ILibrarySlide extends IDefaultItem {
  previewImageURL?: string; // Optional URL for the slide's preview image
  storedFileURL?: string; // Optional URL where the slide's file is stored
  sourceProject?: ISourceProject; // The project where the slide is sourced from
}
