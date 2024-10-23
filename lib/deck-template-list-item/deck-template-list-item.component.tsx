import Box from "@mui/joy/Box";
import { DeckTemplateListItemProps } from "./deck-template-list-item.types";
import AirplayRounded from "@mui/icons-material/AirplayRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import AdminPanelSettingsRounded from "@mui/icons-material/AdminPanelSettingsRounded";
import { contentStyle, imageStyle, mainBoxStyle } from "./deck-template-list-item.styles";
import { DeckLabel } from "../deck-label";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem, { menuItemClasses } from "@mui/joy/MenuItem";
import { svgIconClasses } from "@mui/joy/SvgIcon";

type imageType = "url" | "base64" | "blob";

export const DeckTemplateListItem: React.FC<DeckTemplateListItemProps> = ({
  template = {},
  onOpen = () => {},
  onEdit = () => {},
  onRun = () => {},
  onRemove = () => {},
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const getBase64Image = (base64?: string) => {
    if (!base64) {
      return null;
    }
    return <img src={`data:image/png;base64,${base64}`} alt="Slide preview" />;
  };

  const [type, setType] = React.useState<imageType>("url");

  React.useEffect(() => {
    switch (true) {
      case Boolean(template?.previewImage):
        setType("url");
        break;
      case Boolean(template?.previewImageBase64):
        setType("base64");
        break;
    }
  }, [template]);

  const getImage = () => {
    switch (type) {
      case "url":
        return <Box sx={imageStyle}>{getBase64Image(template?.previewImageBase64)}</Box>;
      case "base64":
        return <Box sx={imageStyle}>{getBase64Image(template?.previewImageBase64)}</Box>;
    }
  };

  return (
    <Box sx={mainBoxStyle}>
      {getImage()}
      <Box sx={contentStyle}>
        <DeckLabel
          title={{
            text: template?.name,
          }}
          description={{
            text: template?.description,
          }}
        />
        <Dropdown open={open}>
          <MenuButton
            slots={{
              root: DeckIconButton,
            }}
            slotProps={{
              root: {
                icon: <MoreVertRounded />,
                variant: "plain",
                size: "sm",
                onClick: toggleOpen,
              } as any,
            }}
          />
          <Menu
            size="sm"
            color="primary"
            onMouseLeave={() => setOpen(false)}
            popperOptions={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [8, 8],
                  },
                },
              ],
              placement: "bottom-end",
            }}
            sx={{
              border: "unset",
              boxShadow: "var(--focus-shadow)",
              p: 0,
              maxWidth: "75vw",

              [`& .${menuItemClasses.root}`]: {
                px: 1,
                [`& .${svgIconClasses.root}`]: {
                  opacity: 0.5,
                  fontSize: "16px",
                },
              },
              [`& .${menuItemClasses.root}:hover`]: {
                [`& .${svgIconClasses.root}`]: {
                  opacity: 1,
                },
              },
              [`& .${menuItemClasses.root}.Mui-disabled`]: {
                opacity: 0.5,
              },
            }}
          >
            <MenuItem onClick={onOpen}>
              <AirplayRounded
                sx={{
                  color: "var(--joy-palette-primary-500)",
                }}
              />
              <DeckLabel
                size="sm"
                title={{
                  text: "Open details",
                }}
                description={{
                  text: "Modify the template on details page",
                }}
              />
            </MenuItem>
            <MenuItem onClick={onEdit}>
              <SettingsRounded
                sx={{
                  color: "var(--joy-palette-primary-500)",
                }}
              />
              <DeckLabel
                size="sm"
                title={{
                  text: "Inline edit",
                }}
                description={{
                  text: "Change your template properties inline",
                }}
              />
            </MenuItem>
            <MenuItem onClick={onRun} disabled>
              <RocketLaunchRounded
                sx={{
                  color: "var(--joy-palette-primary-500)",
                }}
              />
              <DeckLabel
                size="sm"
                title={{
                  text: "Generate slides",
                }}
                description={{
                  text: "Generate slides based on the template",
                }}
              />
            </MenuItem>
            <MenuItem disabled>
              <AdminPanelSettingsRounded
                sx={{
                  color: "var(--joy-palette-primary-500)",
                }}
              />
              <DeckLabel
                size="sm"
                title={{
                  text: "Manage permissions",
                }}
                description={{
                  text: "Manage access to the template",
                }}
              />
            </MenuItem>
            <MenuItem onClick={onRemove}>
              <DeleteOutlineRounded
                sx={{
                  color: "var(--joy-palette-primary-500)",
                }}
              />
              <DeckLabel
                size="sm"
                title={{
                  text: "Remove",
                }}
                description={{
                  text: "Remove the template",
                }}
              />
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Box>
  );
};
