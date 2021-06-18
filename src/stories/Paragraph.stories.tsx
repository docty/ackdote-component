import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IParagraph, Paragraph  } from '../paragraph/Paragraph';
 

export default {
    title: 'Element/Paragraph',
    component: Paragraph
} as Meta;

const Template: Story<IParagraph>  = (args) => <Paragraph {...args} />;

export const ParagraphDefault = Template.bind({});
ParagraphDefault.args = {
  text: 'Default Paragraph'
} as IParagraph;