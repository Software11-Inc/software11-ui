export type ApiAction = "additions" | "edits" | "deletions";

export type IApiChange<T> = {
  [key in ApiAction]?: Partial<T>[];
};
