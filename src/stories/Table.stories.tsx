import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { ITable, Table, TableRow, TableHeader, TableItem } from '../table/Table';
 
export default {
    title: 'Element/Table',
    component: Table
} as Meta;

const Template: Story<ITable>  = (args) => 
    <Table {...args}>
        <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Contact</TableHeader>
        </TableRow>
        <TableRow>
            <TableItem>Henry</TableItem>
            <TableItem>30</TableItem>
            <TableItem>0201209262</TableItem>
        </TableRow>
        <TableRow>
            <TableItem>Felix</TableItem>
            <TableItem>25</TableItem>
            <TableItem>0240051237</TableItem>
        </TableRow>
    </Table>;

export const TableDefault = Template.bind({});
