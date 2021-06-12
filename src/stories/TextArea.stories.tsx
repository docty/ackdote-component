import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { TextArea, ITextArea } from '../textarea/TextArea';
 

export default {
    title: 'TextArea',
    component: TextArea
} as Meta;

const Template: Story<ITextArea>  = (args) => <TextArea {...args} />;

export const TextAreaDefault = Template.bind({});

