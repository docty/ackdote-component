import { CSSProperties, HTMLAttributes } from 'react';
export declare const Paragraph: (props: IParagraph) => JSX.Element;
export interface IParagraph extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    text: string;
    style?: CSSProperties;
}
