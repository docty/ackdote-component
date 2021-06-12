import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IOption, Option, OptionItem } from '../option/Option';
 

export default {
    title: 'Option',
    component: Option
} as Meta;

const Template: Story<IOption>  = (args) => 
    <Option {...args}>
        <OptionItem>Javascript</OptionItem>
        <OptionItem>Python</OptionItem>
        <OptionItem>CSS</OptionItem>
    </Option>;

export const OptionDefault = Template.bind({});

