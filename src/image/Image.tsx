import   { CSSProperties } from 'react';


export const Image = (props: Pick<IImage, 'alt' | 'source' | 'style'>) => {
    const { source, alt, style } = props
    
    return (
        <img src={source} alt={alt} style={style} />
    );
};


export interface IImage {
    source: string;
    alt: string;
    style?: CSSProperties;
}