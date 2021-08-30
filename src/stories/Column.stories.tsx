import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
 import { Column, IColumn } from '../column/Column';
 

export default {
    title: 'Component/Column',
    component: Column
} as Meta;

const Template: Story<any>  = (args) => 
    <Column  {...args} style={{background: 'blue'}}>
        This is a simple column.
     </Column>;

export const ColumnDefault = Template.bind({});
ColumnDefault.args = {
    lg: '6',
    md: '4',
    sm: '2' 
  } as IColumn