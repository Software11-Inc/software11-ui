import { IDate } from "./date.model";
import { IUser } from "./user.model";

export interface IDefaultItem {
  id?: string;
  name: string;
  description?: string;
  tags: string[];
  generationUser: IUser;
  latestUpdatedUser?: IUser;
  latestUpdateUser?: IUser;
  generationDate: IDate;
  lastUpdated: IDate;
  latestUpdateTime?: IDate;
  versionNumber: number;
}
