import React from "react";
import { IDeckFileSheetItemProps } from "./deck-file-sheet-item.types";
import { DeckLabel } from "../deck-label";

export const DeckFileSheetItem: React.FC<IDeckFileSheetItemProps> = ({ sheet, itemTemplate }) => {
  return (
    <React.Fragment key={sheet?.header?.label}>
      <DeckLabel
        key={sheet?.header?.label}
        color="primary"
        title={{
          text: sheet?.header?.label,
        }}
      />
      {sheet?.data?.map((item, index) => (
        <React.Fragment key={index + (item?.id || "id")}>{itemTemplate(item)}</React.Fragment>
      ))}
    </React.Fragment>
  );
};
