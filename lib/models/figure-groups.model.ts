import { Size } from "./common.model";
import { FigureUserChangeMap } from "./dataset-changes.model";
import { DatasetType } from "./dataset.model";
import { ITableFigure } from "./figure.model";
import { FigureShapeMap, ShapeChangeMap } from "./shape.model";

/**
 * Type representing a table figure grouped once by a string key.
 */
export type OnceGroupedTableFigure = Record<string, ITableFigure[]>;

/**
 * Type representing a table figure grouped twice, where each group is further grouped by a string key.
 */
export type TwiceGroupedTableFigure = Record<string, OnceGroupedTableFigure>;

/**
 * Type representing a table figure that can be either grouped once or twice.
 */
export type GroupedTableFigure = OnceGroupedTableFigure | TwiceGroupedTableFigure;

/**
 * Interface for common properties across data-related components.
 * Includes optional flags for status, actions, and compact view, as well as size and level for styling.
 */
export interface IDataCommonProps {
  hasStatus?: boolean; // Optional flag indicating if status is displayed
  hasActions?: boolean; // Optional flag indicating if actions are available
  compact?: boolean; // Optional flag for compact view mode
  size?: Size; // Optional size of the component
  level?: number; // Optional level for hierarchical data representation
  loading?: boolean; // Optional flag indicating if data is loading
  disabled?: boolean; // Optional flag indicating if data is disabled
  hasSelectedShapes?: boolean; // Optional flag indicating if selected shapes are available
  hasMultipleSelectedShapes?: boolean; // Optional flag indicating if multiple selected shapes are available
  hasSelectedFigureShapes?: boolean; // Optional flag indicating if selected figure shapes are available
  defaultStatus?: number; // Optional default status
}

/**
 * Interface extending IDataCommonProps for common properties in data groups.
 * Includes dataset type, shape maps for figures, and event handlers for shape management.
 */
export interface IDataGroupCommonProps extends IDataCommonProps {
  type?: DatasetType; // Type of the dataset
  shapes?: FigureShapeMap; // Map of figure shapes
  shapeApiChanges?: ShapeChangeMap; // Map of changes from the API
  shapeUserChanges?: ShapeChangeMap; // Map of changes made by the user
  figureUserChanges?: FigureUserChangeMap; // Map of changes made by the user
  figureLoadingIDs?: string[]; // Optional list of figure IDs that are loading
  defaultStatus?: number;

  onAddShape?: (figureID: string) => void; // Optional handler for adding a shape
  onResetShapes?: (figureID: string, shapeIDs: string[]) => void; // Optional handler for resetting shapes
  onSyncShapes?: (figureID: string, shapeIDs: string[]) => void; // Optional handler for syncing shapes
  onSettings?: (figure: ITableFigure) => void; // Optional handler for accessing settings
  onSelectCell?: (cell: string) => void; // Optional handler for selecting a cell
  hasSelectedShapes?: boolean; // Optional flag indicating if selected shapes are available
}
