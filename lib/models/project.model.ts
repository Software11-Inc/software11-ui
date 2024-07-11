import { IDate } from "./date.model";
import { IDefaultItem } from "./default-item.model";

/** Defines the type of projects supported */
export type ProjectType = "spreadsheet" | "presentation";

/** Interface for creating a workspace file container with optional name */
export interface IWorkspaceFileContainerCreation {
  id: string;
  name?: string;
}

/** Interface for workspace file container details */
export interface IWorkspaceFileContainer {
  containerID?: string; // Optional container ID
  containerName: string; // Name of the container
  containerIndex: number; // Index of the container
  sheetID?: string; // Optional sheet ID
  generationDate?: IDate; // Optional date when the container was generated
}

/** Interface for workspace file details */
export interface IWorkspaceFile {
  fileName: string; // Name of the file
  fileRoute: string; // Route/path of the file
  fileType: string; // Type of the file
  fileID?: string; // Optional file ID
  fileContainers?: IWorkspaceFileContainer[]; // Optional array of file containers
  generationUser?: string; // Optional user who generated the file
  generationDate?: IDate; // Optional date when the file was generated
  description?: string; // Optional description of the file
}

/** Interface for master file details, extending from IDefaultItem partially */
export interface IMasterFile extends Partial<IDefaultItem> {
  team: string[]; // Array of team members
  projectType: ProjectType; // Type of the project
  connectedDatasets: IDefaultItem[]; // Array of connected datasets
}

/** Interface for project details, extending from IDefaultItem partially */
export interface IProject extends Partial<IDefaultItem> {
  description?: string; // Optional project description
  datasetID?: string[]; // Optional array of dataset IDs
  projectType?: ProjectType; // Optional project type
  masterID?: string; // Optional master file ID
  files?: IWorkspaceFile[]; // Optional array of workspace files
}
