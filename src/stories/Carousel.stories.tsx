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
            'https://travelwest.info/app/uploads/2020/10/bus-edited-1536x864.png'
        ]}
    />

export const CarouselDefault = Template.bind({});
