import React from "react";
import { DeckRepeaterFormFilterProps } from "./deck-repeater-form-filter.types";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import Box from "@mui/joy/Box";
import { filterGroupStyles } from "./deck-repeater-form-filter.styles";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Input from "@mui/joy/Input";
import { ITableFigure } from "@models";
import { DeckIconButton } from "../deck-icon-button";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import IconButton from "@mui/joy/IconButton";
import { DeckRepeaterSelectFigureDrawer } from "../deck-repeater-select-figure-drawer";

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

  const optionProps = {
    sx: { fontSize: 12 },
  } as any;

  const [open, setOpen] = React.useState(false);

  const isSelected = String(filter?.key).length > 0;

  const onSelect = (figure: ITableFigure) => {
    updateFilter("value", figure?.figure?.value);
    setOpen(false);
  };
  console.log("figures", figures);
  const availableFigures = figures.filter((figure) => figure?.name?.cell === filter?.key);

  return (
    <Box sx={filterGroupStyles}>
      <Select
        name="name"
        placeholder="Name"
        value={filter?.key ?? ""}
        onChange={(_, value) => updateFilter("key", value)}
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
        value={filter?.operator ?? ""}
        onChange={(_, value) => updateFilter("operator", value)}
        indicator={null}
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
        value={filter?.value ?? ""}
        onChange={(_: any, value: any) => updateFilter("value", value)}
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
