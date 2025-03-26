import { RowProperties } from "../deck-label/deck-label.types";

export type DeckHeaderType = "default" | "search" | "page";

export type DeckHeaderInfoType = "project" | "user";

export interface DeckHeaderProps {
  type?: DeckHeaderType;
  infoType?: DeckHeaderInfoType;
  title?: string;
  description?: string;
  fullName?: string;
  role?: string;
  email?: string;
  avatarUrl?: string;
  showNavigation: boolean;
  showActions?: boolean;
  hidden?: boolean;
  onLogout: () => void;
  onBack: () => void;
  onNotifications?: () => void;
  notificationCount?: number;
  notificationOpen?: boolean;

  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  projectTitle?: RowProperties;
  projectDescription?: RowProperties;
  projectStatus?: number;
  onProjectStatusClick?: () => void;

  onSync?: () => void;
  onDelete?: () => void;
  loading?: boolean;
}
