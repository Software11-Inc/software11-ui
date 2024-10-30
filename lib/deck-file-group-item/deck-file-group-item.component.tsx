import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import React, { useEffect } from "react";
import { accordionGroupStyles } from "../accordion.style";
import { ExcelIcon, GoogleSheetIcon, GoogleSlidesIcon, PowerpointIcon } from "../deck-icons";
import { DeckLabel } from "../deck-label";
import { fileGroupDataStyle, fileGroupItemClass, fileHeaderStyle, fileIconStyle } from "./deck-file-group-item.styles";
import { IDeckFileGroupItemProps } from "./deck-file-group-item.types";

const SIZE = 16;

export const DeckFileGroupItem: React.FC<IDeckFileGroupItemProps> = ({
  file,
  itemTemplate,
  defaultExpanded = false,
  emptyTemplate = null,
  open = false,
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const hasTemplate = !!itemTemplate;

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  const accordionSummarySlotProps = {
    button: {
      component: "div",
      onClick: () => {
        setExpanded(!expanded);
      },
    },
  } as any;

  const getIcon = (type?: string) => {
    if (!type) {
      return null;
    }
    let component = null;

    switch (type.toLowerCase()) {
      case "excel": {
        component = <ExcelIcon />;
        break;
      }
      case "powerpoint": {
        component = <PowerpointIcon />;
        break;
      }
      case "google sheet": {
        component = <GoogleSheetIcon />;
        break;
      }
      case "google slide": {
        component = <GoogleSlidesIcon />;
        break;
      }
      default: {
        component = null;
        break;
      }
    }

    if (!component) {
      return null;
    }

    return React.cloneElement(component as any, { width: SIZE, height: SIZE });
  };
  return (
    <React.Fragment>
      <AccordionGroup
        key={file.header.label}
        className={fileGroupItemClass}
        sx={{
          ...accordionGroupStyles(fileGroupItemClass, false, 1, "sm", true),
          bgcolor: "background.body",
        }}
      >
        <Accordion expanded={expanded} defaultExpanded={defaultExpanded}>
          <AccordionSummary slotProps={accordionSummarySlotProps}>
            <Box sx={fileHeaderStyle}>
              <Box sx={fileIconStyle}>{getIcon(file.header?.type)}</Box>
              <DeckLabel
                title={{
                  text: file.header?.label,
                }}
                description={{
                  text: file.header?.description,
                }}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {expanded && hasTemplate && (
              <Box sx={fileGroupDataStyle}>
                {file.data.map((sheet, index) => (
                  <React.Fragment key={index + sheet.header.label}>{itemTemplate(sheet)}</React.Fragment>
                ))}
              </Box>
            )}
            {expanded && !hasTemplate && emptyTemplate}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
};
