import { CSSProperties } from 'react';
export declare const Paragraph: (props: Pick<IParagraph, 'text' | 'style'>) => JSX.Element;
export interface IParagraph {
    text: string;
    style?: CSSProperties;
}
