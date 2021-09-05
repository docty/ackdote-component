import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
export declare const Option: (props: IOption) => JSX.Element;
export interface IOption extends Pick<HTMLAttributes<ReactNode>, 'className'> {
    style?: CSSProperties;
    value: string;
    item: Array<string>;
    onValueChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
