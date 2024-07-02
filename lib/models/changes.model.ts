export type ApiAction = "additions" | "edits" | "deletions";

export type ApiChange<T> = {
  [key in ApiAction]?: Partial<T>[];
};
