import { DeckRepeaterFormFilter } from "../deck-repeater-form-filter";
import { DeckRepeaterFormSort } from "../deck-repeater-form-sort";
import { IDeckRepeaterFormProps } from "./deck-repeater-form.types";
import React from "react";

export const DeckRepeaterForm: React.FC<IDeckRepeaterFormProps> = () => {
  return (
    <div>
      <DeckRepeaterFormFilter />
      <DeckRepeaterFormSort />
    </div>
  );
};
