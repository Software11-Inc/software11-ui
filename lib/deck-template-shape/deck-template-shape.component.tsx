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
  statusIcon = null,
  shapeName = "",
  emptyName = "Shape name not defined",
  subheaderContent,
  children,
}) => {
  const hasName = Boolean(shapeName);
  const hasStatusIcon = Boolean(statusIcon);
  const [open, setOpen] = React.useState(false);

  const accordionSummarySlotProps = {
    button: {
      component: "div",
      onClick: () => {
        setOpen(!open);
      },
    },
  } as any;

  return (
    <React.Fragment>
      <Accordion expanded={open}>
        <AccordionSummary slotProps={accordionSummarySlotProps}>
          <Box sx={headerStyle}>
            {hasStatusIcon ? statusIcon : <DeckStatus status={status} />}
            <Box>
              <DeckLabel
                title={{
                  text: hasName ? shapeName : emptyName,
                  limit: 1,
                }}
                size="sm"
                italic={!hasName}
                color={hasName ? "primary" : "neutral"}
              />
              {subheaderContent}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{open && children}</AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};
