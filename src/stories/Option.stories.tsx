import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IOption, Option } from '../option/Option';
 

export default {
    title: 'Element/Option',
    component: Option
} as Meta;

const Template: Story<IOption>  = (args) => 
    <Option {...args}/>

export const OptionDefault = Template.bind({});
OptionDefault.args = {
    value: 'node',
    item: ['node', 'admin']
} as IOption;
