import React from "react";
import { IDeckFolderCardProps } from "./deck-folder-card.types";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { classes, styles } from "./deck-folder-card.styles";
import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { DeckIconButton } from "../deck-icon-button";
import PermMediaRounded from "@mui/icons-material/PermMediaRounded";
import { DeckAuthor } from "../deck-author";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { DeckTags } from "../deck-tags";
import PanoramaRounded from "@mui/icons-material/PanoramaRounded";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export const DeckFolderCard: React.FC<IDeckFolderCardProps> = ({ size = "sm", item, onOpen }) => {
  return (
    <React.Fragment>
      <Box className={classes.baseBox} sx={styles}>
        <Box className={classes.headerBox}>
          <PermMediaRounded
            sx={{
              fontSize: "1rem",
              alignSelf: "center",
              justifySelf: "center",
              color: "var(--joy-palette-primary-500)",
              bgcolor: "var(--joy-palette-primary-100)",
              borderRadius: "var(--border-radius)",
              boxSizing: "content-box",
              padding: "0.5rem",
            }}
          />
          <DeckLabel
            title={{
              text: item?.name || "Untitled",
            }}
            separator={Boolean(item?.tags?.length) && <DeckTags tags={item?.tags || []} size={size} />}
            gap={0.5}
            size={size}
          />
          <DeckIconButton icon={<ChevronRight sx={{ fontSize: 16 }} />} variant="plain" onClick={onOpen} />
        </Box>
        <Box className={classes.contentBox}>
          {
            item?.description && (
              <DeckLabel
                description={{
                  text: item?.description,
                  limit: 3,
                }}
                size={size}
              />
            )
          }

          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <PanoramaRounded className={classes.mediaIcon} />
              <DeckLabel
                description={{
                  text: "0",
                  limit: 1,
                  bold: true,
                }}
                color="primary"
                size={size}
              />
            </Box>
            <div className="flex-spacer"></div>
            <DeckLabel description={{ text: timeAgo.format((item?.lastUpdated?._seconds || 0) * 1000) }} size={size} />
            <DeckAuthor showName={false} user={item?.generationUser} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
