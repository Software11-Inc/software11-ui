import Box from "@mui/joy/Box";
import { IDeckTagsProps } from "./deck-tags.types";
import { DeckTag } from "./deck-tag.component";
import { tagBoxStyle } from "./deck-tags.styles";

export const DeckTags: React.FC<IDeckTagsProps> = ({ tags = [], limit = 3, onClick, size = "sm" }) => {
  const handleClick = (tag: string) => {
    if (onClick) {
      onClick(tag);
    }
  };

  const displayedTags = tags.slice(0, limit);
  const hiddenTagCount = tags.length - limit;

  return (
    <Box sx={tagBoxStyle}>
      {displayedTags.map((tag, index) => (
        <DeckTag key={index} tag={tag} size={size} onClick={() => handleClick(tag)} />
      ))}
      {hiddenTagCount > 0 && (
        <DeckTag key="more" tag={`+${hiddenTagCount}`} size={size} onClick={() => handleClick(`+${hiddenTagCount}`)} />
      )}
    </Box>
  );
};
