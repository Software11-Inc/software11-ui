import LogoutRounded from "@mui/icons-material/LogoutRounded";
import NotificationsNoneRounded from "@mui/icons-material/NotificationsNoneRounded";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import { DeckIconButton } from "../deck-icon-button";
import { userActionsStyles } from "./deck-header-user-actions.styles";
import { DeckHeaderUserActionsProps } from "./deck-header-user-actions.types";

export const DeckHeaderUserActions: React.FC<DeckHeaderUserActionsProps> = ({ onLogout }) => {
  return (
    <Box sx={userActionsStyles}>
      <Badge badgeContent={0} showZero={false} badgeInset="2px 2px 0 0" size="sm" color="warning">
        <DeckIconButton color="neutral" variant="plain" icon={<NotificationsNoneRounded />}></DeckIconButton>
      </Badge>
      <DeckIconButton
        rounded={true}
        color="neutral"
        variant="plain"
        icon={<LogoutRounded />}
        onClick={onLogout}
      ></DeckIconButton>
    </Box>
  );
};
