export interface IDeckTemplateShapeItterator {
  groupName?: string;
  emptyGroupName?: string;
  hint?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  onOpenFilter?: () => void;
}
