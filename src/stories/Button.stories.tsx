import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IButton, Button } from '../button/Button';
 
export default {
  title: 'Element/Button',
  argTypes: {
    trailing: { control: { type: "select", options: ["left","right"] }}
  },
  component: Button
  
} as Meta;

const Template: Story<IButton>  = (args) => <Button  {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  text: 'Button',
  bgColor: 'blue',
  fullWidth: false,
  icon: 'fa fa-sign-in',
} as IButton

 
