import AccordionGroup from "@mui/joy/AccordionGroup";
import { Meta, StoryFn } from "@storybook/react";
import { accordionGroupStyles } from "../accordion.style";
import { DeckTemplateShapeHeaderStatic } from "../deck-template-shape-header-static";
import { DeckTemplateShape } from "./deck-template-shape.component";

export default {
  title: "Template/Shape",
  component: DeckTemplateShape,
} as Meta<typeof DeckTemplateShape>;

const Template: StoryFn<typeof DeckTemplateShape> = (args) => (
  <AccordionGroup className="template-shape" sx={accordionGroupStyles("template-shape", false, 0, "sm", true)}>
    <DeckTemplateShape {...args}>
      <div>Content</div>
    </DeckTemplateShape>
  </AccordionGroup>
);

export const Default = Template.bind({});
Default.args = {
  status: 1,
  shapeName: "Shape name",
  subheaderContent: <DeckTemplateShapeHeaderStatic />,
};
