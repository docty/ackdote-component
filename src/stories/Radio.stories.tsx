import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { Radio, IRadio } from '../radio/Radio';
 

export default {
    title: 'Radio',
    component: Radio
} as Meta;

const Template: Story<IRadio>  = (args) => <Radio {...args} />;

export const RadioDefault = Template.bind({});

