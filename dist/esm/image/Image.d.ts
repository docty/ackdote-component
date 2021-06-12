import { CSSProperties } from 'react';
export declare const Image: (props: Pick<IImage, 'alt' | 'source' | 'style'>) => JSX.Element;
export interface IImage {
    source: string;
    alt: string;
    style?: CSSProperties;
}
