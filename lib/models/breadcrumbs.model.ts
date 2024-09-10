export interface IBreadcrumb {
  title: string;
  description?: string;
  action?: () => void;
  onRemove?: () => void;
}
