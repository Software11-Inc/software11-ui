import { IDate } from "./date.model";

/**
 * Interface representing a basic user with optional properties for personal and authentication details.
 */
export interface IUser {
  userId?: string; // Optional unique identifier for the user
  email?: string; // Optional email of the user
  firstName?: string; // Optional first name of the user
  lastName?: string; // Optional last name of the user
  profilePhoto?: string; // Optional URL of the user's profile photo
  username?: string; // Optional username for the user
  role?: string; // Optional role of the user within the system
}

/**
 * Interface representing an authenticated user, extending the basic IUser interface with authentication details.
 */
export interface IAuthUser extends IUser {
  id?: string; // Optional unique identifier for the user
  lastLogin?: IDate; // Optional date of the last login
  lastUpdate: IDate; // Date of the last update to the user's profile, required
}

/**
 * Interface representing a session with properties for session management and authentication tokens.
 */
export interface ISession {
  idToken: string; // JWT token for the session
  refreshToken: string; // Token used to refresh the session
  expiresIn: string; // Duration for which the session is valid
  customToken: string; // Custom token for additional security or functionality
}
