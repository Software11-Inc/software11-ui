
import { Meta, StoryFn } from "@storybook/react";
import React from 'react';
import { DeckHeader } from "./deck-header.component";

export default {
    title: "Layout/Header",
    component: DeckHeader,
    } as Meta<typeof DeckHeader>;


const Template: StoryFn<typeof DeckHeader> = (args) => <DeckHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
    // Add props here
    label: "Deck Header",
};