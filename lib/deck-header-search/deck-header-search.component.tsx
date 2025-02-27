import Box from "@mui/joy/Box";
import { DeckHeaderSearchProps } from "./deck-header-search.types";
import Input from "@mui/joy/Input";
import SearchRounded from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";
import _ from "lodash";
import { searchBoxStyles } from "./deck-header-search.styles";

const debouncedSearchChange = _.debounce((value, callback) => callback(value), 300);

export const DeckHeaderSearch: React.FC<DeckHeaderSearchProps> = ({
  searchValue = "",
  searchPlaceholder,
  onSearchChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchValue !== search) setSearch(searchValue);
  }, [searchValue]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearchChange(value, onSearchChange);
  };

  return (
    <Box sx={searchBoxStyles.container}>
      <Input
        startDecorator={<SearchRounded sx={{ fontSize: "16px" }} />}
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder={searchPlaceholder}
        fullWidth={true}
        size="sm"
        variant="plain"
        onFocus={onFocus}
        onBlur={onBlur}
        sx={searchBoxStyles.input}
      />
    </Box>
  );
};
