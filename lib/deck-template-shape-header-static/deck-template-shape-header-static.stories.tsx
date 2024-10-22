import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateShapeHeaderStatic } from "./deck-template-shape-header-static.component";
import { IDeckTemplateShapeHeaderStatic } from "./deck-template-shape-header-static.types";

export default {
  title: "Template/Shape/Header/Static",
  component: DeckTemplateShapeHeaderStatic,
} as Meta<typeof DeckTemplateShapeHeaderStatic>;

const Template: StoryFn<IDeckTemplateShapeHeaderStatic> = (args) => <DeckTemplateShapeHeaderStatic {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasShape: true,
  value: "Title",
};
