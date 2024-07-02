/**
 * Interface representing the basic structure of a sheet within a workbook or similar container.
 * It captures essential identifiers and ordering information for sheet management.
 *
 * @interface ISheet
 * @property {string} id - Unique identifier for the sheet.
 * @property {string} name - Human-readable name of the sheet.
 * @property {number} index - Position of the sheet within the container, used for ordering.
 */
export interface ISheet {
  id: string;
  name: string;
  index: number;
}

/**
 * Interface representing comprehensive information about sheets within a container.
 * It includes details about all available sheets as well as which sheet is currently active,
 * facilitating navigation and management of multiple sheets.
 *
 * @interface ISheetInfo
 * @property {ISheet} activeSheet - The sheet that is currently active or selected.
 * @property {ISheet[]} sheets - An array containing all sheets within the container.
 */
export interface ISheetInfo {
  activeSheet: ISheet;
  sheets: ISheet[];
}
