import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import { IImage, Image  } from '../image/Image';
 

export default {
    title: 'Image',
    component: Image
} as Meta;

const Template: Story<IImage>  = (args) => <Image {...args} />;

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  source: 'http://gallery/image.png',
  alt: 'Image not found'
} as IImage
