import { ITemplate } from "../models/template.model";

export interface DeckTemplateListItemProps {
  template?: Partial<ITemplate>;
  onOpen?: () => void;
  onEdit?: () => void;
  onRun?: () => void;
  onRemove?: () => void;
}
