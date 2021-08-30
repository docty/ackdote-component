import { CSSProperties, HTMLAttributes } from 'react';
export declare const Link: (props: ILink) => JSX.Element;
export interface ILink extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    text: string;
    href: string;
    style?: CSSProperties;
}
