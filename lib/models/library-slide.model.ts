import { ISourceProject } from "./dataset-tree.model";
import { IDefaultItem } from "./default-item.model";
import { IUser } from "./user.model";

/**
 * Interface representing a library slide, extending the default item properties.
 * It includes optional properties for managing slide resources and metadata.
 */
export interface ILibrarySlide extends IDefaultItem {
  previewImageURL?: string; // Optional URL for the slide's preview image
  storedFileURL?: string; // Optional URL where the slide's file is stored
  sourceProject?: ISourceProject; // The project where the slide is sourced from
  lastUpdateUser?: IUser; // Thanks backend for 3 different user properties
}

/**
 * Interface representing a slide upload addition request.
 */
export interface IUploadAddition {
  /**
   * ID of the project where the slide is being added.
   * @type {string}
   * @required
   * @example "uXasf3"
   */
  projectID: string;
  /**
   * ID of the slide being added. Used for ordering in web client.
   * @type {string}
   * @required
   * @example "23"
   */
  slideIndex: string;

  /**
   * ID of the file being added.
   * @type {string}
   * @required
   * @example "uXasf3"
   */
  fileID: string;

  /**
   * ID of the container where the slide is being added.
   * @type {string}
   * @required
   * @example "uXasf3"
   */
  containerID: string;
}

/**
 * Interface representing a slide upload request.
 * It includes mandatory properties for uploading a slide to the library.
 */
export interface IUploadSlide extends IUploadAddition {
  /**
   * Name of the slide.
   * @type {string}
   * @required
   * @example "Slide 1"
   */
  name: string;

  /**
   * Tags associated with the slide.
   * @type {string[]}
   * @required
   * @example ["tag1", "tag2"]
   */
  tags: string[];

  /**
   * Screen capture converted from png to base64.
   * @type {File}
   * @required
   */
  previewImage: File;

  /**
   * Slide file converted from pptx to base64.
   * @type {File}
   * @required
   */
  files: File;

  /**
   * Slide metadata.
   * @type {ISlideMetadata}
   * @required
   */
  metadata: ISlideMetadata;
}

export interface ISize {
  /**
   * Width of the slide.
   * @type {number}
   * @required
   * @example 1920
   * @default 960
   */
  width: number;

  /**
   * Height of the slide.
   * @type {number}
   * @required
   * @example 1080
   * @default 540
   */
  height: number;
}

export interface IPosition {
  /**
   * X coordinate of the shape.
   * @type {number}
   * @required
   * @example 100
   * @default 0
   */
  x: number;
  /**
   * Y coordinate of the shape.
   * @type {number}
   * @required
   * @example 100
   * @default 0
   */
  y: number;
}

export interface ISlideMetadata {
  /**
   * Size of the slide.
   * @type {ISize}
   * @required
   **/
  size: ISize;

  /**
   * Shapes of the slide.
   * @type {ISlideShape[]}
   * @required
   **/
  shapes: ISlideShape[];

  /**
   * Images of the slide.
   * @type {any[]}
   * @optional
   **/
  images: any[];

  /**
   * Components of the slide.
   * @type {any[]}
   * @optional
   **/
  components: any[];
}

/**
 * Enumerates supported shape types within a template.
 * @enum {string}
 */
export type SupportedShapeType =
  | "Unsupported"
  | "Image"
  | "GeometricShape"
  | "Group"
  | "Line"
  | "Table"
  | PreviewShapeType;

/**
 * Enumerates beta preview shape types.
 * @enum {string}
 * @beta
 */
export type PreviewShapeType =
  | "Callout"
  | "Chart"
  | "ContentApp"
  | "Diagram"
  | "Freeform"
  | "Graphic"
  | "Ink"
  | "Media"
  | "Model3D"
  | "Ole"
  | "SmartArt"
  | "TextBox";

export interface ISlideShape {
  /**
   * ID of the shape.
   * @type {string}
   * @required
   **/
  shapeID: string;

  /**
   * Index of the shape.
   * @type {number}
   * @required
   **/
  shapeIndex: number;

  /**
   * Type of the shape.
   * @type {SupportedShapeType}
   * @required
   * @example "TextBox"
   * @default "TextBox"
   */
  type: SupportedShapeType;

  /**
   * Position of the shape.
   * @type {IPosition}
   * @required
   */
  position: IPosition;

  /**
   * Size of the shape.
   * @type {ISize}
   * @required
   */
  size: ISize;

  /**
   * ID of the dataset associated with the shape.
   * @type {string}
   * @optional
   */
  datasetID?: string;

  /**
   * ID of the figure associated with the shape.
   * @type {string}
   * @optional
   */
  figureID?: string;
}
