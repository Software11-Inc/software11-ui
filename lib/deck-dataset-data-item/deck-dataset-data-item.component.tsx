import { DatasetType, IDefaultFigure, IFigure, ITableFigure, Size } from "@models";
import AddRounded from "@mui/icons-material/AddRounded";
import RotateLeftRounded from "@mui/icons-material/RotateLeftRounded";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import Box from "@mui/joy/Box";
import * as React from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { actionButtonsStyle, className, columnStyle, dataItemStyle } from "./deck-dataset-data-item.styles";
import { DeckDatasetDataItemProps } from "./deck-dataset-data-item.types";

export const DeckDatasetDataItem: React.FC<DeckDatasetDataItemProps> = ({
  figure,
  type,
  shapes,
  apiChanges,
  userChanges,
  hasStatus,
  hasActions,
  compact,
  level,
  size = "sm",
  onAdd,
  onReset,
  onSettings,
  onSync,
}) => {
  const hasShapes = shapes && shapes.length > 0;
  const hasApiChanges = apiChanges && apiChanges.length > 0;
  const hasUserChanges = userChanges && userChanges.length > 0;
  const status = hasShapes ? (hasUserChanges ? 2 : hasApiChanges ? 1 : 0) : -1;
  const order = hasUserChanges ? -3 : hasApiChanges ? -2 : hasShapes ? -1 : 0;
  const figureClassName = [
    className,
    hasShapes ? "has-shapes" : "",
    hasApiChanges ? "has-api-changes" : "",
    hasUserChanges ? "has-user-changes" : "",
  ]
    .join(" ")
    .trim();
  return (
    <React.Fragment>
      <Box sx={dataItemStyle(level, size, compact, order)} className={figureClassName}>
        {hasStatus && <DeckStatus status={status} />}
        <Box sx={columnStyle}>
          <DataItem item={figure} {...{ type, size, hasApiChanges, hasUserChanges }} />
        </Box>
        {hasActions && (
          <DeckDatasetDataItemActions
            {...{ hasShapes, hasApiChanges, hasUserChanges, onAdd, onReset, onSettings, onSync }}
          />
        )}
      </Box>
    </React.Fragment>
  );
};

const DataItem: React.FC<{
  item: IFigure;
  type: DatasetType;
  size: Size;
  hasUserChanges?: boolean;
  hasApiChanges?: boolean;
}> = ({ item, type, size, hasApiChanges, hasUserChanges }) => {
  const props = { ...{ size, hasApiChanges, hasUserChanges } } as any;
  switch (type) {
    case "default":
      return <DeckDatasetDataDefaultItem item={item as IDefaultFigure} {...props} />;
    case "excel-default":
    case "excel-data":
    case "excel-matrix":
    case "excel-table":
      return <DeckDatasetDataExcelItem item={item as ITableFigure} {...props} />;
  }
};

export const DeckDatasetDataDefaultItem: React.FC<{
  item: IDefaultFigure;
  size: Size;
  hasUserChanges?: boolean;
  hasApiChanges?: boolean;
}> = ({ item, size, hasApiChanges, hasUserChanges }) => {
  return (
    <React.Fragment>
      <DeckLabel
        color={hasUserChanges ? "danger" : hasApiChanges ? "warning" : "primary"}
        size={size}
        title={{
          text: item?.value as string,
          limit: 2,
        }}
        description={{
          text: item?.name as string,
          limit: 1,
          bold: true,
        }}
      />
    </React.Fragment>
  );
};

export const DeckDatasetDataExcelItem: React.FC<{
  item: ITableFigure;
  size: Size;
  hasUserChanges?: boolean;
  hasApiChanges?: boolean;
}> = ({ item, size, hasApiChanges, hasUserChanges }) => {
  const value =
    item?.figure?.value && String(item?.figure?.value).length
      ? item.figure.value
      : `Cell ${item?.figure?.cell} is empty`;
  const name = item?.name?.value && String(item?.name?.value).length ? item.name.value : item.name.cell;
  return (
    <React.Fragment>
      <DeckLabel
        color={hasUserChanges ? "danger" : hasApiChanges ? "warning" : "primary"}
        size={size}
        title={{
          text: value as string,
          limit: 2,
        }}
        description={{
          text: name as string,
          limit: 1,
          bold: true,
        }}
      />
    </React.Fragment>
  );
};

export const DeckDatasetDataItemActions: React.FC<{
  hasShapes?: boolean;
  hasApiChanges?: boolean;
  hasUserChanges?: boolean;
  onAdd: () => void;
  onReset: () => void;
  onSettings: () => void;
  onSync: () => void;
}> = ({ hasShapes, hasApiChanges, hasUserChanges, onAdd, onReset, onSettings, onSync }) => {
  const hasChanges = hasApiChanges || hasUserChanges;
  return (
    <React.Fragment>
      <Box sx={actionButtonsStyle}>
        {!hasChanges && (
          <DeckIconButton
            icon={<AddRounded />}
            size="sm"
            variant={hasShapes ? "plain" : "soft"}
            color="success"
            onClick={onAdd}
          />
        )}
        {hasChanges && (
          <DeckIconButton
            icon={
              <RotateLeftRounded
                sx={{
                  fontSize: 14,
                }}
              />
            }
            variant="plain"
            color={hasUserChanges ? "danger" : "warning"}
            size="sm"
            onClick={() => {
              hasUserChanges ? onReset() : onSync();
            }}
          />
        )}
        {hasShapes && (
          <DeckIconButton icon={<SettingsOutlined />} variant="plain" color="primary" size="sm" onClick={onSettings} />
        )}
      </Box>
    </React.Fragment>
  );
};
