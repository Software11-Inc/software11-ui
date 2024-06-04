import LockRounded from "@mui/icons-material/LockRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import Skeleton from "@mui/joy/Skeleton";
import React from "react";
import { DeckLabel } from "../deck-label/deck-label.component";
import {
  avatarLgStyle,
  avatarSmStyle,
  columnStyle,
  companyStyle,
  menuStyle,
  rowStyle,
  sectionStyle,
} from "./deck-header-user-dropdown.styles";
import { DeckHeaderUserDropdownProps } from "./deck-header-user-dropdown.types";
export const DeckHeaderUserDropdown: React.FC<DeckHeaderUserDropdownProps> = ({
  isRight,
  avatarUrl,
  fullName,
  email,
}) => {
  const [visible, setVisible] = React.useState(false);
  const placement = isRight ? "bottom-end" : "bottom-start";
  return (
    <Dropdown open={visible} className="deck-header-user-dropdown">
      <MenuButton
        slots={{
          root: IconButton,
        }}
        slotProps={{
          root: {
            className: "deck-header-user-dropdown__button",
            onClick: () => setVisible(!visible),
            sx: {
              fontSize: "12px",
              p: 0,
              minWidth: "1.25rem",
              minHeight: "1.25rem",
              borderRadius: "50%",
              "&:hover": {
                boxShadow: "var(--focus-shadow)",
              },
            },
          },
        }}
      >
        <Avatar src={avatarUrl} alt={fullName} sx={avatarSmStyle} />
      </MenuButton>
      <Menu
        placement={placement}
        sx={menuStyle}
        onMouseLeave={() => setVisible(false)}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [isRight ? 8 : -8, 12],
            },
          },
        ]}
      >
        <Box sx={columnStyle}>
          <Box sx={sectionStyle}>
            <Avatar src={avatarUrl} alt={fullName} sx={avatarLgStyle} />
            <DeckLabel
              size="lg"
              title={{ text: fullName, limit: 1 }}
              description={{ text: email, limit: 1 }}
            />
          </Box>
          <Divider />
          <Box sx={sectionStyle}>
            <Box sx={companyStyle}>
              <Skeleton height="1.5rem" width="2.5rem" />
            </Box>
            <Box sx={{ ...rowStyle, flex: 1 }}>
              <DeckLabel
                size="sm"
                title={{ text: "Deckcraft", limit: 1 }}
                description={{ text: "Company".toUpperCase() }}
              />
            </Box>
            <Box>
              <Button
                size="sm"
                sx={{ minHeight: "unset", fontSize: "12px" }}
                disabled={true}
                startDecorator={<LockRounded sx={{ fontSize: "12px" }} />}
              >
                {"Change".toUpperCase()}
              </Button>
            </Box>
          </Box>
        </Box>
      </Menu>
    </Dropdown>
  );
};
