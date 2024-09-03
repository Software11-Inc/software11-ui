import SyncRounded from "@mui/icons-material/SyncRounded";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import React from "react";
import { accordionGroupStyles } from "../accordion.style";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { contentStyle, headerStyle } from "./deck-active-project.styles";
import { DeckActiveProjectProps } from "./deck-active-project.types";

export const DeckActiveProject: React.FC<DeckActiveProjectProps> = ({
  projectName,
  projectDescription,
  projectStatus,
  loading,
  onSync,
  onDisconnect,
}) => {
  const className = `deck-active-project`;
  const [open, setOpen] = React.useState(false);

  const accordionSummarySlotProps = {
    button: {
      component: "div",
      onClick: (e: any) => {
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
  } as any;

  return (
    <AccordionGroup className={className} sx={accordionGroupStyles(className, false, 0, "sm", true)}>
      <Accordion expanded={open}>
        <AccordionSummary slotProps={accordionSummarySlotProps}>
          <Box sx={headerStyle}>
            <DeckStatus status={projectStatus} loading={loading} />
            <DeckLabel
              size="sm"
              title={{
                text: projectName,
                limit: 1,
              }}
              description={{
                text: projectDescription,
                limit: 2,
              }}
            />
            <DeckIconButton
              size="sm"
              icon={
                <SyncRounded
                  sx={{
                    animation: "spin 2s linear infinite",
                  }}
                />
              }
              hidden={!loading}
              rounded={true}
              onClick={onSync}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={contentStyle}>
            <Button
              size="sm"
              variant="solid"
              color="danger"
              sx={{
                fontSize: 11,
                minHeight: "unset",
                p: 0.75,
              }}
              tabIndex={-1}
              onClick={onDisconnect}
            >
              {"Disconnect".toUpperCase()}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
