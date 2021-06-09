import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IButton, Button } from '../button/Button';
 

 

export default {
  title: 'Button',
  argTypes: {
    color: { control: { type: "select", options: ["undefined","primary", "secondary", "success", "dark", "light", "info", "danger", "warning", "pink"] }}
    
  },
  component: Button
  
} as Meta;

const Template: Story<IButton>  = (args) => <Button {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  text: 'Default Button',
  fullWidth: false,
  click : () => console.log('I am clicked')
}

 
