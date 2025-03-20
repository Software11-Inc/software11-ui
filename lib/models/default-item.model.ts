import { IDate } from "./date.model";
import { IUser } from "./user.model";

/**
 * Interface representing the default structure for items within the system.
 * It includes both mandatory and optional properties for comprehensive item management.
 */
export interface IDefaultItem {
  id?: string; // Optional unique identifier for the item
  name: string; // Name of the item
  description?: string; // Optional description of the item
  tags: string[]; // Array of tags associated with the item for categorization
  generationUser: IUser; // User who generated/created the item
  latestUpdatedUser?: IUser; // Optional user who last updated the item (deprecated, use latestUpdateUser)
  latestUpdateUser?: IUser; // Optional user who last updated the item
  createdAt: IDate; // Date when the item was generated/created
  lastUpdated: IDate; // Date when the item was last updated
  latestUpdateTime?: IDate; // Optional time of the latest update to the item
  versionNumber: number; // Version number of the item, indicating its iteration
}
