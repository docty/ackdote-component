import { CSSProperties } from 'react';
import './button.css';
import '../font-awesome.min.css';
export declare const Button: (props: IButton) => JSX.Element;
export interface IButton {
    text: string;
    fullWidth?: boolean;
    click?: () => void;
    icon?: string;
    trailing?: 'left' | 'right';
    style?: CSSProperties;
}
