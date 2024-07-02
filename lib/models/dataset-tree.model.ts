import { Dataset } from "./dataset.model";
import { IDate } from "./date.model";
import { IUser } from "./user.model";

export interface IDatasetSourceProject {
  id: string;
  name: string;
}

export interface IDatasetSourceFile {
  name: string;
  tab: string;
  type: string;
}

export interface IDatasetTreeResponse {
  id: string;
  name: string;
  sourceProject?: IDatasetSourceProject;
  sourceFile?: IDatasetSourceFile;
  user?: IUser;
  lastUpdated: IDate;
}

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

export interface IKeyData {
  label: string;
  type?: string;
  description: string;
}

export type AlphabetKey = keyof typeof Alphabet;

export type AlphabetMap = Record<AlphabetKey, string>;

type SheetName = string;
export type SheetGroup = Record<SheetName, Dataset[]>;

type FileName = string;
export type FileGroup = Record<FileName, { key: IKeyData; value: SheetGroup }>;

type ProjectName = string;
export type ProjectGroup = Record<ProjectName, { key: IKeyData; value: FileGroup }>;

export type DatasetTree = Partial<Record<AlphabetKey, ProjectGroup>>;
