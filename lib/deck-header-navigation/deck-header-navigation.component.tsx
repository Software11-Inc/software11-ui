import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Box from "@mui/joy/Box";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { navigationStyles } from "./deck-header-navigation.styles";
import { DeckHeaderNavigationProps } from "./deck-header-navigation.types";

export const DeckHeaderNavigation: React.FC<DeckHeaderNavigationProps> = ({
  title,
  description,
  onBack,
}) => {
  return (
    <Box sx={navigationStyles}>
      <DeckIconButton
        size="sm"
        rounded={true}
        icon={<ChevronLeft />}
        onClick={onBack}
      />
      <DeckLabel
        size="sm"
        title={{ text: title, limit: 1 }}
        description={{ text: description, limit: 1 }}
      />
    </Box>
  );
};
