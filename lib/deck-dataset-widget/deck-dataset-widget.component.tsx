import AccordionGroup from "@mui/joy/AccordionGroup";
import { DeckDatasetWidgetProps } from "./deck-dataset-widget.types";
import React, { useEffect } from "react";
import { accordionGroupStyles, accordionTransition, getBackgroundColor } from "../accordion.style";
import AccordionSummary, { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import DoubleArrowRounded from "@mui/icons-material/DoubleArrowRounded";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
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
import { IFigureChange } from "../models/dataset-changes.model";
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
        [`& .${accordionSummaryClasses.button}`]: {
          bgcolor: getBackgroundColor(loading ? 2 : 0),
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
            <DeckStatus status={status} />

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
          {!hasChanges && <DeckIconButton variant="plain" icon={<ChevronRightRounded />} />}
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
  change: IFigureChange;
  onSelectCell: (cell: string) => void;
}

export const FigureChange: React.FC<IFigureChangeProps> = ({ change, onSelectCell = () => {} }) => {
  const isNameChanged = fromUtils.isValueDifferent(change.initialName, change.finalName);
  const isValueChanged = fromUtils.isValueDifferent(change.initialValue, change.finalValue);
  const nameColor: ColorPaletteProp = isNameChanged ? "warning" : "neutral";
  const valueColor: ColorPaletteProp = isValueChanged ? "warning" : "neutral";
  return (
    <Box sx={horizontalBoxStyle}>
      <Typography sx={cellStyle} onMouseEnter={() => onSelectCell(change.cell)}>
        {change.cell}
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
            {change.initialValue}
          </Typography>
          <Typography sx={figureNameStyle} color="neutral">
            {change.initialName}
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
            {change.finalValue}
          </Typography>
          <Typography sx={figureNameStyle} color={nameColor}>
            {change.finalName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
