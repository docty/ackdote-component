import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
 import { Alert, IAlert } from '../alert/Alert';
 

export default {
    title: 'Component/Alert',
    component: Alert
} as Meta;

const Template: Story<IAlert>  = (args) => 
    <Alert  {...args}>
        This is a simple alert.
     </Alert>;

export const AlertDefault = Template.bind({});
 