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
            <TableHeader>SN</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Contact</TableHeader>
        </TableRow>
        <TableRow>
            <TableItem>1</TableItem>
            <TableItem>Henry</TableItem>
            <TableItem>30</TableItem>
            <TableItem>0201209262</TableItem>
        </TableRow>
        <TableRow>
            <TableItem>2</TableItem>
            <TableItem>Felix</TableItem>
            <TableItem>25</TableItem>
            <TableItem>0240051237</TableItem>
        </TableRow>
        <TableRow>
            <TableItem>3</TableItem>
            <TableItem>Emmanuel</TableItem>
            <TableItem>27</TableItem>
            <TableItem>050474612</TableItem>
        </TableRow>
        <TableRow>
            <TableItem>4</TableItem>
            <TableItem>Gloria</TableItem>
            <TableItem>32</TableItem>
            <TableItem>0275087651</TableItem>
        </TableRow>
    </Table>;

export const TableDefault = Template.bind({});
