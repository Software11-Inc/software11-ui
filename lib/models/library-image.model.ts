import { IDefaultItem } from "./default-item.model";

/**
 * Interface representing a library image, extending the default item properties.
 * It includes optional properties for managing image resources.
 */
export interface ILibraryImage extends IDefaultItem {
  previewImage?: string; // Optional URL for the image's preview
  storedFileUrl?: string; // Optional URL where the actual image file is stored
}
