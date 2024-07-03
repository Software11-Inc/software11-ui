import { IProject } from "@models";

export interface IDeckSelectProjectProps {
  project: Partial<IProject>;
  checked?: boolean;
  onClick?: () => void;
}
