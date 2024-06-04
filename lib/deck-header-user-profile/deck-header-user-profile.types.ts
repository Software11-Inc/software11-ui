export interface DeckHeaderUserProfileProps {
  fullName: string;
  role: string;
  email: string;
  avatarUrl: string;
  isRight: boolean;
  onLogout: () => void;
}
