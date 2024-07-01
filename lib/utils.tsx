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
