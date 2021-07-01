import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { ISpinner, Spinner } from '../spinner/Spinner';
 

export default {
    title: 'Component/Spinner',
    component: Spinner
} as Meta;

const Template: Story<ISpinner>  = (args) => <Spinner {...args} />;

export const SpinnerDefault = Template.bind({});
SpinnerDefault.args = {
    type: 'square'
} as ISpinner;