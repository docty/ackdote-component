import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IDropdown, Dropdown, DropdownItem } from '../dropdown/Dropdown';
 

export default {
    title: 'Component/Dropdown',
    component: Dropdown
} as Meta;

const Template: Story<IDropdown>  = (args) => 
    <Dropdown {...args}>
        <DropdownItem
            text={'Dropdown Item'}>
            <a href="/">Home</a>
            <a href="/">Classic</a>
            <a href="/">Acoustic</a>
        </DropdownItem>
    </Dropdown>

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
    type: 'hover'
} as IDropdown;