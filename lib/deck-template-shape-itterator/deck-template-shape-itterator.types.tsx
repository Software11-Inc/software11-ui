export interface IDeckTemplateShapeItterator {
  groupName?: string;
  emptyGroupName?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  onOpenFilter?: () => void;
}
