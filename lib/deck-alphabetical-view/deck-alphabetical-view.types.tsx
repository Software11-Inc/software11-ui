import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs/internal/Subject";

export enum Alphabet {
  ANY = "#",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H",
  I = "I",
  J = "J",
  K = "K",
  L = "L",
  M = "M",
  N = "N",
  O = "O",
  P = "P",
  Q = "Q",
  R = "R",
  S = "S",
  T = "T",
  U = "U",
  V = "V",
  W = "W",
  X = "X",
  Y = "Y",
  Z = "Z",
}

export type AlphabetKey = keyof typeof Alphabet;

export type AlphabetMap = Record<AlphabetKey, string>;

export type AlphabeticalGrouped = Partial<Record<AlphabetKey, any[]>>;

export interface IDeckAlphabeticalController {
  internalTrigger: Subject<void>;
  alphabet: AlphabetMap;
  observe(): void;
  disconnect(): void;
  scrollSpy(): Observable<void>;
}

export type LayoutPlacement = "page" | "drawer";

export interface IAlphabeticalViewProps {
  loaded: boolean;
  loading: boolean;
  controller: IDeckAlphabeticalController;
  items: AlphabeticalGrouped;
  itemTemplate: (item: any) => React.ReactNode;
  emptyTemplate?: React.ReactNode;
  type: LayoutPlacement;
  hasSearch?: boolean;
  onSearch: (value: string) => void;
}

export interface IAlphabeticalViewState {
  letters: AlphabetMap;
  activeLetter: AlphabetKey;
}
