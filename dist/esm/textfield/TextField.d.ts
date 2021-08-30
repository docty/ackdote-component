import { CSSProperties, HTMLAttributes } from 'react';
import './textfield.css';
export declare const TextField: (props: ITextField) => JSX.Element;
export interface ITextField extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    type: 'text' | 'password';
    placeholder?: string;
    change?: (e: any) => void;
    style?: CSSProperties;
    icon?: string;
    value?: string;
}
