import AddOutlined from "@mui/icons-material/AddOutlined";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import React from "react";
import { DeckLabel } from "../deck-label";
import { inputFocusStyle } from "../input.style";
import { addOutlinedSx, boxSx, buttonSx } from "./deck-select-tags.styles";
import { IDeckSelectTagsProps, IDeckSelectTagsState } from "./deck-select-tags.types";

export class DeckSelectTags extends React.Component<IDeckSelectTagsProps, IDeckSelectTagsState> {
  constructor(props: IDeckSelectTagsProps, context: IDeckSelectTagsState) {
    super(props, context);
    this.state = {
      inputTag: "",
    };
  }

  updateInputTag = (value: string): void => {
    this.setState({ inputTag: value.replace(",", "") });
  };

  isValidTag = (tag: string) => {
    return tag && tag.length > 0;
  };

  addTag = (tag: string) => {
    const { tags, onChange } = this.props;
    if (this.isValidTag(tag)) {
      const newTags = [...tags, tag];
      onChange(newTags);
      this.setState({ inputTag: "" });
    }
  };

  removeTag = (tag: string) => {
    const { tags, onChange } = this.props;
    const newTags = tags.filter((t) => t !== tag);
    onChange(newTags);
  };

  onKeyDownOnTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case "Comma":
      case "Enter":
      case "Tab":
        this.addTag(this.state.inputTag);
        break;
      default:
        break;
    }
  };

  render() {
    const {
      tags = [],
      size,
      title = "Tags",
      description = "Tag with descriptive words so you can index and search them later, ie. revenue, cogs, costs, people, etc.",
      placeholder = "Enter tag",
    } = this.props;
    const { inputTag } = this.state;
    return (
      <React.Fragment>
        <FormControl
          sx={{
            gap: 1,
          }}
        >
          <DeckLabel
            size={size}
            title={{
              text: title,
            }}
          />
          {tags.length ? (
            <Box sx={boxSx}>
              {tags?.map((tag, index) => {
                return (
                  <Chip
                    color="primary"
                    key={tag + index}
                    sx={{
                      fontSize: 12,
                      lineHeight: 1.2,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "var(--border-radius)",
                      gap: 1,
                    }}
                    endDecorator={<ChipDelete onClick={() => this.removeTag(tag)} />}
                  >
                    {tag}
                  </Chip>
                );
              })}
            </Box>
          ) : null}

          <Input
            name="tags"
            placeholder={placeholder}
            size={size}
            variant="soft"
            color="primary"
            value={inputTag}
            sx={{
              fontSize: 12,
              ...inputFocusStyle,
            }}
            onChange={({ target }) => this.updateInputTag(target.value)}
            onKeyDown={(e) => this.onKeyDownOnTags(e)}
            endDecorator={
              <Button
                disabled={!this.isValidTag(inputTag)}
                size="sm"
                sx={buttonSx}
                startDecorator={<AddOutlined sx={addOutlinedSx} />}
                onClick={() => this.addTag(inputTag)}
              >
                <span>ADD</span>
              </Button>
            }
          />
          <DeckLabel
            size={size}
            description={{
              text: description,
            }}
          />
        </FormControl>
      </React.Fragment>
    );
  }
}
