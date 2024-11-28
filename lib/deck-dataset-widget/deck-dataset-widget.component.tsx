import AccordionGroup from "@mui/joy/AccordionGroup";
import { DeckDatasetWidgetProps } from "./deck-dataset-widget.types";
import React from "react";
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

  const hasName = name && name.length > 0;

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
      <Accordion>
        <AccordionSummary>
          <Box sx={headerStyle}>
            <DeckStatus status={0} />

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
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={contentStyle}>
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
        }}
      >
        <Box
          sx={{
            ...boxStyle,
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Typography sx={figureValuesStyle}>{change.initialValue}</Typography>
          <Typography sx={figureNameStyle}>{change.initialName}</Typography>
        </Box>
        <DoubleArrowRounded color="warning" />
        <Box
          sx={{
            ...boxStyle,
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          <Typography sx={figureValuesStyle}>{change.finalValue}</Typography>
          <Typography sx={figureNameStyle}>{change.finalName}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
