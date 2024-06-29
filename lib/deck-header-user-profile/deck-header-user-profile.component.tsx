import Box from "@mui/joy/Box";
import React from "react";
import { DeckHeaderUserDropdown } from "../deck-header-user-dropdown";
import { DeckLabel } from "../deck-label";
import { userDataStyles, userProfileStyles } from "./deck-header-user-profile.styles";
import { DeckHeaderUserProfileProps } from "./deck-header-user-profile.types";

export const DeckHeaderUserProfile: React.FC<DeckHeaderUserProfileProps> = ({
  fullName,
  email,
  role,
  avatarUrl,
  isRight,
  onLogout,
}) => {
  return (
    <Box sx={userProfileStyles}>
      <DeckHeaderUserDropdown {...{ fullName, email, avatarUrl, isRight, onLogout }} />
      <Box sx={userDataStyles} className={!isRight ? "visible" : "hidden"}>
        <DeckLabel
          title={{ text: fullName, limit: 1 }}
          description={{ text: role, limit: 1, bold: true }}
          color="primary"
          size="sm"
        />
      </Box>
    </Box>
  );
};
