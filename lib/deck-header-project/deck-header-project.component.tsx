import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { deckHeaderProjectStyles } from "./deck-header-project.styles";
import { DeckHeaderProjectProps } from "./deck-header-project.types";

export const DeckHeaderProject: React.FC<DeckHeaderProjectProps> = ({
  status,
  title,
  description,
  isRight = false,
  onStatusClick,
}) => {
  return (
    <Box sx={deckHeaderProjectStyles.container}>
      <Box sx={deckHeaderProjectStyles.status} onClick={onStatusClick}>
        <DeckStatus status={status} />
      </Box>
      <Box sx={deckHeaderProjectStyles.title} className={!isRight ? "visible" : "hidden"}>
        <DeckLabel {...{ title, description }} />
      </Box>
    </Box>
  );
};
