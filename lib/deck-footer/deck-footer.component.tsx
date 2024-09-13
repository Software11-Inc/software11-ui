import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import React from "react";
import { footerActionStyle, innerBoxSxProps, mainBoxSxProps } from "./deck-footer.styles";
import { IDeckFooterProps } from "./deck-footer.types";

export const DeckFooter: React.FC<IDeckFooterProps> = ({ hidden, className, actions, back, fit = false, next }) => {
  return (
    <React.Fragment>
      <Box className={[className, hidden ? "hidden" : ""].join(" ").trim()} sx={mainBoxSxProps(fit)}>
        <Box sx={innerBoxSxProps}>
          {back &&
            (back.text ? (
              <Button startDecorator={back?.iconStart} onClick={back?.action} variant="soft">
                {back.text}
              </Button>
            ) : (
              <IconButton
                size="md"
                onClick={back.action}
                variant="plain"
                color="primary"
                sx={{
                  position: "relative",
                  borderRadius: "2rem",
                  aspectRatio: "1/1",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}
                >
                  {back.iconStart}
                </Box>
              </IconButton>
            ))}

          <Box sx={footerActionStyle}>{actions}</Box>

          {next && (
            <Button
              onClick={next.action}
              disabled={next.disabled || false}
              color="success"
              startDecorator={next.iconStart}
              endDecorator={next.iconEnd}
            >
              {next.text}
            </Button>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
