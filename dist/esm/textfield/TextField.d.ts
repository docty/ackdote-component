import { CSSProperties } from 'react';
import './textfield.css';
export declare const TextField: (props: ITextField) => JSX.Element;
export interface ITextField {
    type: 'text' | 'password';
    placeholder?: string;
    change?: (e: any) => void;
    style?: CSSProperties;
    icon?: string;
    value?: string;
}
