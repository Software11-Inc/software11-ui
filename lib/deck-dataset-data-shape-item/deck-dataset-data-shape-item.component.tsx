import ContentCopyRounded from "@mui/icons-material/ContentCopyRounded";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import RotateLeftRounded from "@mui/icons-material/RotateLeftRounded";
import LinkOffRounded from "@mui/icons-material/LinkOffRounded";
import Box from "@mui/joy/Box";
import React from "react";
import { dataItemStyle } from "../deck-dataset-data-item/deck-dataset-data-item.styles";
import { DeckIconButton } from "../deck-icon-button";
import { className } from "../deck-icon-button/deck-icon-button.style";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { IDeckDatasetDataShapeItemProps } from "./deck-dataset-data-shape-item.types";
import Tooltip from "@mui/joy/Tooltip";

export const DeckDatasetDataShapeItem: React.FC<IDeckDatasetDataShapeItemProps> = ({
  figureName,
  shape,
  apiChange,
  userChange,
  emptyValue,
  loading = false,
  resetTooltip,
  syncTooltip,
  unlinkTooltip,
  deleteTooltip,
  onReset,
  onSync,
  onDelete,
  onCopy,
  onUnlink,
  onMouseEnter,
}) => {
  // const order = hasUserChanges ? -3 : hasApiChanges ? -2 : -1;
  const order = 0;
  const hasApiChanges = Boolean(apiChange);
  const hasUserChanges = Boolean(userChange);
  const status = hasUserChanges ? 2 : hasApiChanges ? 1 : 0;
  const hasChanges = hasApiChanges || hasUserChanges;
  const color = hasUserChanges ? "danger" : hasApiChanges ? "warning" : "primary";
  const itemClassName = [className, hasApiChanges ? "has-api-changes" : "", hasUserChanges ? "has-user-changes" : ""]
    .join(" ")
    .trim();

  const getShapeValue = () => {
    switch (true) {
      case hasUserChanges:
        return userChange?.value;
      case hasApiChanges:
        return apiChange?.value;
      default:
        return shape?.latestFigureValue;
    }
  };
  return (
    <React.Fragment>
      <Box sx={dataItemStyle(className, 0, "sm", false, order)} className={itemClassName} onMouseEnter={onMouseEnter}>
        {!hasChanges && <DeckStatus status={status} />}
        {hasApiChanges && !hasUserChanges && Boolean(onSync) && (
          <React.Fragment>
            <Tooltip
              title={
                <DeckLabel
                  title={syncTooltip?.title}
                  description={syncTooltip?.description}
                  color="warning"
                  size="sm"
                />
              }
              placement="bottom-start"
              variant="soft"
              color="warning"
              arrow
              sx={{ maxWidth: "70vw" }}
            >
              <Box sx={{ width: "1.5rem", height: "1.5rem" }}>
                <DeckIconButton
                  color="warning"
                  icon={<RotateLeftRounded />}
                  size="sm"
                  variant="plain"
                  disabled={loading}
                  onClick={onSync}
                />
              </Box>
            </Tooltip>
          </React.Fragment>
        )}
        {hasUserChanges && Boolean(onReset) && (
          <Tooltip
            title={
              <DeckLabel title={resetTooltip?.title} description={resetTooltip?.description} color="danger" size="sm" />
            }
            placement="bottom-start"
            variant="soft"
            color="danger"
            arrow
            sx={{ maxWidth: "70vw" }}
          >
            <Box sx={{ width: "1.5rem", height: "1.5rem" }}>
              <DeckIconButton
                color="danger"
                icon={<RotateLeftRounded />}
                size="sm"
                variant="plain"
                disabled={loading}
                onClick={onReset}
              />
            </Box>
          </Tooltip>
        )}
        <DeckLabel
          title={{
            text: getShapeValue() || emptyValue || "",
          }}
          description={{
            text: figureName || "",
          }}
          color={color}
        />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          {Boolean(onCopy) && (
            <DeckIconButton
              color="primary"
              disabled={loading}
              onClick={onCopy}
              variant="plain"
              icon={<ContentCopyRounded />}
            />
          )}
          {Boolean(onUnlink) && (
            <React.Fragment>
              <Tooltip
                title={
                  <DeckLabel
                    title={unlinkTooltip?.title}
                    description={unlinkTooltip?.description}
                    color="danger"
                    size="sm"
                  />
                }
                placement="bottom-end"
                variant="soft"
                color="danger"
                arrow
                sx={{ maxWidth: "70vw" }}
              >
                <Box sx={{ width: "1.5rem", height: "1.5rem" }}>
                  <DeckIconButton
                    color="danger"
                    disabled={loading}
                    onClick={onUnlink}
                    variant="plain"
                    icon={<LinkOffRounded />}
                  />
                </Box>
              </Tooltip>
            </React.Fragment>
          )}
          {Boolean(onDelete) && (
            <React.Fragment>
              <Tooltip
                title={
                  <DeckLabel
                    title={deleteTooltip?.title}
                    description={deleteTooltip?.description}
                    color="danger"
                    size="sm"
                  />
                }
                placement="bottom-end"
                variant="soft"
                color="danger"
                arrow
                sx={{ maxWidth: "70vw" }}
              >
                <Box sx={{ width: "1.5rem", height: "1.5rem" }}>
                  <DeckIconButton
                    color="danger"
                    disabled={loading}
                    onClick={onDelete}
                    variant="plain"
                    icon={<DeleteSweepRoundedIcon />}
                  />
                </Box>
              </Tooltip>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
