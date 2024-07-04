import AddOutlined from "@mui/icons-material/AddOutlined";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import React from "react";
import { IDeckSelectTagsProps, IDeckSelectTagsState } from "./deck-select-tags.types";
import { addOutlinedSx, boxSx, buttonSx, formHelperTextSx, formLabelSx } from "./deck-select-tags.styles";

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
    const { tags = [] } = this.props;
    const { inputTag } = this.state;
    return (
      <React.Fragment>
        <FormControl>
          <FormLabel sx={formLabelSx}>Tags</FormLabel>
          {tags.length ? (
            <Box sx={boxSx}>
              {tags?.map((tag, index) => {
                return (
                  <Chip
                    color="primary"
                    key={tag + index}
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
            placeholder="Enter tag"
            size="sm"
            variant="soft"
            color="primary"
            value={inputTag}
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
                ADD
              </Button>
            }
          />

          <FormHelperText sx={formHelperTextSx}>
            Tag your dataset with descriptive words so you can index and search them later, ie. revenue, cogs, costs,
            people, etc.
          </FormHelperText>
        </FormControl>
      </React.Fragment>
    );
  }
}
