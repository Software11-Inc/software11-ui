import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";
import { avatarStyle, boxStyle, typographyStyle } from "./deck-author.styles";
import { IDeckAuthorProps } from "./deck-author.types";

export const DeckAuthor: React.FC<IDeckAuthorProps> = ({ user, showName = true }): React.ReactElement => {
  if (!user) {
    return <React.Fragment />;
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
