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
import AccordionSummary from "@mui/joy/AccordionSummary";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React from "react";
import { accordionGroupStyles, accordionTransition } from "../accordion.style";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
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
  itemStyle,
} from "./deck-dataset-shapes.styles";
import { DeckDatasetShapesProps } from "./deck-dataset-shapes.types";

export const DeckDatasetShapes: React.FC<DeckDatasetShapesProps> = ({
  name,
  description,
  hasChanges,
  loading,
  highlighted,
  highlightedShapes,
  apiChanges,
  userChanges,
  shapes,
  onSyncDataset,
  onSyncFigure,
  onResetFigure,
  onOpenDataset,
  onSelectShapes,
  loaded,
}) => {
  const className = `deck-active-project`;
  const highlightedClass = `deck-highlighted`;
  const classList = [className, highlighted ? highlightedClass : ``].join(" ").trim();
  const [open, setOpen] = React.useState(!loaded);

  const shapeCount = Object.keys(shapes).reduce((acc, shapeID) => acc + shapes[shapeID].length, 0);

  const apiChangedFigures = Object.keys(apiChanges ?? {});

  const userChangedFigures = Object.keys(userChanges ?? {});

  return (
    <AccordionGroup
      className={classList}
      sx={accordionGroupStyles(className, false, 1, "sm", true)}
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
              <DeckStatus status={hasChanges ? 1 : 0} loading={loading} />

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
                  disabled={loading}
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
                    <ViewInArRounded sx={{ fontSize: 14 }} color="primary" />
                    <Typography fontSize={12} fontWeight="bold" color="primary">
                      {Object.keys(shapes).length}
                    </Typography>
                  </Box>
                  <Box sx={counterStyle}>
                    <InterestsRounded sx={{ fontSize: 14 }} color="primary" />
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
                  const shapeIDs = figureShapes.map((s) => s.shapeID);
                  const name = figureShapes[0].figureName;
                  const value = figureShapes[0].latestFigureValue;
                  const count = figureShapes.length;
                  const highlight =
                    highlighted && figureShapes.some((shape) => highlightedShapes?.includes(String(shape.shapeIndex)));
                  const apiChanged = apiChangedFigures.includes(figureID);
                  const userChanged = userChangedFigures.includes(figureID);
                  const changed = apiChanged || userChanged;

                  const apiChangedIDs = Object.values(apiChanges[figureID] ?? {}).map((change) => change.shapeID);
                  const userChangedIDs = Object.values(userChanges[figureID] ?? {}).map((change) => change.shapeID);
                  return (
                    <Box
                      key={figureID}
                      sx={itemStyle}
                      className={[
                        highlight ? highlightedClass : null,
                        apiChanged ? "deck-api-changed" : null,
                        userChanged ? "deck-user-changed" : null,
                      ]
                        .join(" ")
                        .trim()}
                    >
                      <Box sx={itemInnerStyle} className={[highlight ? highlightedClass : null].join(" ").trim()}>
                        {apiChanged && !userChanged && (
                          <DeckIconButton
                            color="warning"
                            icon={<RotateLeftRounded />}
                            size="sm"
                            variant="plain"
                            disabled={loading}
                            onClick={() => onSyncFigure(figureID, apiChangedIDs)}
                          />
                        )}
                        {userChanged && (
                          <DeckIconButton
                            color="danger"
                            icon={<RotateLeftRounded />}
                            size="sm"
                            variant="plain"
                            disabled={loading}
                            onClick={() => onResetFigure(figureID, userChangedIDs)}
                          />
                        )}
                        {!changed && <DeckStatus status={0} />}
                        <DeckLabel
                          size="sm"
                          color={userChanged ? "danger" : apiChanged ? "warning" : "primary"}
                          title={{
                            text: value,
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
                          onClick={() => onSelectShapes(shapeIDs)}
                          disabled={loading}
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
                disabled={loading}
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
