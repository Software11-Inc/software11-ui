/**
 * Defines the position and size of a shape within a slide.
 */
export interface IShapeStylePosition {
  x: number; // X-coordinate of the shape's position
  y: number; // Y-coordinate of the shape's position
  width: number; // Width of the shape
  height: number; // Height of the shape
}

/**
 * Describes the fill properties of a shape, including color and transparency.
 */
export interface IShapeStyleFill {
  foregroundColor: string; // Shape fill foreground color in HTML color format (#RRGGBB or named color)
  transparency: number; // Transparency percentage of the fill (0.0 = opaque, 1.0 = clear)
  type: "NoFill" | "Solid" | "Gradient" | "Pattern" | "PictureAndTexture" | "SlideBackground"; // Fill type
}

/**
 * Describes the line (border) properties of a shape, including color, style, and visibility.
 */
export interface IShapeStyleLine {
  color: string; // Shape line color in HTML color format (#RRGGBB or named color)
  transparency: number; // Transparency percentage of the line (0.0 = opaque, 1.0 = clear)
  style: "Single" | "ThickBetweenThin" | "ThickThin" | "ThinThick" | "ThinThin"; // Line style
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
    | "SystemDashDot"; // Dash style
  visible: boolean; // Visibility of the line
  weight: number; // Weight of the line in points
}

/**
 * Describes the text box properties of a shape, including auto-sizing, margins, and alignment.
 */
export interface IShapeStyleTextBox {
  autoSizeSetting: "AutoSizeNone" | "AutoSizeTextToFitShape" | "AutoSizeShapeToFitText" | "AutoSizeMixed"; // Text box auto sizing behavior
  margin: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }; // Margins around the text within the shape
  verticalAlignment: "Top" | "Middle" | "Bottom" | "TopCentered" | "MiddleCentered" | "BottomCentered"; // Vertical alignment of text
  wordWrap: boolean; // Whether text lines break automatically to fit within the shape
  paragraph: {
    bullet: boolean; // Visibility of bullets in the paragraph
    horizontalAlignment: "Left" | "Center" | "Right" | "Justify" | "JustifyLow" | "Distributed" | "ThaiDistributed"; // Horizontal alignment of the paragraph
  };
}

/**
 * Describes the text properties of a shape, including font details and the text value.
 */
export interface IShapeStyleText {
  font: {
    bold?: boolean; // Bold status of the font
    italic?: boolean; // Italic status of the font
    size?: number; // Font size in points
    name?: string; // Font name
    color?: string; // Font color in HTML color format (#RRGGBB or named color)
  };
  value: string; // Text content of the shape
}

/**
 * Enumerates supported shape types within a template.
 */
export type SupportedShapeType =
  | "Unsupported"
  | "Image"
  | "GeometricShape"
  | "Group"
  | "Line"
  | "Table"
  | "Callout" // Preview type
  | "Chart" // Preview type
  | "ContentApp" // Preview type
  | "Diagram" // Preview type
  | "Freeform" // Preview type
  | "Graphic" // Preview type
  | "Ink" // Preview type
  | "Media" // Preview type
  | "Model3D" // Preview type
  | "Ole" // Preview type
  | "Placeholder" // Preview type
  | "SmartArt" // Preview type
  | "TextBox"; // Preview type;

/**
 * Describes the style properties of a shape, including its type, position, fill, and text properties.
 */
export interface IShapeStyle {
  type?: SupportedShapeType;
  position?: IShapeStylePosition;
  fill?: IShapeStyleFill;
  line?: IShapeStyleLine;
  textBox?: IShapeStyleTextBox;
  text?: IShapeStyleText;
}

// Shape data connection types
export type RepeatType = "dataset-figure" | "dataset-repeater" | "static-value" | "static-image";

export enum RepeatTypeEnum {
  DatasetFigure = "dataset-figure",
  DatasetRepeater = "dataset-repeater",
  StaticValue = "static-value",
  StaticImage = "static-image",
}

/**
 * Base interface for defining a connection to data or static content.
 */
export interface IDefaultConnection {
  type: RepeatType;
}

/**
 * Describes a connection to a specific figure within a dataset.
 */
export interface IDatasetFigureConnection extends IDefaultConnection {
  type: "dataset-figure";
  datasetID: string;
  figureID: string;
}

/**
 * Describes a connection to a repeater within a dataset, allowing for dynamic content generation.
 */
export interface IDatasetRepeaterConnection extends IDefaultConnection {
  type: "dataset-repeater";
  datasetID: string;
  groupCell: string;
  groupCellName?: string;
  repeaterID: string;
}

/**
 * Represents a connection to a static text value.
 */
export interface IStaticValueConnection extends IDefaultConnection {
  type: "static-value";
  text: string;
}

/**
 * Represents a connection to a static image.
 */
export interface IStaticImageConnection extends IDefaultConnection {
  type: "static-image";
  image: string;
}

/**
 * Union type for all connection types, facilitating dynamic content generation based on the connection type.
 */
export type Connection =
  | IDatasetFigureConnection
  | IDatasetRepeaterConnection
  | IStaticValueConnection
  | IStaticImageConnection;

/**
 * Describes a template shape, including its style, data connection, and order within the template.
 */
export interface ITemplateShape {
  id: string;
  name?: string;
  value?: string;
  style?: IShapeStyle;
  connection?: Connection;
  ignore?: boolean; // Indicates if the shape should be ignored during processing
  order: number; // Order of the shape within the template
}

/**
 * Type alias for a collection of template shapes, keyed by a string identifier.
 */
export type TemplateShapes = Record<string, ITemplateShape>;
