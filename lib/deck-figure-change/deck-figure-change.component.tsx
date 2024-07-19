import { IFigureChange } from "@models";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";
import ControlPointRounded from "@mui/icons-material/ControlPointRounded";
import HistoryToggleOffRounded from "@mui/icons-material/HistoryToggleOffRounded";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";
import { accordionGroupStyles, getBackgroundColor } from "../accordion.style";
import { DeckLabel } from "../deck-label";
import { DeckSection } from "../deck-section";
import { formatDate, isValueEqual } from "../utils";
import { changesHeaderIcon, changesHeaderStyle, valueStyle } from "./deck-figure-change.styles";
import { IDeckFigureChangeProps } from "./deck-figure-change.types";

export const DeckFigureChange: React.FC<IDeckFigureChangeProps> = ({
  change: {
    versionNumber = 0,
    additions = [],
    deletions = [],
    edits = [],
    generationDate = {
      _seconds: 0,
      _nanoseconds: 0,
    },
  },
  defaultExpanded = false,
}) => {
  const getTypeIcon = (type: ChangeType) => {
    switch (type) {
      case ChangeType.ADDITIONS:
        return <ControlPointRounded sx={{ color: "var(--joy-palette-success-500)", fontSize: 16 }} />;
      case ChangeType.EDITS:
        return <ArrowCircleUpRounded sx={{ color: "var(--joy-palette-warning-500)", fontSize: 16 }} />;
      case ChangeType.DELETIONS:
        return <HistoryToggleOffRounded sx={{ color: "var(--joy-palette-primary-500)", fontSize: 16 }} />;
      default:
        return null;
    }
  };
  const count = additions.length + edits.length + deletions.length;
  return (
    <React.Fragment>
      <DeckSection
        separatorIcon={<HistoryToggleOffRounded />}
        separator={{
          title: `ver. ${versionNumber}`,
          color: "primary",
          count,
          description: formatDate(generationDate?._seconds),
        }}
        action={{
          text: "",
          onClick: () => {},
          hidden: true,
        }}
        defaultExpanded={defaultExpanded}
        content={
          <React.Fragment>
            <AccordionGroup
              className="figure-changes"
              sx={accordionGroupStyles("figure-changes", false, 0, "sm", true)}
            >
              {[
                ...additions.map((item) => ({ ...item, type: ChangeType.ADDITIONS })),
                ...edits.map((item) => ({ ...item, type: ChangeType.EDITS })),
                ...deletions.map((item) => ({ ...item, type: ChangeType.DELETIONS })),
              ].map((item) => {
                return (
                  <Accordion key={item?.id}>
                    <AccordionSummary>
                      <Box sx={changesHeaderStyle}>
                        <Box sx={changesHeaderIcon}>{getTypeIcon(item?.type)}</Box>
                        <DeckLabel
                          title={{
                            text: item?.finalValue,
                            limit: 2,
                          }}
                          description={{
                            text: item?.finalName,
                            limit: 2,
                          }}
                          gap={0}
                        />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1.5 }}>
                        <ChangesItemDetails key={item?.id} item={item} type={item?.type} />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </AccordionGroup>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};
enum ChangeType {
  ADDITIONS = "additions",
  EDITS = "edits",
  DELETIONS = "deletions",
  NONE = "none",
}

const ChangesItemDetails: React.FC<{ item: IFigureChange; type: ChangeType }> = ({ item, type }) => {
  switch (type) {
    case ChangeType.ADDITIONS:
      return <CreateFigure item={item} />;
    case ChangeType.EDITS:
      return <EditFigure item={item} />;
    case ChangeType.DELETIONS:
      return <FinalFigure item={item} />;
    default:
      return null;
  }
};

const CreateFigure: React.FC<{ item: IFigureChange }> = ({ item }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <DeckLabel
          color="neutral"
          title={{
            text: item.finalName,
          }}
          size="md"
        />
        <DeckLabel
          title={{
            text: "New value",
          }}
          description={{
            text: "In this version, a new figure value was added.",
          }}
          color="neutral"
        />
        <Box
          sx={{
            bgcolor: getBackgroundColor(2),
            borderRadius: "var(--border-radius)",
            p: 1,
          }}
        >
          <FinalFigure item={item} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

const EditFigure: React.FC<{ item: IFigureChange }> = ({ item }) => {
  const isNameChanged = Boolean(item.initialName) && !isValueEqual(item.initialName, item.finalName);
  const isValueChanged = Boolean(item.initialValue) && !isValueEqual(item.initialValue, item.finalValue);
  return (
    <React.Fragment>
      <DeckLabel
        color="neutral"
        title={{
          text: item.finalName,
        }}
        size="md"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          opacity: 0.8,
        }}
      >
        <DeckLabel
          title={{
            text: "Original Figure",
          }}
          description={{
            text: "The original figure before the change.",
          }}
          color="neutral"
        />
        <Box
          sx={{
            bgcolor: getBackgroundColor(2),
            borderRadius: "var(--border-radius)",
            p: 1,
          }}
        >
          <InitialFigure item={item} nameChanged={isNameChanged} valueChanged={isValueChanged} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <DeckLabel
          title={{
            text: "Modified Figure",
          }}
          description={{
            text: "The figure after the change.",
          }}
          color="neutral"
        />
        <Box
          sx={{
            bgcolor: getBackgroundColor(2),
            borderRadius: "var(--border-radius)",
            p: 1,
          }}
        >
          <FinalFigure item={item} nameChanged={isNameChanged} valueChanged={isValueChanged} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

const InitialFigure: React.FC<{
  item: IFigureChange;
  nameChanged?: boolean;
  valueChanged?: boolean;
}> = ({ item, valueChanged, nameChanged }) => {
  return (
    <React.Fragment>
      <Figure value={item.initialValue} name={item.initialName} nameChanged={nameChanged} valueChanged={valueChanged} />
    </React.Fragment>
  );
};

const FinalFigure: React.FC<{
  item: IFigureChange;
  nameChanged?: boolean;
  valueChanged?: boolean;
}> = ({ item, valueChanged = false, nameChanged = false }) => {
  return (
    <React.Fragment>
      <Figure value={item.finalValue} name={item.finalName} nameChanged={nameChanged} valueChanged={valueChanged} />
    </React.Fragment>
  );
};

const Figure: React.FC<{
  name: string;
  value: string;
  nameChanged?: boolean;
  valueChanged?: boolean;
}> = ({ value, valueChanged = false }) => {
  return (
    <React.Fragment>
      <FigureValue value={value} changed={valueChanged} />
    </React.Fragment>
  );
};

const FigureValue: React.FC<{ value: string; changed: boolean }> = ({ value, changed }) => {
  return (
    <React.Fragment>
      <Typography sx={valueStyle(changed, true)}>{value}</Typography>
    </React.Fragment>
  );
};
