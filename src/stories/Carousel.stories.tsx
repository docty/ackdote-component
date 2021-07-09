import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';

import { Carousel, ICarousel } from '../carousel/Carousel';
 
export default {
    title: 'Component/Carousel',
    component: Carousel
} as Meta;

const Template: Story<ICarousel>  = (args) => 
    <Carousel 
        image={[
            'https://d2v9ipibika81v.cloudfront.net/uploads/sites/175/Stephanie-S-Sullivan-347x433.jpg',
            'https://travelwest.info/app/uploads/2020/10/bus-edited-1536x864.png',
            'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
        ]}
    />

export const CarouselDefault = Template.bind({});
