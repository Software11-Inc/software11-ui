import { DatasetType } from "@models";
import { IDeckTemplateExcelSinglePreviewProps } from "./deck-template-excel-single-preview.types";
import * as React from "react";
import { DeckLabel } from "../../deck-label";
import Box from "@mui/joy/Box";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import { DeckIconButton } from "../../deck-icon-button";
import { DatasetIcon } from "../../deck-dataset-item";
import * as fromUtils from "../../utils";
import {
  cardContentStyle,
  cardHeaderStyle,
  cardStyle,
  columnStyle,
  rowStyle,
} from "./deck-template-excel-single-preview.styles";
import BorderOuterRounded from "@mui/icons-material/BorderOuterRounded";
import FmdGoodRounded from "@mui/icons-material/FmdGoodRounded";

export const DeckTemplateExcelSinglePreview: React.FC<IDeckTemplateExcelSinglePreviewProps> = ({
  templateName = "",
  templateDescription = "",
  config,
  openConfig = () => {},
  selectRange = () => {},
}) => {
  const label = config?.direction === "vertical" ? "row" : "column";
  const getType = (type?: DatasetType) => {
    switch (type) {
      case "excel-default":
        return "DEFAULT";
      case "excel-table":
        return "TABLE";
      case "excel-matrix":
        return "MATRIX";
      default:
        return "UNKNOWN";
    }
  };

  return (
    <React.Fragment>
      <Box sx={cardStyle}>
        <Box sx={cardHeaderStyle}>
          <Box sx={{ ...columnStyle, flex: 1 }}>
            <DeckLabel
              size="sm"
              title={{
                text: templateName,
              }}
              description={{
                text: templateDescription,
              }}
            />
          </Box>
          <DeckIconButton icon={<SettingsRounded />} onClick={openConfig} />
        </Box>
        <Box sx={cardContentStyle}>
          <Box sx={rowStyle}>
            <DeckIconButton size="md" icon={<BorderOuterRounded />} onClick={() => selectRange(config?.range)} />

            <DeckLabel
              size="sm"
              title={{
                text: config?.range,
              }}
              description={{
                text: `Range`,
              }}
            />
          </Box>
          <Box sx={rowStyle}>
            <Box sx={{ ...columnStyle, alignItems: "center", width: "1.75rem" }}>
              <DatasetIcon type={config?.datasetType} />
            </Box>
            <DeckLabel size="sm" title={{ text: getType(config?.datasetType) }} description={{ text: "Type" }} />
          </Box>
          {config?.primaryColumn && (
            <Box sx={rowStyle}>
              <DeckIconButton
                size="md"
                icon={<FmdGoodRounded />}
                onClick={() => {
                  const row = config.primaryColumn?.cell?.row;
                  const column = config.primaryColumn?.cell?.column;
                  const lastColumn = fromUtils.getLastColumnFromRange(config.range);
                  const lastRow = fromUtils.getLastRowFromRange(config.range);
                  let rangeToSelect = null;
                  if (config?.direction === "horizontal") {
                    rangeToSelect = `${column}${row}:${column}${lastRow}`;
                  } else {
                    rangeToSelect = `${column}${row}:${lastColumn}${row}`;
                  }
                  if (rangeToSelect) {
                    selectRange(rangeToSelect);
                  }
                }}
              />
              <DeckLabel
                title={{
                  text: `${config.primaryColumn?.cell.column}${config.primaryColumn?.cell?.row} | ${config.primaryColumn?.value}`,
                }}
                size="sm"
                description={{
                  text: `Primary ${label}`,
                }}
              />
            </Box>
          )}
          {config?.secondaryColumn && (
            <Box sx={rowStyle}>
              <DeckIconButton
                size="md"
                icon={<FmdGoodRounded />}
                onClick={() => {
                  const column = config.secondaryColumn?.cell?.column;
                  const row = config.secondaryColumn?.cell?.row;
                  const lastColumn = fromUtils.getLastColumnFromRange(config.range);
                  const lastRow = fromUtils.getLastRowFromRange(config.range);
                  let rangeToSelect = null;
                  if (config?.direction === "horizontal") {
                    rangeToSelect = `${column}${row}:${column}${lastRow}`;
                  } else {
                    rangeToSelect = `${column}${row}:${lastColumn}${row}`;
                  }
                  if (rangeToSelect) {
                    selectRange(rangeToSelect);
                  }
                }}
              />
              <DeckLabel
                size="sm"
                title={{
                  text: `${config.secondaryColumn?.cell.column}${config.secondaryColumn?.cell?.row} | ${config.secondaryColumn?.value}`,
                }}
                description={{
                  text: `Secondary ${label}`,
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
