import Box from "@mui/joy/Box";
import React from "react";
import { DeckHeaderUserActions } from "../deck-header-user-actions";
import { DeckHeaderUserProfile } from "../deck-header-user-profile";
import { className, headerStyle } from "./deck-header.styles";
import { DeckHeaderProps } from "./deck-header.types";
import { DeckIconButton } from "../deck-icon-button";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { DeckHeaderSearch } from "../deck-header-search";
import { DeckHeaderPage } from "../deck-header-page/deck-header-page.component";

export const DeckHeader: React.FC<DeckHeaderProps> = ({
  type = "default",
  title,
  description,
  fullName,
  role,
  email,
  avatarUrl,
  hidden = false,
  onLogout,
  onBack,
  notificationCount = 0,
  notificationOpen = false,
  onNotifications = () => {},
  searchPlaceholder = "Type to search",
  searchValue = "",
  onSearchChange = () => {},
  loading = false,
  onDelete,
  onSync,
}) => {
  const [focused, setFocused] = React.useState(false);

  let showNavigation = false;
  switch (type) {
    case "search":
      showNavigation = true;
      break;
    case "page":
      showNavigation = true;
      break;
    default:
      break;
  }

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const classList = [className, hidden ? "hidden" : "", focused ? "deck-focus" : ""].join(" ").trim();

  return (
    <Box className={classList} sx={headerStyle}>
      <Box className={`${className}-content`}>
        <div className={["animation", "animation-navigation", showNavigation ? "visible" : "hidden"].join(" ")}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DeckIconButton size="sm" variant="plain" rounded={true} icon={<ChevronLeft />} onClick={onBack} />
          </Box>
          <DeckHeaderContent
            {...{
              type,
              searchPlaceholder,
              searchValue,
              onSearchChange,
              onFocus,
              onBlur,
              title,
              description,
              loading,
              onSync,
              onDelete,
            }}
          />
        </div>
        <div className={[`animation`, `animation-profile`].join(" ")}>
          <DeckHeaderUserProfile
            fullName={fullName}
            role={role}
            email={email}
            avatarUrl={avatarUrl}
            isRight={showNavigation}
            onLogout={onLogout}
          />
        </div>
        <div className={[`animation`, `animation-actions`, !showNavigation ? "visible" : "hidden"].join(" ")}>
          <DeckHeaderUserActions
            onLogout={onLogout}
            notificationCount={notificationCount}
            notificationOpen={notificationOpen}
            onNotifications={onNotifications}
          />
        </div>
      </Box>
    </Box>
  );
};

const DeckHeaderContent: React.FC<
  Partial<DeckHeaderProps> & {
    onFocus?: () => void;
    onBlur?: () => void;
  }
> = ({
  title,
  description,
  type,
  searchPlaceholder = "Type to search",
  searchValue = "",
  onSearchChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  loading,
  onSync,
  onDelete,
}) => {
  switch (type) {
    case "search":
      return (
        <DeckHeaderSearch
          searchPlaceholder={searchPlaceholder}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      );
    case "page":
      return (
        <DeckHeaderPage title={title} description={description} loading={loading} onSync={onSync} onDelete={onDelete} />
      );
    default:
      return null;
  }
};
