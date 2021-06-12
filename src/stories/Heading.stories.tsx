import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IHeading, Heading  } from '../heading/Heading';
 

export default {
    title: 'Heading',
    component: Heading
} as Meta;

const Template: Story<IHeading>  = (args) => <Heading {...args} />;

export const HeadingDefault = Template.bind({});
HeadingDefault.args = {
  text: 'Default Heading',
  type: 'H1'
}
