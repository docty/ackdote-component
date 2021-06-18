import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
 import { ITab, Tab, TabItem } from '../tab/Tab';
 

export default {
    title: 'Component/Tab',
    component: Tab
} as Meta;

const Template: Story<ITab>  = (args) => 
    <Tab  {...args}>
        <TabItem
            text={'Home'}
            icon={'user'}   
        >
            Body 1
        </TabItem>
        <TabItem
            text={'Contact'}
            icon={'user'}   
        >
            Body 2
        </TabItem>
        
        
    </Tab>;

export const Tabefault = Template.bind({});
 