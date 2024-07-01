export interface IShape {
  /** Unique identifier for the shape */
  shapeID: string;

  /** Index of the shape in the array of shapes on specific slide */
  shapeIndex: number;
}

/**
 * The `IDynamicShape` interface represents a shape in a slide deck.
 * Each shape has a unique identifier, an index, and an instance ID.
 * The shape is associated with a specific slide, represented by `slideID`.
 * Each shape is also associated with a figure, represented by `figureName` and `latestFigureValue`.
 * The `synced` property indicates whether the shape is synced with the source dataset.
 * The `sourceDataset` property contains details about the source dataset.
 */
export interface IDynamicShape extends IShape {
  /** Unique identifier for the instance of the shape */
  instanceID: string;

  /** Identifier of the container associated with the shape */
  slideID: string;

  /** Name of the figure associated with the shape */
  figureName: string;

  /** Latest value of the figure */
  latestFigureValue: string;

  /** Flag indicating whether the shape is synced with the source dataset */
  synced: boolean;

  /** Source dataset details */
  sourceDataset: {
    /** Identifier of the source dataset */
    datasetID: string;

    /** Identifier of the figure in the source dataset */
    datasetFigureID: string;
  };
}
/** A type alias for a string that represents a figure ID */
type FigureID = string;

/**
 * The `FigureShapeMap` type represents a map of figure names to an array of shapes.
 * Each figure name is associated with an array of shapes that represent the figure.
 */
export type FigureShapeMap = Record<FigureID, IDynamicShape[]>;

/**
 * The `IShapeChange` interface represents a change in a shape.
 * It extends the `IShape` interface and adds a `slideID` and a `value`.
 */
export interface IShapeChange extends IShape {
  /** The new value of the shape */
  value: string;
}

/**
 * The `ShapeChangeMap` type represents a map of figure IDs to an array of shape changes.
 * Each figure ID is associated with an array of shape changes.
 */
export type ShapeChangeMap = Record<FigureID, IShapeChange[]>;

/** A type alias for a string that represents a dataset ID */
type DatasetID = string;

/**
 * The `DatasetShapeChangeMap` type represents a map of dataset IDs to a `FigureShapeMap`.
 * Each dataset ID is associated with a `FigureShapeMap`.
 */
export type DatasetShapeChangeMap = Record<DatasetID, ShapeChangeMap>;

/**
 * The `DatasetShapeMap` type represents a map of dataset IDs to a `FigureShapeMap`.
 * Each dataset ID is associated with a `FigureShapeMap`.
 */
export type DatasetShapeMap = Record<DatasetID, FigureShapeMap>;
