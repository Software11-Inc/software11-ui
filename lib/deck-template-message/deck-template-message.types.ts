import { IActionButton } from "../models/action-button.model";

export interface DeckTemplateMessageProps {
  position: string;
  title: string;
  message: string;
  action?: IActionButton;
}
