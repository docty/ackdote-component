import { CSSProperties, HTMLAttributes } from 'react';
export declare const TextArea: (props: ITextArea) => JSX.Element;
export interface ITextArea extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    change?: () => void;
    style?: CSSProperties;
}
