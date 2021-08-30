import { CSSProperties } from 'react';
import '../index.css';
export declare const Checkbox: (props: ICheckbox) => JSX.Element;
export interface ICheckbox {
    text: string;
    style?: CSSProperties;
    click?: () => void;
}
