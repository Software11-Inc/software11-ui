import { IDefaultItem } from "./default-item.model";

export type DeckSnackbarTextIcon = "success" | "error" | "warning" | "info";

export type DeckNotificationSource = "web" | "powerpoint" | "excel";

export type DeckNotificationAction = "create" | "update" | "delete" | "upload";

export type DeckNotificationObjectType = "dataset" | "slide" | "project" | "template" | "image" | "album" | "folder";

export interface INotification extends IDefaultItem {
  source?: {
    application: DeckNotificationSource;
  };

  action?: DeckNotificationAction;

  objectType?: DeckNotificationObjectType;

  objectID?: string;

  objectName?: string;

  isRead?: boolean;

  severity?: DeckSnackbarTextIcon;

  textIcon?: DeckSnackbarTextIcon;
}
