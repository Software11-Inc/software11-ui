import { SupportedShapeType } from "./template-shape.model";

export interface IShape {
  /** Unique identifier for the shape */
  shapeID: string;

  /** Index of the shape in the array of shapes on specific slide */
  shapeIndex: number;
}

/**
 * Defines the source of a shape within a dataset.
 * This interface is used to specify the origin of a shape by identifying
 * both the dataset and the specific figure within that dataset.
 */
export interface IShapeSource {
  /** Unique identifier for the dataset from which the shape originates */
  datasetID: string;

  /** Unique identifier for the specific figure within the dataset */
  figureID: string;
}

export interface IShapeSourceCreation {
  datasetID: string;
  datasetFigureID: string;
}

/**
 * Extends the IShape interface to represent dynamic shapes within a slide deck.
 * Dynamic shapes are linked to data sources and can reflect updates from these sources.
 */
export interface IDynamicShape extends IShape {
  /**
   * Unique identifier for the instance of the shape.
   * This ID differentiates this instance from other instances of the same shape.
   */
  instanceID: string;

  /**
   * Identifier of the slide that contains this shape.
   * This links the shape to its specific location within the deck.
   */
  containerID: string;

  /**
   * Index of the container that contains the shape.
   *
   */
  containerIndex: number;

  /**
   * Name of the figure associated with the shape.
   * This name corresponds to a specific data figure within the source dataset.
   */
  figureName: string;

  /**
   * The latest value of the figure.
   * Represents the most current data point for the shape, reflecting any updates from the source.
   */
  latestFigureValue: string;

  /**
   * Flag indicating whether the shape is synced with the source dataset.
   * True if the shape's data is current with its source, false otherwise.
   */
  synced: boolean;

  /**
   * Details about the source dataset from which the shape derives its data.
   * This includes identifiers and metadata necessary to fetch and update the shape's data.
   */
  sourceDataset: IShapeSource;
}

/** A type alias for a string that represents a figure ID */
type FigureID = string;

/**
 * Represents the data associated with a shape in the model.
 * This interface is used to define the structure of shape data,
 * which currently includes a value property.
 */
export interface IShapeData {
  /** The value property represents the specific data or identifier associated with a shape. */
  value: string;

  /** The index of the shape in the array of shapes on a specific slide */
  index: number;
}

/**
 * Represents additional information required for dynamic shape creation.
 * This includes identifiers for the project, file, and container where the shape will be added.
 */
export interface IDynamicShapeAddition {
  /** Unique identifier for the project */
  projectID: string;
  /** Unique identifier for the file */
  fileID: string;
  /** Unique identifier for the container */
  containerID: string;
}

export interface IDynamicShapeSync {
  sourceDataset: IShapeSource;
  shapeInstanceID: string;
}

export interface IDynamicShapeSyncResponse extends IDynamicShape {}

/**
 * Defines the structure for creating dynamic shapes within a project.
 * This includes the type of shape, its data, and the source dataset.
 */
export interface IDynamicShapeCreation {
  /** Type of the shape to be created (e.g., "circle", "rectangle") */
  shapeType: string;
  /** Data specific to the shape being created */
  shapeData: IShapeData;
  /** Source dataset from which the shape is derived */
  sourceDataset: IShapeSourceCreation;
}

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

/**
 * Interface representing a selected shape within a slide.
 * It captures the unique identifiers for both the shape and its parent slide,
 * along with any associated tags for categorization or metadata purposes.
 */
export interface ISelectedShape {
  /** Unique identifier for the shape within a slide */
  shapeIndex: number;

  /** Identifier for the slide containing the shape */
  slideID: string;

  value?: string;

  source?: IShapeSource;

  shapeID?: string;

  type?: SupportedShapeType;
}
