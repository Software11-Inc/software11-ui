import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { headerPageStyles } from "./deck-header-page.styles";
import { DeckHeaderPageProps } from "./deck-header-page.types";
import { DeckIconButton } from "../deck-icon-button";
import SyncRounded from "@mui/icons-material/SyncRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";

export const DeckHeaderPage: React.FC<DeckHeaderPageProps> = ({ title, description, loading, onSync, onDelete }) => {
  return (
    <Box sx={headerPageStyles}>
      <DeckLabel size="sm" title={{ text: title, limit: 1 }} description={{ text: description, limit: 1 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {onSync && (
          <Box>
            <DeckIconButton
              icon={
                <SyncRounded
                  sx={{
                    animation: loading ? "spin 2s linear infinite" : "none",
                  }}
                />
              }
              disabled={loading}
              variant="plain"
              color="success"
              onClick={onSync}
            />
          </Box>
        )}

        {onDelete && (
          <Box>
            <DeckIconButton
              icon={<DeleteOutlineRounded />}
              variant="plain"
              color="danger"
              disabled={loading}
              onClick={onDelete}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
