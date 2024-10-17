import InterestsRounded from "@mui/icons-material/InterestsRounded";
import MobiledataOffRounded from "@mui/icons-material/MobiledataOffRounded";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import RotateLeftRounded from "@mui/icons-material/RotateLeftRounded";
import SelectAllRounded from "@mui/icons-material/SelectAllRounded";
import SyncRounded from "@mui/icons-material/SyncRounded";
import ViewInArRounded from "@mui/icons-material/ViewInArRounded";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary, { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React from "react";
import { accordionGroupStyles, accordionTransition, getBackgroundColor } from "../accordion.style";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { ShapeChangeMap } from "../models/shape.model";
import {
  actionButtonStyle,
  contentHeaderStyle,
  contentStyle,
  counterStyle,
  emptyHeaderStyle,
  headerStyle,
  hintStyle,
  horizontalBoxStyle,
  itemInnerStyle,
} from "./deck-dataset-shapes.styles";
import { DeckDatasetShapesProps } from "./deck-dataset-shapes.types";

export const DeckDatasetShapes: React.FC<DeckDatasetShapesProps> = ({
  name,
  description,
  hasChanges,
  loading,
  highlighted,
  highlightedShapes,
  shapes,
  onSyncDataset,
  onSyncFigure,
  onResetFigure,
  onOpenDataset,
  onSettings,
  disabled = false,
  loaded,
  apiChanges: apiChangesInput,
  userChanges: userChangesInput,
  loadingShapes = [],
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  const className = `deck-active-project`;
  const highlightedClass = `deck-highlighted`;
  const classList = [className, highlighted ? highlightedClass : ``].join(" ").trim();
  const [open, setOpen] = React.useState(!loaded);

  const figureIDs = Object.keys(shapes);

  const getFigureShapes = (figureID: string) => shapes[figureID] ?? [];

  const shapeCount = figureIDs.reduce((acc, figureID) => acc + shapes[figureID].length, 0);

  const filterShapes = (changes: ShapeChangeMap): ShapeChangeMap => {
    const changeList = Object.keys(changes ?? {}).reduce((acc, figureID) => {
      const shapeChanges = changes[figureID];
      const shapeIDs = getFigureShapes(figureID).map((shape) => shape.shapeID);
      if (!shapeIDs.length) {
        return acc;
      }
      const filteredChanges = shapeChanges.filter((change) => shapeIDs.includes(change.shapeID));
      return {
        ...acc,
        [figureID]: filteredChanges,
      };
    }, {});

    return changeList;
  };

  const apiChanges = filterShapes(apiChangesInput);
  const userChanges = filterShapes(userChangesInput);

  const hasUserChanges = Object.keys(userChanges).length > 0;
  const hasApiChanges = Object.keys(apiChanges).length > 0;
  const order = hasUserChanges ? -3 : hasApiChanges ? -2 : 0;
  return (
    <AccordionGroup
      className={classList}
      sx={{
        ...accordionGroupStyles(className, false, 1, "sm", !loading, order),
        [`& .${accordionSummaryClasses.button}`]: {
          bgcolor: getBackgroundColor(loading ? 2 : 0),
        },
      }}
      transition={accordionTransition}
    >
      <Accordion expanded={open} defaultExpanded={!loaded}>
        <AccordionSummary
          slotProps={{
            button: {
              component: "div",
              onClick: (e) => {
                const target = e.target as HTMLElement;
                if (target.classList.contains("MuiSvgIcon-root")) {
                  return;
                }
                setOpen(!open);
              },
            },
            indicator: {
              onClick: () => setOpen(!open),
            },
          }}
        >
          {!loaded && (
            <Box sx={emptyHeaderStyle}>
              {loading && (
                <SyncRounded
                  sx={{
                    mx: 0.5,
                    width: "20px",
                    color: "var(--joy-palette-primary-500)",
                    animation: "spin 2s linear infinite",
                  }}
                />
              )}
              {!loading && (
                <MobiledataOffRounded sx={{ mx: 0.5, width: "20px", color: "var(--joy-palette-primary-500)" }} />
              )}
              <Box>
                <Typography fontSize={12} lineHeight={1.2} textTransform="uppercase" color="primary" fontWeight="bold">
                  {loading ? "Syncing..." : "Dataset not synced"}
                </Typography>
                <Typography fontSize={8} lineHeight={1.3} fontWeight="normal">
                  It seems the dataset is not synchronized with the application, but the slide contains data from the
                  dataset.
                </Typography>
              </Box>
            </Box>
          )}
          {loaded && (
            <Box sx={headerStyle}>
              <DeckStatus status={hasUserChanges ? 2 : hasApiChanges ? 1 : 0} loading={loading} />

              <DeckLabel
                size="sm"
                title={{
                  text: name ?? "Untitled",
                  limit: 1,
                }}
                description={{
                  text: String(description),
                  limit: 1,
                }}
              />
              <Badge size="sm" color="warning" invisible={!hasChanges || loading}>
                <DeckIconButton
                  size="sm"
                  icon={
                    <SyncRounded
                      sx={{
                        animation: loading ? "spin 2s linear infinite" : "unset",
                      }}
                    />
                  }
                  disabled={disabled || loading}
                  variant={hasChanges && !loading ? "soft" : "plain"}
                  color={hasChanges ? "warning" : "primary"}
                  onClick={onSyncDataset}
                  rounded={true}
                />
              </Badge>
            </Box>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {loaded && (
            <React.Fragment>
              <Box sx={contentHeaderStyle}>
                <Box sx={horizontalBoxStyle}>
                  <Box sx={counterStyle}>
                    <ViewInArRounded sx={{ fontSize: 14, color: "var(--joy-palette-primary-500)" }} />
                    <Typography fontSize={12} fontWeight="bold" color="primary">
                      {Object.keys(shapes).length}
                    </Typography>
                  </Box>
                  <Box sx={counterStyle}>
                    <InterestsRounded sx={{ fontSize: 14, color: "var(--joy-palette-primary-500)" }} />
                    <Typography fontSize={12} fontWeight="bold" color="primary">
                      {shapeCount}
                    </Typography>
                  </Box>
                  <div className="flex-spacer"></div>
                  <DeckIconButton
                    color="primary"
                    icon={<OpenInNewRounded />}
                    size="sm"
                    variant="plain"
                    onClick={onOpenDataset}
                  />
                </Box>
              </Box>
              <Box sx={contentStyle}>
                {Object.keys(shapes).map((figureID) => {
                  const figureShapes = shapes[figureID];
                  const shapeIDs = figureShapes?.map((s) => s.shapeID);
                  const shapeIndexes = figureShapes?.map((s) => s.shapeIndex);
                  const loading = shapeIDs.some((id) => loadingShapes.includes(id));
                  const name = figureShapes[0]?.figureName;
                  const value = figureShapes[0]?.latestFigureValue;
                  const count = figureShapes?.length;
                  const highlight =
                    highlighted && figureShapes.some((shape) => highlightedShapes?.includes(String(shape.shapeIndex)));
                  const apiChanged = apiChanges[figureID]?.length > 0;
                  const userChanged = userChanges[figureID]?.length > 0;
                  const changed = apiChanged || userChanged;

                  const figureApiChanges = apiChanges[figureID] ?? {};

                  const figureUserChanges = userChanges[figureID] ?? {};

                  let figureValue = value;

                  switch (true) {
                    case userChanged:
                      figureValue = userChanges[figureID][0]?.value;
                      break;
                    case apiChanged:
                      figureValue = apiChanges[figureID][0]?.value;
                      break;
                    default: {
                      break;
                    }
                  }
                  return (
                    <Box
                      key={figureID}
                      className={[
                        highlight ? highlightedClass : null,
                        apiChanged ? "deck-api-changed" : null,
                        userChanged ? "deck-user-changed" : null,
                      ]
                        .join(" ")
                        .trim()}
                      onMouseEnter={() => onMouseEnter(figureID, figureApiChanges, figureUserChanges)}
                      onMouseLeave={() => onMouseLeave(figureID, shapeIndexes)}
                    >
                      <Box sx={itemInnerStyle} className={[highlight ? highlightedClass : null].join(" ").trim()}>
                        {apiChanged && !userChanged && (
                          <DeckIconButton
                            color="warning"
                            icon={
                              <RotateLeftRounded
                                sx={{
                                  animation: loading ? "spin 2s linear infinite" : "unset",
                                }}
                              />
                            }
                            size="sm"
                            variant="plain"
                            disabled={disabled}
                            onClick={() => onSyncFigure(figureID, figureApiChanges)}
                          />
                        )}
                        {userChanged && (
                          <DeckIconButton
                            color="danger"
                            icon={
                              <RotateLeftRounded
                                sx={{
                                  animation: loading ? "spin 2s linear infinite" : "unset",
                                }}
                              />
                            }
                            size="sm"
                            variant="plain"
                            disabled={disabled}
                            onClick={() => onResetFigure(figureID, figureUserChanges)}
                          />
                        )}
                        {!changed && <DeckStatus status={0} loading={loading} />}
                        <DeckLabel
                          size="sm"
                          color={userChanged ? "danger" : apiChanged ? "warning" : "primary"}
                          title={{
                            text: figureValue,
                            limit: 1,
                          }}
                          description={{
                            text: name,
                            limit: 1,
                            bold: true,
                          }}
                        />
                        <Typography
                          className="counter"
                          fontSize={16}
                          fontWeight={"bold"}
                          sx={{
                            color: "background.level2",
                            textAlign: "center",
                          }}
                        >
                          {count}
                        </Typography>
                        <DeckIconButton
                          icon={<SelectAllRounded />}
                          color="neutral"
                          size="sm"
                          variant="plain"
                          onClick={() => onSettings(figureID)}
                          disabled={disabled || loading}
                        />
                      </Box>
                      {userChanged && (
                        <Box sx={hintStyle}>
                          <Typography fontSize={10} lineHeight={1.2} color="danger">
                            It looks like you manually changed the value.
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </React.Fragment>
          )}

          {!loaded && (
            <Box sx={contentHeaderStyle}>
              <Button
                size="sm"
                variant={loaded ? "plain" : "solid"}
                color="success"
                sx={actionButtonStyle}
                onClick={onSyncDataset}
                disabled={disabled || loading}
              >
                Sync
              </Button>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
