import { CSSProperties, HTMLAttributes } from 'react';
import '../index.css';
export declare const Checkbox: (props: ICheckbox) => JSX.Element;
export interface ICheckbox extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    text: string;
    style?: CSSProperties;
    click?: () => void;
}
