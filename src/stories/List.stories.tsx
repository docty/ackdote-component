import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IList, List, ListItem } from '../list/List';
 

export default {
    title: 'Element/List',
    component: List
} as Meta;

const Template: Story<IList>  = (args) => 
    <List {...args}>
        <ListItem>Ghana</ListItem>
        <ListItem>Togo</ListItem>
        <ListItem>China</ListItem>
        <ListItem>Nigeria</ListItem>
    </List>;

export const ListDefault = Template.bind({});

