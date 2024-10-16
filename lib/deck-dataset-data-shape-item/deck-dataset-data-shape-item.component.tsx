import ContentCopyRounded from "@mui/icons-material/ContentCopyRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import RotateLeftRounded from "@mui/icons-material/RotateLeftRounded";
import Box from "@mui/joy/Box";
import React from "react";
import { dataItemStyle } from "../deck-dataset-data-item/deck-dataset-data-item.styles";
import { DeckIconButton } from "../deck-icon-button";
import { className } from "../deck-icon-button/deck-icon-button.style";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { IDeckDatasetDataShapeItemProps } from "./deck-dataset-data-shape-item.types";

export const DeckDatasetDataShapeItem: React.FC<IDeckDatasetDataShapeItemProps> = ({
  figureName,
  shape,
  apiChange,
  userChange,
  loading = false,
  onReset,
  onSync,
  onDelete,
  onCopy,
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
          <DeckIconButton
            color="warning"
            icon={<RotateLeftRounded />}
            size="sm"
            variant="plain"
            disabled={loading}
            onClick={onSync}
          />
        )}
        {hasUserChanges && Boolean(onReset) && (
          <DeckIconButton
            color="danger"
            icon={<RotateLeftRounded />}
            size="sm"
            variant="plain"
            disabled={loading}
            onClick={onReset}
          />
        )}
        <DeckLabel
          title={{
            text: getShapeValue(),
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
          {Boolean(onDelete) && (
            <DeckIconButton
              color="danger"
              disabled={loading}
              onClick={onDelete}
              variant="plain"
              icon={<DeleteOutlineRounded />}
            />
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
