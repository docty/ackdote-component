import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
 import { Icon } from '../icon/Icon';
 

export default {
    title: 'Component/Icon',
    component: Icon
} as Meta;

const Template: Story<any>  = (args) => (
    <Icon name={'icon-home'} />
)

export const IconDefault = Template.bind({});
 