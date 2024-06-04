import Avatar from "@mui/joy/Avatar";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import MenuButton from "@mui/joy/MenuButton";
import React from "react";
import { avatarSmStyle } from "./deck-header-user-dropdown.styles";
import { DeckHeaderUserDropdownProps } from "./deck-header-user-dropdown.types";

export const DeckHeaderUserDropdown: React.FC<DeckHeaderUserDropdownProps> = (
  props
) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <React.Fragment>
      <Dropdown open={visible} className="deck-header-user-dropdown">
        <MenuButton
          slots={{
            root: IconButton,
          }}
          slotProps={{
            root: {
              className: "deck-header-user-dropdown__button",
              onClick: () => setVisible(!visible),
            },
          }}
        >
          <Avatar
            src={props?.avatarUrl}
            alt={props?.fullName}
            sx={avatarSmStyle}
          />
        </MenuButton>
      </Dropdown>
    </React.Fragment>
  );
};
