import React from 'react';


export const Image = (props: Pick<IImage, 'alt' | 'source'>) => {
    const { source, alt } = props
    
    return (
        <img src={source} alt={alt} />
    );
};


export interface IImage {
    source: string;
    alt: string;
}