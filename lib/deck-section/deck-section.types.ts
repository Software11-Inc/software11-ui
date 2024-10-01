type Color = "primary" | "neutral" | "success" | "warning" | "danger";
type Variant = "plain" | "soft" | "outlined" | "solid";

export interface SectionSeparator {
  title: string;
  description: string;
  count: number;
  color: Color;
}

export interface SetionAction {
  text: string;
  color?: Color;
  variant?: Variant;
  disabled?: boolean;
  hidden?: boolean;
  onClick: () => void;
}

export interface DeckSectionProps {
  separator: SectionSeparator;
  separatorIcon?: React.ReactElement;
  action: SetionAction;
  actionIcon?: React.ReactElement;
  content: React.ReactElement;
  hidden?: boolean;
  defaultExpanded?: boolean;
  immutable?: boolean;
  hasLine?: boolean;
}
