import Sheet from "@mui/joy/Sheet";
import { IDeckSelectShapeProps } from "./deck-select-shape.types";
import React from "react";
import { selectShapeActionClass, selectShapeContentClass, selectShapeStyle } from "./deck-select.shape.styles";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import { DeckLabel } from "../deck-label";

export const DeckSelectShape: React.FC<IDeckSelectShapeProps> = ({ shape, dynamicShape, checked, onClick }) => {
  const isDynamic = dynamicShape !== undefined;
  return (
    <React.Fragment>
      <Sheet
        sx={selectShapeStyle}
        className={[isDynamic ? "select-shape--dynamic" : "select-shape--static"].join(" ")}
        component="div"
        onClick={onClick}
      >
        <Box className={selectShapeActionClass}>
          <Radio size="lg" variant="soft" checked={checked} />
        </Box>
        <Box className={selectShapeContentClass}>
          <DeckLabel
            title={{
              text: String(shape?.value),
            }}
          />
        </Box>
      </Sheet>
    </React.Fragment>
  );
};
