import React from "react";
import { DeckLabel } from "../deck-label";
import { DeckImageCardProps } from "./deck-image-card.types";
import Box from "@mui/joy/Box";
import { contextBoxStyle, imageBoxStyle, imageCardStyle } from "./deck-image-card.styles";

export const DeckImageCard: React.FC<DeckImageCardProps> = ({
  imageSrc,
  title,
  description,
  onImageClick,
  insertText = "Click to insert",
}) => {
  return (
    <React.Fragment>
      <Box sx={imageCardStyle}>
        <Box sx={imageBoxStyle} onClick={onImageClick}>
          <img src={imageSrc} loading="lazy" alt={title?.text || ""} />
          <Box className="deck-insert-button">
            <span className="deck-insert-button-text">{insertText}</span>
          </Box>
        </Box>
        <Box sx={contextBoxStyle}>
          <DeckLabel title={title} description={description} />
        </Box>
      </Box>
    </React.Fragment>
  );
};
