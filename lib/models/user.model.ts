import { IDate } from "./date.model";

export interface IUser {
  email?: string;
  firstName?: string;
  lastName?: string;
  profilePhoto?: string;
  username?: string;
  role?: string;
}

export interface IAuthUser extends IUser {
  id?: string;
  lastLogin?: IDate;
  lastUpdate: IDate;
}

export interface ISession {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  customToken: string;
}
