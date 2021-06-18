import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { ICard, Card,  } from '../card/Card';
import { Paragraph } from '../paragraph/Paragraph';
 

export default {
    title: 'Component/Card',
    component: Card
} as Meta;

const Template: Story<ICard>  = (args) => 
    <Card  {...args}>
        <Paragraph text={'Card with text'} />
    </Card>;

export const CardDefault = Template.bind({});

