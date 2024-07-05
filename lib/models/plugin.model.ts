import { IDefaultItem } from "./default-item.model";

export interface IPlugin extends Partial<IDefaultItem> {
  description: string;
  logoSrc: string;
  isRecommended?: boolean;
}
