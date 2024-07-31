import { IFilterItem, ITableFigure } from "@models";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckRepeaterSelectFigureDrawer } from "../deck-repeater-select-figure-drawer";
import { filterGroupStyles } from "./deck-repeater-form-filter.styles";
import { DeckRepeaterFormFilterProps } from "./deck-repeater-form-filter.types";
import { getInputFocusStyle } from "../theming";

export const DeckRepeaterFormFilter: React.FC<DeckRepeaterFormFilterProps> = ({
  figures = [],
  filter = null,
  filterOperators = [],
  headers = [],
  updateFilter = () => {},
  onRemove = () => {},
}) => {
  const selectProps = {
    size: "sm",
    variant: "soft",
    color: "primary",
    sx: { fontSize: 12, ...getInputFocusStyle("primary", "soft") },
  } as any;

  const selectSlotProps = {
    listbox: {
      className: "small-scroll",
      sx: {
        padding: 0,
      },
    },
    root: {
      sx: { fontSize: 12, ...getInputFocusStyle("primary", "soft") },
    },
  } as any;

  const optionProps = {
    sx: { fontSize: 12 },
  } as any;

  const [key, setKey] = React.useState(filter?.key ?? "");
  const [operator, setOperator] = React.useState(filter?.operator ?? "");
  const [value, setValue] = React.useState(filter?.value ?? "");

  React.useEffect(() => {
    if (!filter?.key && headers.length > 0) {
      setKey(headers[0]?.cell ?? "");
    } else if (filter?.key) {
      setKey(filter.key);
    }
    if (!filter?.operator && filterOperators.length > 0) {
      setOperator(filterOperators[0]?.key);
    } else if (filter?.operator) {
      setOperator(filter.operator);
    }
    setValue(filter?.value ?? "");
  }, [filter, filterOperators, headers]);

  const [open, setOpen] = React.useState(false);

  const isSelected = String(filter?.key).length > 0;

  const onSelect = (figure: ITableFigure) => {
    _updateFilter("value", figure?.figure?.value);
    setOpen(false);
  };

  const availableFigures = figures.filter((figure) => figure?.name?.cell === key);

  const _updateFilter = (field: keyof IFilterItem, value: any) => {
    switch (field) {
      case "key":
        setKey(value);
        break;
      case "operator":
        setOperator(value);
        break;
      case "value":
        setValue(value);
        break;
    }
    updateFilter(field, value);
  };

  return (
    <Box sx={filterGroupStyles}>
      <Select
        name="name"
        placeholder="Name"
        value={key}
        onChange={(_, value) => _updateFilter("key", value)}
        slotProps={selectSlotProps}
        {...selectProps}
      >
        {headers.map((header) => (
          <Option key={header.cell} value={header.cell} {...optionProps}>
            {header.value}
          </Option>
        ))}
      </Select>
      <Select
        name="operator"
        placeholder="Operator"
        value={operator}
        onChange={(_, value) => _updateFilter("operator", value)}
        slotProps={selectSlotProps}
        {...selectProps}
      >
        {filterOperators.map((operator) => (
          <Option key={operator.key} value={operator.key} {...optionProps}>
            {operator.label}
          </Option>
        ))}
      </Select>
      <Input
        name="value"
        placeholder="Value"
        value={value}
        onChange={(_: any, value: any) => _updateFilter("value", value)}
        {...selectProps}
        endDecorator={
          !isSelected ? null : <DeckIconButton icon={<FilterListRounded />} onClick={() => setOpen(true)} />
        }
      />
      <IconButton size="sm" variant="soft" color="primary" onClick={onRemove}>
        <DeleteOutlineRounded />
      </IconButton>
      <DeckRepeaterSelectFigureDrawer
        figures={availableFigures}
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(value: ITableFigure) => {
          onSelect(value);
        }}
      />
    </Box>
  );
};
