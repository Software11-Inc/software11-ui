import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { boxStyle, typographyStyle1, typographyStyle2 } from "./deck-logo.styles";

export const Logo = (): React.ReactElement => (
  <Box sx={boxStyle}>
    <Typography sx={typographyStyle1}>Deck</Typography>
    <Typography sx={typographyStyle2}>craft</Typography>
  </Box>
);
