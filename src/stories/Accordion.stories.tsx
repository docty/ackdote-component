import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { Accordion, AccordionItem, IAccordion } from '../accordion/Accordion';
import { Paragraph } from '../paragraph/Paragraph'; 
import '../widget.css';

export default {
    title: 'Component/Accordion',
    component: Accordion
} as Meta;

const Template: Story<IAccordion>  = (args) => 
    <Accordion  {...args}>
        <AccordionItem text={'Sport'}>
            <Paragraph text={'This is the content for sport'}/>
        </AccordionItem>
        <AccordionItem text={'Health'}>
            <Paragraph text={'This is the content for health'}/>
        </AccordionItem>
        <AccordionItem text={'Education'}>
            <Paragraph text={'This is the content for education'}/>
        </AccordionItem>
    </Accordion>
        

export const AccordionDefault = Template.bind({});
 