import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
 import { Container } from '../container/Container';
 

export default {
    title: 'Component/Container',
    component: Container
} as Meta;

const Template: Story<any>  = (args) => 
    <Container  {...args}>
        This is a simple container.
     </Container>;

export const ContainerDefault = Template.bind({});
 