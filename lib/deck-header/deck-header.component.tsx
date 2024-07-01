import Box from "@mui/joy/Box";
import React from "react";
import { DeckHeaderNavigation } from "../deck-header-navigation/deck-header-navigation.component";
import { DeckHeaderUserActions } from "../deck-header-user-actions";
import { DeckHeaderUserProfile } from "../deck-header-user-profile";
import { className, headerStyle } from "./deck-header.styles";
import { DeckHeaderProps } from "./deck-header.types";

export const DeckHeader: React.FC<DeckHeaderProps> = ({
  title,
  description,
  fullName,
  role,
  email,
  avatarUrl,
  showNavigation,
  onLogout,
  onBack,
}) => {
  return (
    <Box className={className} sx={headerStyle}>
      <Box className={`${className}-content`}>
        <div className={["animation", "animation-navigation", showNavigation ? "visible" : "hidden"].join(" ")}>
          <DeckHeaderNavigation title={title} description={description} onBack={onBack} />
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
          <DeckHeaderUserActions onLogout={onLogout} />
        </div>
      </Box>
    </Box>
  );
};
