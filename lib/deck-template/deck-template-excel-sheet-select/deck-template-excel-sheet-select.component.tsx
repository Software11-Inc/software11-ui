import Box from "@mui/joy/Box";
import { IDeckTemplateExcelSheetSelectProps } from "./deck-template-excel-sheet-select.types";
import {
  cardContentStyle,
  cardStyle,
  rowStyle,
} from "../deck-template-excel-single-preview/deck-template-excel-single-preview.styles";
import { DeckIconButton } from "../../deck-icon-button";
import AddRounded from "@mui/icons-material/AddRounded";
import CheckRounded from "@mui/icons-material/CheckRounded";
import LockRounded from "@mui/icons-material/LockRounded";
import { ISheet } from "@models";
import React from "react";
import { DeckLabel } from "../../deck-label";

export const DeckTemplateExcelSheetSelect: React.FC<IDeckTemplateExcelSheetSelectProps> = ({
  sheets = [],
  fileContainers = [],
  selectedSheets = [],
  range = "",
  error = "It looks like your sheet hasn't been added to the project yet. Please sync the project first.",
  onSave = () => {},
  selectSheet = () => {},
  selectRange = () => {},
}) => {
  const isSelected = (sheet: ISheet) => selectedSheets.some((s) => s.id === sheet.id);

  const toggleSheet = (sheet: ISheet) => {
    if (isSelected(sheet)) {
      onSave(selectedSheets.filter((s) => s.id !== sheet.id));
    } else {
      selectSheet(sheet.id);
      selectRange(range);
      onSave([...selectedSheets, sheet]);
    }
  };

  const getSheetContainer = (sheet: ISheet) => {
    return fileContainers.find((c) => c.sheetID === sheet.id);
  };

  return (
    <Box sx={cardStyle}>
      <Box sx={cardContentStyle}>
        {sheets.map((sheet) => {
          const container = getSheetContainer(sheet);
          const hasContainer = Boolean(container);
          return (
            <React.Fragment key={sheet.id}>
              <Box sx={rowStyle}>
                <DeckIconButton
                  variant={isSelected(sheet) ? "soft" : "plain"}
                  icon={hasContainer ? isSelected(sheet) ? <CheckRounded /> : <AddRounded /> : <LockRounded />}
                  color={hasContainer ? "success" : "danger"}
                  disabled={!hasContainer}
                  onClick={() => toggleSheet(sheet)}
                />
                <DeckLabel
                  key={sheet.id}
                  size="sm"
                  title={{
                    text: sheet.name,
                  }}
                  description={{
                    text: !hasContainer ? error : "",
                  }}
                />
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
