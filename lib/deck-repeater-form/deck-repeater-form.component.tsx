import { IFilterOperator, ISortOperator } from "@models";
import AddRounded from "@mui/icons-material/AddRounded";
import FilterAltRounded from "@mui/icons-material/FilterAltRounded";
import SortByAlphaRounded from "@mui/icons-material/SortByAlphaRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import React from "react";
import { DeckLabel } from "../deck-label";
import { DeckRepeaterFormFilter } from "../deck-repeater-form-filter";
import { DeckRepeaterFormSort } from "../deck-repeater-form-sort";
import { columnStyle, repeaterStyles, rowStyle } from "./deck-repeater-form.styles";
import { IDeckRepeaterFormProps } from "./deck-repeater-form.types";

export const filterOperators: IFilterOperator[] = [
  { key: "EQUAL", label: "=" },
  { key: "NOT_EQUAL", label: "!=" },
  { key: "GREATER_THAN", label: ">" },
  { key: "LESS_THAN", label: "<" },
  { key: "GREATER_THAN_OR_EQUAL", label: ">=" },
  { key: "LESS_THAN_OR_EQUAL", label: "<=" },
  { key: "CONTAINS", label: "Contains" },
  { key: "NOT_CONTAINS", label: "Not Contains" },
  { key: "STARTS_WITH", label: "Starts With" },
  { key: "ENDS_WITH", label: "Ends With" },
];

export const sortOperators: ISortOperator[] = [
  { key: "ASC", label: "Ascending" },
  { key: "DESC", label: "Descending" },
];

export const DeckRepeaterForm: React.FC<IDeckRepeaterFormProps> = ({
  figures = [],
  filter = [],
  sort = [],
  headers = [],
  updateFilter = () => {},
  addFilter = () => {},
  removeFilter = () => {},
  updateSort = () => {},
  addSort = () => {},
  removeSort = () => {},
}) => {
  const buttonProps = {
    sx: {
      fontSize: 12,
      p: 0,
      py: 0.5,
      minHeight: "unset",
    },
  } as any;
  return (
    <Box sx={repeaterStyles}>
      <Box sx={columnStyle}>
        <Box sx={rowStyle}>
          <FilterAltRounded
            sx={{
              fontSize: 20,
              color: "var(--joy-palette-primary)",
              mx: 1,
            }}
          />
          <DeckLabel
            title={{
              text: "Filter",
            }}
            description={{
              text: "Filter the data to display",
            }}
          />
        </Box>
        {filter.map((item, index) => (
          <DeckRepeaterFormFilter
            key={index}
            figures={figures}
            filter={item}
            filterOperators={filterOperators}
            headers={headers}
            updateFilter={(field, value) => updateFilter(index, field, value)}
            onRemove={() => removeFilter(index)}
          />
        ))}
        <Button
          slotProps={{
            root: buttonProps,
          }}
          size="sm"
          variant="soft"
          color="primary"
          startDecorator={<AddRounded sx={{ fontSize: 14 }} />}
          onClick={addFilter}
        >
          ADD FILTER
        </Button>
      </Box>
      <Divider
        sx={{
          bgcolor: "var(--joy-palette-divider)",
        }}
      />
      <Box sx={columnStyle}>
        <Box sx={rowStyle}>
          <SortByAlphaRounded
            sx={{
              fontSize: 20,
              color: "var(--joy-palette-primary)",
              mx: 1,
            }}
          />
          <DeckLabel
            title={{
              text: "Sort",
            }}
            description={{
              text: "Sort the data to display",
            }}
          />
        </Box>

        {sort.map((item, index) => (
          <DeckRepeaterFormSort
            key={index}
            headers={headers}
            sortOperators={sortOperators}
            sortItem={item}
            updateSort={(field, value) => updateSort(index, field, value)}
            onRemove={() => removeSort(index)}
          />
        ))}
        <Button
          slotProps={{
            root: buttonProps,
          }}
          size="sm"
          variant="soft"
          color="primary"
          startDecorator={<AddRounded sx={{ fontSize: 14 }} />}
          onClick={addSort}
        >
          ADD SORT
        </Button>
      </Box>
    </Box>
  );
};
