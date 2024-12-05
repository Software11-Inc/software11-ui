import AccordionGroup from "@mui/joy/AccordionGroup";
import { DeckDatasetWidgetProps } from "./deck-dataset-widget.types";
import React, { useEffect } from "react";
import { accordionGroupStyles, accordionTransition, getBackgroundColor } from "../accordion.style";
import AccordionSummary, { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import DoubleArrowRounded from "@mui/icons-material/DoubleArrowRounded";

import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails, { accordionDetailsClasses } from "@mui/joy/AccordionDetails";
import {
  boxStyle,
  cellStyle,
  contentStyle,
  figureNameStyle,
  figureValuesStyle,
  headerStyle,
  horizontalBoxStyle,
} from "./deck-dataset-widget.styles";
import Box from "@mui/joy/Box";
import { DeckStatus } from "../deck-status";
import { DeckLabel } from "../deck-label";
import { IFigureUserChange } from "../models/dataset-changes.model";
import Typography from "@mui/joy/Typography";
import { ColorPaletteProp } from "@mui/joy/styles/types";

import * as fromUtils from "../utils";
import { DeckIconButton } from "../deck-icon-button";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";

export const DeckDatasetWidget: React.FC<DeckDatasetWidgetProps> = ({
  name = null,
  description,
  highlighted = false,
  loading = false,
  changes = {},
  onSelectCell = () => {},
  onOpen = () => {},
}) => {
  const className = `deck-active-project`;
  const highlightedClass = `deck-highlighted`;
  const classList = [className, highlighted ? highlightedClass : ``].join(" ").trim();

  const hasChanges = Object.keys(changes).length > 0;

  const status = hasChanges ? 1 : 0;

  const hasName = name && name.length > 0;

  const [open, setOpen] = React.useState(hasChanges);

  useEffect(() => {
    setOpen(hasChanges);
  }, [hasChanges]);

  return (
    <AccordionGroup
      className={classList}
      sx={{
        ...accordionGroupStyles(className, false, 1, "sm", !loading),
        [`& .${accordionClasses.root}:not(.${accordionClasses.expanded})`]: {
          [`& .${accordionSummaryClasses.button}`]: {
            bgcolor: getBackgroundColor(loading ? 2 : 0) + " !important",
          },
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
          [`& .${accordionSummaryClasses.button}`]: {
            bgcolor: getBackgroundColor(loading ? 3 : 1) + " !important",
          },
          [`& .${accordionDetailsClasses.content}`]: {
            bgcolor: getBackgroundColor(loading ? 2 : 1) + " !important",
            borderColor: getBackgroundColor(loading ? 4 : 2) + " !important",
          },
        },
      }}
      transition={accordionTransition}
    >
      <Accordion expanded={open}>
        <AccordionSummary
          slotProps={{
            button: {
              component: "div",
              onClick: (e) => {
                const target = e.target as HTMLElement;
                if (target.classList.contains("MuiSvgIcon-root")) {
                  return;
                }
                if (!hasChanges) {
                  return;
                }
                setOpen(!open);
              },
            },
            indicator: {
              onClick: () => setOpen(!open),
              sx: {
                display: hasChanges ? "flex" : "none",
              },
            },
          }}
        >
          <Box sx={headerStyle}>
            <DeckStatus status={status} loading={loading} />

            <DeckLabel
              title={{
                text: name || "Untitled",
                limit: 1,
              }}
              description={{
                text: description,
                limit: 1,
              }}
              size="sm"
              color={hasName ? "primary" : "neutral"}
              italic={!hasName}
            />
          </Box>
          {!hasChanges && <DeckIconButton variant="plain" icon={<ChevronRightRounded />} onClick={onOpen} />}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={contentStyle} className="small-scroll">
            {Object.keys(changes).map((key) => {
              const change = changes[key];
              return <FigureChange key={change.id} change={change} onSelectCell={onSelectCell} />;
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};

interface IFigureChangeProps {
  change: IFigureUserChange;
  onSelectCell: (cell: string) => void;
}

export const FigureChange: React.FC<IFigureChangeProps> = ({ change, onSelectCell = () => {} }) => {
  const oldNameValue = change.old.name.value;
  const newNameValue = change.new.name.value;
  const oldFigureValue = change.old.figure.value;
  const newFigureValue = change.new.figure.value;

  const isNameChanged = fromUtils.isValueDifferent(oldNameValue, newNameValue);
  const isValueChanged = fromUtils.isValueDifferent(oldFigureValue, newFigureValue);

  const nameColor: ColorPaletteProp = isNameChanged ? "warning" : "neutral";
  const valueColor: ColorPaletteProp = isValueChanged ? "warning" : "neutral";

  const cell = change.new.figure.cell || change.old.figure.cell || change.new.name.cell || change.old.name.cell || "";

  return (
    <Box sx={horizontalBoxStyle}>
      <Typography sx={cellStyle} onMouseEnter={() => onSelectCell(cell)}>
        {cell}
      </Typography>
      <Box
        sx={{
          ...horizontalBoxStyle,
          alignItems: "center",
          flex: 1,
          gap: 1,
        }}
      >
        <Box
          sx={{
            ...boxStyle,
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Typography sx={figureValuesStyle} color="neutral">
            {oldFigureValue}
          </Typography>
          <Typography sx={figureNameStyle} color="neutral">
            {oldNameValue}
          </Typography>
        </Box>
        <DoubleArrowRounded color="warning" />
        <Box
          sx={{
            ...boxStyle,
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          <Typography sx={figureValuesStyle} color={valueColor}>
            {newFigureValue}
          </Typography>
          <Typography sx={figureNameStyle} color={nameColor}>
            {newNameValue}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
