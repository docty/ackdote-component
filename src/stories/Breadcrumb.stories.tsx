import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
 import { Breadcrumb } from '../breadcrumb/Breadcrumb';
 

export default {
    title: 'Component/Breadcrumb',
    component: Breadcrumb
} as Meta;

const Template: Story<any>  = (args) => (
    <Breadcrumb  items={[
        {text: 'Dashboard', url: '/'},
        {text: 'Staff', url: '/staff'},
    ]} />
)

export const BreadcrumbDefault = Template.bind({});
 