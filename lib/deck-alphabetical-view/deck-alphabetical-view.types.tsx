import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs/internal/Subject";

export enum Alphabet {
  "#" = "#",
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

export type AlphabeticalGrouped<T> = Partial<Record<AlphabetKey, T[]>>;

export interface IDeckAlphabeticalController {
  internalTrigger: Subject<void>;
  alphabet: AlphabetMap;
  observe(): void;
  disconnect(): void;
  scrollSpy(): Observable<void>;
}

export type LayoutPlacement = "page" | "drawer";

export interface IAlphabeticalViewProps<T> {
  loaded: boolean;
  loading: boolean;
  controller: IDeckAlphabeticalController;
  items: AlphabeticalGrouped<T>;
  itemTemplate: (item: T) => React.ReactNode;
  emptyTemplate?: React.ReactNode;
  type: LayoutPlacement;
}

export interface IAlphabeticalViewState {
  letters: AlphabetMap;
  activeLetter: AlphabetKey;
}
