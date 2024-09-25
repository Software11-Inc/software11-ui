import ChevronRight from "@mui/icons-material/ChevronRight";
import PermMediaRounded from "@mui/icons-material/PermMediaRounded";
import Box from "@mui/joy/Box";
import TimeAgo from "javascript-time-ago";
import React from "react";
import { DeckAuthor } from "../deck-author";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { IDeckAlbumCardProps } from "./deck-album-card.types";
import { classes, styles } from "./deck-album-card.styles";
import { DeckTags } from "../deck-tags";

import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const DeckAlbumCard: React.FC<IDeckAlbumCardProps> = ({ size = "sm", tagLimit = 2, item, onOpen }) => {
  return (
    <React.Fragment>
      <Box className={classes.baseBox} sx={styles}>
        <Box className={classes.headerBox}>
          <DeckLabel
            title={{
              text: item?.name || "Untitled",
            }}
            separator={Boolean(item?.tags?.length) && <DeckTags tags={item?.tags || []} limit={tagLimit} size={size} />}
            gap={0.5}
            size={size}
          />
          <DeckIconButton icon={<ChevronRight sx={{ fontSize: 16 }} />} variant="plain" onClick={onOpen} />
        </Box>
        <Box className={classes.contentBox}>
          {Boolean(item?.description) && (
            <DeckLabel
              description={{
                text: item?.description,
                limit: 3,
              }}
              size={size}
            />
          )}
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
              <PermMediaRounded className={classes.mediaIcon} />
              <DeckLabel
                description={{
                  text: item?.itemsCount?.toString() || "0",
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
