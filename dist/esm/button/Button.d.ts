import '../font-awesome.min.css';
import { CSSProperties } from 'react';
export declare const Button: {
    (props: IButton): JSX.Element;
    defaultProps: {
        bgColor: string;
    };
};
export interface IButton {
    bgColor?: 'blue' | 'green' | 'pink' | 'red';
    text: string;
    fullWidth?: boolean;
    click?: () => void;
    icon?: string;
    trailing?: 'left' | 'right';
    style?: CSSProperties;
}
