import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { Timeline, ITimeline, TimelineItem } from '../timeline/Timeline';
import { Paragraph } from '../paragraph/Paragraph';
 
export default {
    title: 'Component/Timeline',
    component: Timeline
} as Meta;

const Template: Story<ITimeline>  = (args) => 
    <Timeline type={'left'}>
        <TimelineItem>
            <Paragraph text={'Welcome to Hello world'}/>
        </TimelineItem>
        <TimelineItem>
            <Paragraph text={'Can we go for a date'}/>
        </TimelineItem>
        <TimelineItem>
            <Paragraph text={'Can we go for a date'}/>
        </TimelineItem>
    </Timeline>

const TemplateRight: Story<ITimeline>  = (args) => 
    <Timeline type={'right'}>
        <TimelineItem>
            <Paragraph text={'Welcome to Hello world'}/>
        </TimelineItem>
        <TimelineItem>
            <Paragraph text={'Can we go for a date'}/>
        </TimelineItem>
        <TimelineItem>
            <Paragraph text={'Can we go for a date'}/>
        </TimelineItem>
    </Timeline>

export const TimelineDefault = Template.bind({});

export const TimelineRight = TemplateRight.bind({});