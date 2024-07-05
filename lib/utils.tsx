// Generic function to create a map based on figureIDs and a source object
export function createGroupMap<T>(figureIDs: string[] = [], source: Record<string, T> = {}): Record<string, T> {
  return figureIDs.reduce(
    (acc, figureID) => {
      const item = source[figureID];
      if (item) {
        acc[figureID] = item;
      }
      return acc;
    },
    {} as Record<string, T>
  );
}

import moment from "moment";

export const DATE_FORMAT = "MMM DD, h:mm a";

export const formatDate = (timestamp: number) => {
  return moment.unix(timestamp).format(DATE_FORMAT);
};
