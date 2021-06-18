import { CSSProperties } from 'react';
import './textfield.css';
export declare const TextField: (props: ITextField) => JSX.Element;
export interface ITextField {
    type: 'text' | 'password';
    placeholder?: string;
    change?: () => void;
    style?: CSSProperties;
    icon?: string;
}
