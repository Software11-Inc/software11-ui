export interface DeckHeaderProps {
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
}
