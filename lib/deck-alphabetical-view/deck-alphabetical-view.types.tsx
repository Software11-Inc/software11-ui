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

export type AlphabeticalGrouped = Partial<Record<AlphabetKey, any>>;

export interface IDeckAlphabeticalController {
  alphabet: AlphabetMap;
  observe(): void;
  disconnect(): void;
}

export type LayoutPlacement = "page" | "drawer";

export interface IAlphabeticalViewProps {
  controller: IDeckAlphabeticalController;
  items: AlphabeticalGrouped;
  itemTemplate: (item: any[]) => React.ReactNode;
  emptyTemplate?: React.ReactNode;
  type: LayoutPlacement;
}

export interface IAlphabeticalViewState {
  letters: AlphabetMap;
  activeLetter: AlphabetKey;
}
