import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import './option.css';
export declare const Option: (props: IOption) => JSX.Element;
export declare const OptionItem: (props: IOption) => JSX.Element;
export interface IOption extends Pick<HTMLAttributes<ReactNode>, 'children'> {
    style?: CSSProperties;
}
