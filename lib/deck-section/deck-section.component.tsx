import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import React from "react";
import { DeckLabel } from "../deck-label";
import {
  actionClassName,
  actionContainerStyle,
  className,
  iconStyle,
  indicatorClassName,
  sectionStyle,
} from "./deck-section.styles";
import { DeckSectionProps } from "./deck-section.types";

export const DeckSection: React.FC<DeckSectionProps> = ({
  separator,
  separatorIcon,
  action,
  actionIcon,
  content,
  defaultExpanded = false,
  hidden = false,
  immutable = false,
  hasLine = true,
  onChange = () => null,
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  hidden;
  const hasItems = typeof separator.count === "undefined" ? true : Boolean(separator.count);

  const accordionSummarySlotProps = {
    button: {
      component: "div",
      onClick: (e: any) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains(actionClassName) || target.classList.contains("MuiSvgIcon-root")) {
          return;
        }
        if (!immutable) {
          setExpanded(!expanded);
          onChange(!expanded);
        }
      },
    },
  } as any;

  return (
    <AccordionGroup
      className={[className, hidden ? "hidden" : "", hasLine ? "with-line" : ""].join(" ").trim()}
      sx={sectionStyle}
    >
      <Accordion expanded={expanded}>
        <AccordionSummary indicator={null} slotProps={accordionSummarySlotProps}>
          {separatorIcon && <Box sx={iconStyle(separator.color)}>{separatorIcon}</Box>}
          <DeckLabel
            title={{
              text: separator.title,
              limit: 1,
            }}
            description={{
              text: separator.description,
              limit: 1,
            }}
          />
          {hasItems && (
            <Box className={indicatorClassName} sx={{ color: `${separator.color}.100` }}>
              {separator.count}
            </Box>
          )}
          {action && !action.hidden && (
            <Box sx={actionContainerStyle}>
              <Button
                className={actionClassName}
                color={action.color}
                variant={action.variant}
                disabled={action.disabled}
                onClick={action.onClick}
                startDecorator={actionIcon}
              >
                {action.text}
              </Button>
            </Box>
          )}
        </AccordionSummary>
        <AccordionDetails>{content}</AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
