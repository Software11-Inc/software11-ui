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
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  hidden;
  const hasItems =
    typeof separator.count === "undefined" ? true : Boolean(separator.count);

  return (
    <AccordionGroup
      className={[className, hidden ? "hidden" : ""].join(" ")}
      sx={sectionStyle}
    >
      <Accordion expanded={hasItems && expanded}>
        <AccordionSummary
          indicator={null}
          slotProps={{
            button: {
              component: "div",
              onClick: (e) => {
                const target = e.target as HTMLElement;
                if (
                  target.classList.contains(actionClassName) ||
                  target.classList.contains("MuiSvgIcon-root")
                ) {
                  return;
                }
                !immutable ? setExpanded(!expanded) : null;
              },
            },
          }}
        >
          {separatorIcon && (
            <Box sx={iconStyle(separator.color)}>{separatorIcon}</Box>
          )}
          <DeckLabel
            title={{
              text: separator.title.toUpperCase(),
              limit: 1,
            }}
            description={{
              text: separator.description,
              limit: 1,
            }}
          />
          {hasItems && (
            <Box
              className={indicatorClassName}
              sx={{ color: `${separator.color}.100` }}
            >
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
