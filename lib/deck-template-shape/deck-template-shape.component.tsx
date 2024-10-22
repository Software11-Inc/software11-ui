import Accordion from "@mui/joy/Accordion";
import { DeckTemplateShapeProps } from "./deck-template-shape.types";
import React, { PropsWithChildren } from "react";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import Box from "@mui/joy/Box";
import { DeckStatus } from "../deck-status";
import { DeckLabel } from "../deck-label";
import { SxProps } from "@mui/joy/styles/types";

const headerStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
};

export const DeckTemplateShape: React.FC<PropsWithChildren<DeckTemplateShapeProps>> = ({
  status = 0,
  shapeName = "",
  emptyName = "Shape name not defined",
  subheaderContent,
  children,
}) => {
  const hasName = Boolean(shapeName);
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary>
          <Box sx={headerStyle}>
            <DeckStatus status={status} />
            <Box>
              <DeckLabel
                title={{
                  text: hasName ? shapeName : emptyName,
                }}
                size="sm"
                italic={!hasName}
                color={hasName ? "primary" : "neutral"}
              />
              {subheaderContent}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};
