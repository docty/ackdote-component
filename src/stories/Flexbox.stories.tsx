import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IFlexbox, Flexbox,  } from '../flexbox/Flexbox';
import { Paragraph } from '../paragraph/Paragraph';
 

export default {
    title: 'Component/Flexbox',
    component: Flexbox
} as Meta;

const Template: Story<IFlexbox>  = (args) => 
    <Flexbox  {...args}>
        <Paragraph text={'Flexbox 1'} />
        <Paragraph text={'Flexbox 2'} />
        <Paragraph text={'Flexbox 3'} />
        <Paragraph text={'Flexbox 4'} />
    </Flexbox>;

export const FlexboxDefault = Template.bind({});
FlexboxDefault.args = {
    direction: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
} as IFlexbox;

