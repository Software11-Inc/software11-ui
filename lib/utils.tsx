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

export const isValueEqual = (a: string, b: string) => {
  return String(a) === String(b);
};

export const isValueDifferent = (prev?: string, curr?: string) => {
  if (!prev && !curr) {
    return false;
  }
  return String(prev).trim() !== String(curr).trim();
};

export const regEx = new RegExp("^(?<column>[A-Z]+)(?<row>[0-9]+)$");

/**
 * This function calculates the spreadsheet column name based on a starting column and an offset number.
 * It supports columns beyond "Z" (e.g., "AA", "AB", ..., "AZ", "BA", ..., "ZZ", "AAA", ...).
 * The function works by converting the starting column to its ASCII value, adding the offset,
 * and then converting it back to a character. If the column number exceeds 26 (i.e., "Z"),
 * it wraps around to the start of the alphabet and adds another character to the column name.
 *
 * @param {string} column - The starting column letter.
 * @param {number} number - The number to add to the column letter.
 * @returns {string} - The calculated column name.
 */
export const calculateColumn = (column?: string, number?: number): string => {
  // If the column or number is not provided, return an empty string
  if (!column || number === undefined) {
    return "";
  }

  // Convert the column letter to a number (e.g., "A" -> 1, "B" -> 2, ..., "Z" -> 26)
  let columnNumber = 0;
  for (let i = 0; i < column.length; i++) {
    columnNumber = columnNumber * 26 + (column.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }

  // Add the number to the column number
  columnNumber += number;

  // Convert the column number back to a string
  let columnName = "";
  while (columnNumber > 0) {
    const modulo = (columnNumber - 1) % 26;
    columnName = String.fromCharCode(65 + modulo) + columnName;
    columnNumber = Math.floor((columnNumber - modulo) / 26);
  }

  // Return the column name
  return columnName;
};

/**
 * This function extracts the last row number from a given Excel range.
 * It works by splitting the range into start and end parts, extracting the row numbers,
 * and returning the maximum of the two.
 *
 * @param {string} range - The Excel range in the format "A1:B2".
 * @returns {number} - The last row number in the range.
 */
export const getLastRowFromRange = (range?: string): number => {
  // If the range is not provided, return 0
  if (!range) {
    return 0;
  }

  // Split the range into start and end parts
  const [start, end] = range.split(":");

  // Extract the row numbers from the start and end parts
  const [, , startRow] = regEx.exec(start) || [];
  const [, , endRow] = regEx.exec(end) || [];

  // Return the maximum of the two row numbers
  return Math.max(Number(startRow), Number(endRow));
};

/**
 * This function compares two Excel column names and returns the one that comes later in the alphabet.
 * It works by converting the column names to their equivalent numeric values (e.g., "A" -> 1, "B" -> 2, ..., "Z" -> 26, "AA" -> 27, ...),
 * and then comparing these values.
 *
 * @param {string} column1 - The first column name.
 * @param {string} column2 - The second column name.
 * @returns {string} - The column name that comes later in the alphabet.
 */
export const compareColumns = (column1?: string, column2?: string): string => {
  // If either column is not provided, return the other column
  if (!column1) {
    return column2 || "";
  }
  if (!column2) {
    return column1;
  }

  // Convert the column names to their equivalent numeric values
  const column1Value = column1
    .split("")
    .reduce((sum, current, i) => sum + (current.charCodeAt(0) - 64) * Math.pow(26, column1.length - i - 1), 0);
  const column2Value = column2
    .split("")
    .reduce((sum, current, i) => sum + (current.charCodeAt(0) - 64) * Math.pow(26, column2.length - i - 1), 0);

  // Compare the numeric values and return the corresponding column name
  return column1Value > column2Value ? column1 : column2;
};

/**
 * This function extracts the last column letter from a given Excel range.
 * It works by splitting the range into start and end parts, extracting the column letters,
 * and returning the one that comes later in the alphabet.
 *
 * @param {string} range - The Excel range in the format "A1:B2".
 * @returns {string} - The last column letter in the range.
 */
export const getLastColumnFromRange = (range?: string): string => {
  // If the range is not provided, return an empty string
  if (!range) {
    return "";
  }
  // Split the range into start and end parts
  const [start, end] = range.split(":");

  // Extract the column letters from the start and end parts
  const [, startColumn] = regEx.exec(start) || [];
  const [, endColumn] = regEx.exec(end) || [];

  // Return the column letter that comes later in the alphabet
  return compareColumns(startColumn, endColumn);
};
