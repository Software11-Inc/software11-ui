import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import React from "react";
import { avatarStyle, boxStyle } from "./deck-author.styles";
import { IDeckAuthorProps } from "./deck-author.types";
import { DeckLabel } from "../deck-label";

export const DeckAuthor: React.FC<IDeckAuthorProps> = ({
  user,
  size = "md",
  showName = true,
  showAvatar = true,
  color,
  isLink = false,
  onClick = () => {},
}): React.ReactElement => {
  if (!user) {
    return <React.Fragment />;
  }

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Box sx={boxStyle}>
      {showAvatar && <Avatar src={user?.profilePhoto} sx={avatarStyle} />}
      {showName && <DeckLabel title={{ text: fullName, link: isLink, onClick: onClick }} color={color} size={size} />}
    </Box>
  );
};
