import { IDeckTemplateShapeValue } from "./deck-template-shape-value.types";
import React from "react";

export const DeckTemplateShapeValue: React.FC<IDeckTemplateShapeValue> = ({ value }) => {
  return <div>{value}</div>;
};
