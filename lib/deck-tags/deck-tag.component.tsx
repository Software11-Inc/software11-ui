import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { tagStyle } from "./deck-tags.styles";
import { IDeckTagProps } from "./deck-tags.types";

export const DeckTag: React.FC<IDeckTagProps> = ({ tag, size, onClick }) => {
  // Optimized click handler to prevent function call if onClick is not provided
  const handleClick = onClick ? () => onClick(tag) : undefined;

  return (
    <Box sx={tagStyle} onClick={handleClick}>
      <DeckLabel
        description={{
          text: tag,
          limit: 1,
        }}
        size={size}
      />
    </Box>
  );
};
