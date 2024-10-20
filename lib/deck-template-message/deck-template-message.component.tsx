import React from "react";
import { DeckTemplateMessageProps } from "./deck-template-message.types";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { mainBoxStyle, mainContentStyle, mainHeaderStyle } from "./deck-template-message.styles";
import Link from "@mui/joy/Link";

export const DeckTemplateMessage: React.FC<DeckTemplateMessageProps> = ({
  message,
  position,
  title,
  action = null,
}) => {
  return (
    <React.Fragment>
      <Box sx={mainBoxStyle}>
        <Box sx={mainHeaderStyle}>
          <Typography px={1} sx={{ color: "primary.500", fontSize: 16 }}>
            {position}
          </Typography>
          <Typography color="primary" fontSize={16}>
            {title}
          </Typography>
        </Box>
        <Box sx={mainContentStyle}>
          <Typography>{message}</Typography>
          {action && (
            <Link fontSize={12} fontWeight="bold" onClick={action.action}>
              {action.text}
            </Link>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
