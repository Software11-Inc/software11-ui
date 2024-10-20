import Box from "@mui/joy/Box";
import { DeckStatus } from "../deck-status";
import { DeckLabel } from "../deck-label";
import { DeckTemplatePreviewProps } from "./deck-template-preview.types";
import { templatePreviewStyle } from "./deck-template-preview.styles";

export const DeckTemplatePreview: React.FC<DeckTemplatePreviewProps> = ({ item }) => {
  const valid = Boolean(item?.name?.length);
  const status = valid ? 0 : 2;

  return (
    <Box sx={templatePreviewStyle}>
      <DeckStatus status={status} />
      <DeckLabel title={{ text: item?.name }} description={{ text: item?.description }} size="sm" order={0} />
    </Box>
  );
};
