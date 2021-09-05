import { CSSProperties, HTMLAttributes } from 'react';
export declare const Image: (props: IImage) => JSX.Element;
export interface IImage extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    source: string;
    alt: string;
    width?: string;
    height?: string;
    style?: CSSProperties;
    circle?: boolean;
}
