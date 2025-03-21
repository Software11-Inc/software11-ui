import { ISourceProject } from "./dataset-tree.model";
import { IDefaultItem } from "./default-item.model";
import { IShapeSource } from "./shape.model";
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
   * ID of the shape. This is a unique identifier in cloud storage.
   * @type {string | null}
   * @required
   **/
  shapeID: string | null;

  /**
   * Index of the shape.
   * @type {number}
   * @required
   **/
  shapeIndex: number;

  /**
   * Name of the shape.
   * @type {string}
   * @required
   **/
  name: string;

  /**
   * Text content of the shape.
   * @type {string}
   * @optional
   **/
  text?: string;

  /**
   * Z-index of the shape.
   * @type {number}
   * @required
   **/
  order: number;

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
   * Shape ID of the parent shape if the shape is a child of group.
   * @type {number}
   * @optional
   */
  parent?: number;

  /**
   * Array of children shape IDs if the shape is a group.
   * @type {number[]}
   * @optional
   */
  children?: number[];

  /**
   * Returns the level of the specified shape.
   * A level of 0 means the shape isn't part of a group.
   * A level of 1 means the shape is part of a top-level group.
   * A level greater than 1 indicates the shape is a nested group.
   * @type {number}
   * @required
   */
  level: number;

  /**
   * Describes the connection between the shape and its source.
   * @type {IShapeSource}
   * @required
   */
  source: IShapeSource | null;

  /**
   * Style properties of the shape.
   * @type {ISlideShapeStyle}
   * @optional
   */
  style?: ISlideShapeStyle;
}

export interface IShapeFill {
  /**
   * Fill type of the shape.
   * @type {string}
   * @required
   **/
  foregroundColor: string;

  /**
   * Transparency of the shape.
   * @type {number}
   * @required
   **/
  transparency: number;

  /**
   * Fill type of the shape.
   * @type {string}
   * @required
   **/
  type: "NoFill" | "Solid" | "Gradient" | "Pattern" | "PictureAndTexture" | "SlideBackground";
}

export interface IShapeLine {
  /**
   * Line color of the shape.
   * @type {string}
   * @required
   **/
  color: string;

  /**
   * Transparency of the shape.
   * @type {number}
   * @required
   **/
  transparency: number;

  /**
   * Line style of the shape.
   * @type {string}
   * @required
   **/
  style: "Single" | "ThickBetweenThin" | "ThickThin" | "ThinThick" | "ThinThin";

  /**
   * Dash style of the shape.
   * @type {string}
   * @required
   **/
  dashStyle:
    | "Dash"
    | "DashDot"
    | "DashDotDot"
    | "LongDash"
    | "LongDashDot"
    | "RoundDot"
    | "Solid"
    | "SquareDot"
    | "LongDashDotDot"
    | "SystemDash"
    | "SystemDot"
    | "SystemDashDot";

  /**
   * Visibility of the line.
   * @type {boolean}
   * @required
   **/
  visible: boolean;

  /**
   * Weight of the line.
   * @type {number}
   * @required
   **/
  weight: number;
}

export interface IParagraphFormat {
  /**
   * Bullet visibility in the paragraph.
   * @type {boolean}
   * @required
   **/
  bullet: boolean;

  /**
   * Horizontal alignment of the paragraph.
   * @type {string}
   * @required
   **/
  horizontalAlignment: "Left" | "Center" | "Right" | "Justify" | "JustifyLow" | "Distributed" | "ThaiDistributed";
}

export interface ITextFrame {
  /**
   * Auto-sizing behavior of the text box.
   * @type {string}
   * @required
   */
  autoSizeSetting: "AutoSizeNone" | "AutoSizeTextToFitShape" | "AutoSizeShapeToFitText" | "AutoSizeMixed";

  /**
   * Margins around the text within the shape.
   * @type {object}
   * @required
   */
  margin: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  };

  /**
   * Vertical alignment of text.
   * @type {string}
   * @required
   */
  verticalAlignment: "Top" | "Middle" | "Bottom" | "TopCentered" | "MiddleCentered" | "BottomCentered";

  /**
   * Whether text lines break automatically to fit within the shape.
   * @type {boolean}
   * @required
   */
  wordWrap: boolean;
}

export interface ITextRangeFont {
  /**
   * Bold status of the font.
   * @type {boolean}
   * @required
   **/
  bold: boolean;

  /**
   * Italic status of the font.
   * @type {boolean}
   * @required
   **/
  italic: boolean;

  /**
   * Font size in points.
   * @type {number}
   * @required
   **/
  size: number;

  /**
   * Font name.
   * @type {string}
   * @required
   **/
  name: string;

  /**
   * Font color in HTML color format (#RRGGBB or named color).
   * @type {string}
   * @required
   **/
  color: string;
}

export interface ITextRange {
  /**
   * Font properties of the shape.
   * @type {ITextRangeFont}
   * @required
   **/
  font?: ITextRangeFont;
}

export interface IPlaceholder {
  /**
   * Placeholder type of the shape.
   * @type {string}
   * @required
   **/
  type:
    | "Body"
    | "Cameo"
    | "CenterTitle"
    | "Chart"
    | "Content"
    | "Date"
    | "Footer"
    | "Header"
    | "Media"
    | "OnlinePicture"
    | "Picture"
    | "SlideNumber"
    | "SmartArt"
    | "Subtitle"
    | "Table"
    | "Title"
    | "Unsupported"
    | "VerticalBody"
    | "VerticalContent"
    | "VerticalTitle";
}

export interface ISlideShapeStyle {
  /**
   * Fill properties of the shape.
   * @type {IShapeFill}
   * @optional
   **/
  fill?: IShapeFill;

  /**
   * Line properties of the shape.
   * @type {IShapeLine}
   * @optional
   **/
  line?: IShapeLine;

  /**
   * Paragraph format of the shape.
   * @type {IParagraphFormat}
   * @optional
   */
  paragraphFormat?: IParagraphFormat;

  /**
   * Text frame properties of the shape.
   * @type {ITextFrame}
   * @optional
   */
  textFrame?: ITextFrame;

  /**
   * Text range properties of the shape.
   * @type {ITextRange}
   * @optional
   */
  textRange?: ITextRange;

  /**
   * Placeholder properties of the shape.
   * @type {IPlaceholder}
   * @optional
   */
  placeholder?: IPlaceholder;
}
