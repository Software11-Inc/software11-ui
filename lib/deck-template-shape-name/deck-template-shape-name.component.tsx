import { IDeckTemplateShapeName } from "./deck-template-shape-name.types";
import React from "react";

export const DeckTemplateShapeName: React.FC<IDeckTemplateShapeName> = ({ name }) => {
  return <div>{name}</div>;
};
