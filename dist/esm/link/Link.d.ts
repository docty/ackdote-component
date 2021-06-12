import { CSSProperties } from 'react';
export declare const Link: (props: Pick<ILink, 'text' | 'href' | 'style'>) => JSX.Element;
export interface ILink {
    text: string;
    href: string;
    style?: CSSProperties;
}
