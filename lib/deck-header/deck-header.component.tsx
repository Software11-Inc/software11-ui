import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Box from "@mui/joy/Box";
import React from "react";
import { DeckHeaderPage } from "../deck-header-page/deck-header-page.component";
import { DeckHeaderProject } from "../deck-header-project";
import { DeckHeaderSearch } from "../deck-header-search";
import { DeckHeaderUserActions } from "../deck-header-user-actions";
import { DeckHeaderUserProfile } from "../deck-header-user-profile";
import { DeckIconButton } from "../deck-icon-button";
import { className, headerStyle } from "./deck-header.styles";
import { DeckHeaderProps } from "./deck-header.types";

export const DeckHeader: React.FC<DeckHeaderProps> = ({
  type = "default",
  infoType = "project",
  title = "",
  description = "",
  fullName = "",
  role = "",
  email = "",
  avatarUrl = "",
  hidden = false,
  onLogout,
  onBack,
  notificationCount = 0,
  notificationOpen = false,
  showActions = false,
  onNotifications = () => {},
  searchPlaceholder = "Type to search",
  searchValue = "",
  onSearchChange = () => {},
  loading = false,
  onDelete,
  onSync,
  projectStatus = -1,
  onProjectStatusClick = () => {},
  projectTitle,
  projectDescription,
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

  const isProject = infoType === "project";

  const isProfile = infoType === "user";

  return (
    <Box className={classList} sx={headerStyle}>
      <Box className={`${className}-content`}>
        <div className={["animation", "animation-navigation", showNavigation ? "visible" : "hidden"].join(" ")}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DeckIconButton
              size="sm"
              variant="plain"
              rounded={true}
              icon={<ChevronLeft />}
              onClick={onBack}
              tabIndex={-1}
            />
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
          {isProfile && (
            <DeckHeaderUserProfile
              fullName={fullName}
              role={role}
              email={email}
              avatarUrl={avatarUrl}
              isRight={showNavigation}
              onLogout={onLogout}
            />
          )}
          {isProject && (
            <DeckHeaderProject
              status={projectStatus}
              isRight={showNavigation}
              title={projectTitle}
              description={projectDescription}
              onStatusClick={onProjectStatusClick}
            />
          )}
        </div>
        <div
          className={[`animation`, `animation-actions`, !showNavigation && showActions ? "visible" : "hidden"].join(
            " "
          )}
        >
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
