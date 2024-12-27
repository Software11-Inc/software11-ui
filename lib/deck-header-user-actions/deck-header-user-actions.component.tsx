import LogoutRounded from "@mui/icons-material/LogoutRounded";
import NotificationsNoneRounded from "@mui/icons-material/NotificationsNoneRounded";
import NotificationsActiveRounded from "@mui/icons-material/NotificationsActiveRounded";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import { DeckIconButton } from "../deck-icon-button";
import { userActionsStyles } from "./deck-header-user-actions.styles";
import { DeckHeaderUserActionsProps } from "./deck-header-user-actions.types";

export const DeckHeaderUserActions: React.FC<DeckHeaderUserActionsProps> = ({
  notificationCount = 0,
  notificationOpen = false,
  onNotifications = () => {},
  onLogout = () => {},
}) => {
  const hasNotifications = notificationCount > 0;
  return (
    <Box sx={userActionsStyles}>
      <Badge badgeContent={notificationCount} showZero={false} badgeInset="5px 5px 0 0" size="sm" color="warning">
        <DeckIconButton
          color="primary"
          variant={notificationOpen ? "soft" : "plain"}
          icon={hasNotifications ? <NotificationsActiveRounded /> : <NotificationsNoneRounded />}
          onClick={onNotifications}
        ></DeckIconButton>
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
