import { IDefaultItem } from "./default-item.model";

export type DeckSnackbarTextIcon = "success" | "error" | "warning" | "info";

export type DeckNotificationSource = "web" | "powerpoint" | "excel";

export type DeckNotificationAction = "create" | "update" | "delete" | "upload";

export type DeckNotificationObjectType = "dataset" | "slide" | "project" | "template" | "image" | "album" | "folder";

export interface INotification extends IDefaultItem {
  source?: {
    application: DeckNotificationSource;
  };

  // Information about the project from which the dataset originates
  sourceProject?: {
    id: string; // ID of the source project
    name: string; // Name of the source project
    description?: string; // Optional description of the source project
  };

  action?: DeckNotificationAction;

  objectType?: DeckNotificationObjectType;

  objectID?: string;

  objectName?: string;

  isRead?: boolean;

  severity?: DeckSnackbarTextIcon;

  textIcon?: DeckSnackbarTextIcon;
}
