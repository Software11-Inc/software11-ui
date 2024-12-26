import LanguageRounded from "@mui/icons-material/LanguageRounded";
import { DeckApplicationProps } from "./deck-application.types";
import { ExcelIcon, PowerpointIcon } from "../deck-icons";

export const DeckApplcation: React.FC<DeckApplicationProps> = ({ application }) => {
  switch (application) {
    case "web": {
      return (
        <LanguageRounded
          sx={{
            color: "var(--joy-palette-primary-500)",
          }}
        />
      );
    }
    case "excel": {
      return <ExcelIcon />;
    }
    case "powerpoint": {
      return <PowerpointIcon />;
    }
    default: {
      return null;
    }
  }
};
