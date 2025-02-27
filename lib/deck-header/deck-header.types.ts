export type DeckHeaderType = "default" | "search" | "page";

export interface DeckHeaderProps {
  type?: DeckHeaderType;
  title: string;
  description: string;
  fullName: string;
  role: string;
  email: string;
  avatarUrl: string;
  showNavigation: boolean;
  hidden?: boolean;
  onLogout: () => void;
  onBack: () => void;
  onNotifications?: () => void;
  notificationCount?: number;
  notificationOpen?: boolean;

  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  onSync?: () => void;
  onDelete?: () => void;
  loading?: boolean;
}
