export enum Status {
  WAITING = -1,
  SUCCESS = 0,
  WARNING = 1,
  ERROR = 2,
  PROCESSING = 3,
}

export type StateStatus = keyof typeof Status;

export interface DeckStatusProps {
  status?: Status;
  loading?: boolean;
}
