import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IProgressbar, Progressbar } from '../progressbar/Progressbar';
 

export default {
    title: 'Component/Progressbar',
    component: Progressbar
} as Meta;

const Template: Story<IProgressbar>  = (args) => <Progressbar {...args} />;

export const ProgressbarDefault = Template.bind({});
ProgressbarDefault.args = {
  width: 25
} as IProgressbar;