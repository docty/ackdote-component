import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { ITab, Tab, TabItem } from '../tab/Tab';
import { Paragraph } from '../paragraph/Paragraph';


export default {
    title: 'Component/Tab',
    component: Tab
} as Meta;


const Template: Story<ITab>  = (args) => 
    <Tab  {...args}>
        <TabItem icon={'fa fa-user'}>
            <Paragraph text={'This is the content for the home'}/>
        </TabItem>
        <TabItem text={'Contact'} >
            <Paragraph text={'This is the content for the contact'}/>
        </TabItem>
        <TabItem text={'Service'} icon={'fa fa-users'} >
            <Paragraph text={'This is the content for the service'}/>
        </TabItem>
    </Tab>;

export const TabDefault = Template.bind({});
 