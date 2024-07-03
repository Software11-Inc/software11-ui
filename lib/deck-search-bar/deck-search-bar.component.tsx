import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import SearchRounded from "@mui/icons-material/SearchRounded";
import { IDeckSearchBarProps } from "./deck-search-bar.types";
import { containerStype, formHelperTextSxProps, searchStyle } from "./deck-search-bar.styles";

export const DeckSearchBar: React.FC<IDeckSearchBarProps> = ({ onSearch, compact, onBlur, onFocus, showHint }) => {
  return (
    <FormControl sx={containerStype(compact)}>
      <Input
        placeholder="Type in here..."
        variant="soft"
        size="sm"
        startDecorator={<SearchRounded />}
        onChange={(ev) => onSearch(ev.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        sx={searchStyle()}
      />
      {showHint && <FormHelperText sx={formHelperTextSxProps}>Search by Tag, Keyword or Content.</FormHelperText>}
    </FormControl>
  );
};
