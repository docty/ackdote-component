import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { Checkbox, ICheckbox } from '../checkbox/Checkbox';
 

export default {
    title: 'Checkbox',
    component: Checkbox
} as Meta;

const Template: Story<ICheckbox>  = (args) => <Checkbox {...args} />;

export const CheckboxDefault = Template.bind({});

