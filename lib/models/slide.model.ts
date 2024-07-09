/**
 * Represents a single slide within a presentation, providing a unique identifier and its position.
 *
 * @interface ISlide
 * @property {string} id - Unique identifier for the slide.
 * @property {number} index - Position of the slide within the presentation, determining its order.
 */
export interface ISlide {
  id: string;
  index: number;
}

/**
 * Interface representing a selected shape within a slide.
 * It captures the unique identifiers for both the shape and its parent slide,
 * along with any associated tags for categorization or metadata purposes.
 */
export interface ISelectedShape {
  /** Unique identifier for the shape within a slide */
  shapeIndex: string;

  /** Identifier for the slide containing the shape */
  slideID: string;

  /** Array of tags associated with the shape for categorization or metadata */
  tags: string[];
}

/**
 * Encapsulates information about the current state of a presentation, including the active slide and all slides.
 *
 * @interface ISlideInfo
 * @property {ISlide} activeSlide - The slide that is currently being viewed or edited.
 * @property {ISlide[]} slides - Collection of all slides in the presentation, in order.
 */
export interface ISlideInfo {
  activeSlide: ISlide;
  slides: ISlide[];
  selectedShapes: ISelectedShape[];
}
