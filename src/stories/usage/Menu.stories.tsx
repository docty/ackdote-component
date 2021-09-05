import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import {Cage, Menu, MenuItem, MenuSub} from '../../index';
import { style } from 'typestyle';
  
export default {
    title: 'Usage/Menu',
    component: Cage
} as Meta;

const Template: Story<any>  = (args) => 
    <Cage style={{width: '300px'}}>
        <Menu>
            <MenuItem text={'Dashboard'} url={'#dashboard'} icon={'fa fa-home'} className={menuItem}/>
            <MenuItem text={'Staff'} url={'#'} icon={'fa fa-home'} className={menuItem} hasSub>
                <MenuSub text={'Add'} url={'#add'}/>
                <MenuSub text={'List'} url={'#list'}/>
            </MenuItem>
            <MenuItem text={'Project'} url={'#project'} icon={'fa fa-edit'} className={menuItem}/>
            <MenuItem text={'Staff'} url={'#'} icon={'fa fa-home'} className={menuItem} hasSub>
                <MenuSub text={'Add'} url={'#add'}/>
                <MenuSub text={'List'} url={'#list'}/>
            </MenuItem>
        </Menu>
    </Cage>

const menuItem = style({
    background: 'rgba(8, 129, 120, 0.2)'
})

export const Item1 = Template.bind({});
