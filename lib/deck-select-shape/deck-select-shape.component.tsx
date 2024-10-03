import Sheet from "@mui/joy/Sheet";
import { IDeckSelectShapeProps } from "./deck-select-shape.types";
import React from "react";
import {
  dynamicClass,
  selectShapeActionClass,
  selectShapeContentClass,
  selectShapeFigureClass,
  selectShapeInnerClass,
  selectShapeStyle,
  staticClass,
} from "./deck-select.shape.styles";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { DeckIconButton } from "../deck-icon-button";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";

export const DeckSelectShape: React.FC<IDeckSelectShapeProps> = ({
  shape,
  figure,
  checked,
  datasetName,
  onOpen,
  onClick,
}) => {
  const isDynamic = figure !== undefined;
  return (
    <React.Fragment>
      <Sheet sx={selectShapeStyle} className={[isDynamic ? dynamicClass : staticClass].join(" ")} component="div">
        {isDynamic && (
          <Box className={selectShapeFigureClass}>
            <DeckStatus status={0} />
            <DeckLabel
              title={{
                text: String(figure?.name.value),
              }}
              description={{
                text: datasetName,
              }}
              size="sm"
            />
            <div className="flex-spacer" />
            <DeckIconButton color="primary" icon={<OpenInNewRounded />} size="sm" variant="plain" onClick={onOpen} />
          </Box>
        )}
        <Box className={selectShapeInnerClass} onClick={onClick}>
          <Box className={selectShapeActionClass}>
            <Radio size="md" variant="soft" checked={checked} />
          </Box>
          <Box className={selectShapeContentClass}>
            <DeckLabel
              title={{
                text: String(shape?.value),
              }}
              size="sm"
            />
          </Box>
        </Box>
      </Sheet>
    </React.Fragment>
  );
};
