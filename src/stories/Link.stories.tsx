import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { ILink, Link } from '../link/Link';
 

export default {
    title: 'Element/Link',
    component: Link
} as Meta;

const Template: Story<ILink>  = (args) => <Link {...args} />;

export const LinkDefault = Template.bind({});
LinkDefault.args = {
  text: 'Default Link',
  href: '#'
} as ILink;