import { ISelectedShape, IShapeSource } from "./shape.model";

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
