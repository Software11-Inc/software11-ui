import { IDynamicShape, ISelectedShape } from "../models/shape.model";

export interface IDeckSelectShapeProps {
  shape: ISelectedShape;
  dynamicShape?: IDynamicShape;
  checked?: boolean;
  onClick?: () => void;
}
