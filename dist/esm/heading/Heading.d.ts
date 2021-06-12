import { CSSProperties } from 'react';
export declare const Heading: (props: IHeading) => JSX.Element;
export interface IHeading {
    text: string;
    type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
    style?: CSSProperties;
}
