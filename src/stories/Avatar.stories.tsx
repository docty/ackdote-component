import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { Avatar, IAvatar } from '../avatar/Avatar';
 

export default {
    title: 'Component/Avatar',
    component: Avatar
} as Meta;

const Template: Story<IAvatar>  = (args) => 
    <Avatar text={'H'}/>

export const AvatarText = Template.bind({});
AvatarText.args = {
    text: 'A'
} as IAvatar;

export const AvatarIcon = Template.bind({});
AvatarIcon.args = {
    icon: 'image'
} as IAvatar;