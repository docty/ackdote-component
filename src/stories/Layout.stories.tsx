import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Layout } from '../layout/Layout';


 

export default {
  title: 'Layout',
  component: Layout
  
} as Meta;

const Template: Story<any>  = (args) => <Layout {...args} />;

export const LayoutDefault = Template.bind({});


  
