import { ChangeEventHandler, CSSProperties, HTMLAttributes } from 'react';
export declare const TextField: (props: ITextField) => JSX.Element;
export interface ITextField extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    type?: 'text' | 'email' | 'tel' | 'number' | 'password';
    placeholder?: string;
    onValueChange?: ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    value?: string;
}
