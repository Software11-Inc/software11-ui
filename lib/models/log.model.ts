import { IDefaultItem } from "./default-item.model";
import { IDynamicShape } from "./shape.model";
import { IUser } from "./user.model";

// Define types for the Office storage and user actions.
export type LoggerActionType = "settings" | "presentation" | "shapes" | "logger" | "project" | "instance" | "dataset";
export type LoggerUserAction = "add" | "update" | "delete" | "connect" | "disconnect" | "create" | "replace";

export interface LoggerItem {
  id: string;
  action: LoggerUserAction;
  type: LoggerActionType;
  item: Partial<IDefaultItem> | Partial<IDynamicShape>;
  changes: {
    initial: Partial<IDefaultItem> | Partial<IDynamicShape>;
    final: Partial<IDefaultItem> | Partial<IDynamicShape>;
  };
  user: IUser;
  timestamp: number;
  api: boolean;
}
