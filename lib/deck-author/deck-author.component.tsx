import React from "react";
import { IDeckAuthorProps } from "./deck-author.types";
import Box from "@mui/joy/Box";
import { avatarStyle, boxStyle, typographyStyle } from "./deck-author.styles";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";

export const DeckAuthor: React.FC<IDeckAuthorProps> = ({ user, showName = true }): React.ReactElement => {
  if (!user) {
    throw new Error("User is required");
  }

  return (
    <Box sx={boxStyle}>
      <Avatar src={user?.profilePhoto} sx={avatarStyle} />
      {showName && (
        <Typography sx={typographyStyle}>
          {user?.firstName} {user?.lastName}
        </Typography>
      )}
    </Box>
  );
};
