import { IActionButton } from "@models";

export interface IDeckFooterProps {
  className?: string;
  hidden?: boolean;
  back?: IActionButton;
  next?: IActionButton;
  actions?: React.ReactElement;
  fit?: boolean;
}
