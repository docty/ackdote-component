import { CSSProperties } from 'react';
export declare const TextArea: (props: Pick<ITextArea, 'change' | 'style'>) => JSX.Element;
export interface ITextArea {
    change?: () => void;
    style?: CSSProperties;
}
