import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { Radio, IRadio } from '../radio/Radio';
 

export default {
    title: 'Element/Radio',
    component: Radio
} as Meta;

const Template: Story<IRadio>  = (args) => (
    <div>
        <Radio {...args} name={'def'}/>
        <Radio {...args} name={'def'} />
    </div>
);

export const RadioDefault = Template.bind({});
RadioDefault.args = {
    text : 'Radio'
}
