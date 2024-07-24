import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import React from "react";
import { ISortItem, SortOperatorType } from "../models/template.model";
import { sortGroupStyles, textStyle } from "./deck-repeater-form-sort.styles";
import { DeckRepeaterFormSortProps } from "./deck-repeater-form-sort.types";

export const DeckRepeaterFormSort: React.FC<DeckRepeaterFormSortProps> = ({
  headers = [],
  sortItem,
  sortOperators = [],
  updateSort = () => {},
  onRemove = () => {},
}) => {
  const selectProps = {
    size: "sm",
    variant: "soft",
    color: "primary",
    sx: { fontSize: 12 },
  } as any;

  const selectSlotProps = {
    listbox: {
      className: "small-scroll",
      sx: {
        padding: 0,
      },
    },
  } as any;

  const _updateSort = (key: keyof ISortItem, value: string) => {
    switch (key) {
      case "key":
        setKey(value);
        break;
      case "operator":
        setOperator(value as SortOperatorType);
        break;
    }
    updateSort(key, value);
  };

  const [key, setKey] = React.useState(sortItem?.key ?? "");
  const [operator, setOperator] = React.useState(sortItem?.operator ?? "");

  React.useEffect(() => {
    if (!sortItem?.key && headers.length > 0) {
      setKey(headers[0]?.cell ?? "");
    } else if (sortItem?.key) {
      setKey(sortItem.key);
    }
    if (!sortItem?.operator && sortOperators.length > 0) {
      setOperator(sortOperators[0]?.key);
    } else if (sortItem?.operator) {
      setOperator(sortItem.operator);
    }
  }, [sortItem, sortOperators, headers]);

  return (
    <Box sx={sortGroupStyles}>
      <Select
        {...selectProps}
        slotProps={selectSlotProps}
        value={key}
        placeholder="Name"
        onChange={(_, value: any) => _updateSort("key", value)}
      >
        {headers.map((header) => (
          <Option key={header.cell} value={header.cell} sx={textStyle}>
            {header.value}
          </Option>
        ))}
      </Select>
      <Select
        {...selectProps}
        slotProps={selectSlotProps}
        value={operator}
        placeholder="Operator"
        onChange={(_, value: any) => _updateSort("operator", value)}
      >
        {sortOperators.map((operator) => (
          <Option key={operator.key} value={operator.key} sx={textStyle}>
            {operator.label}
          </Option>
        ))}
      </Select>
      <IconButton size="sm" variant="soft" color="primary" onClick={onRemove}>
        <DeleteOutlineRounded />
      </IconButton>
    </Box>
  );
};
