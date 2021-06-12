import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { ITextField, TextField  } from '../textfield/TextField';
 

export default {
    title: 'TextField',
    component: TextField
} as Meta;

const Template: Story<ITextField>  = (args) => <TextField {...args} />;

export const TextFieldDefault = Template.bind({});

