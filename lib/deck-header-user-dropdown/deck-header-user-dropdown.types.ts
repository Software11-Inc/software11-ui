export interface DeckHeaderUserDropdownProps {
  fullName: string;
  role: string;
  email: string;
  avatarUrl: string;
  placement: "bottom-end" | "bottom-start";
  onLogout: () => void;
}
