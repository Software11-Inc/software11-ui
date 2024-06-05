export interface DeckActiveProjectProps {
  projectName: string;
  projectStatus: -1 | 0 | 1 | 2 | 3;
  projectDescription: string;
  hasChanges: boolean;
  loading: boolean;

  onSync: () => void;
  onDisconnect: () => void;
}
