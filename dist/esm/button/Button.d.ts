import { CSSProperties } from 'react';
import './button.css';
export declare const Button: (props: Pick<IButton, 'text' | 'fullWidth' | 'click' | 'style'>) => JSX.Element;
export interface IButton {
    text: string;
    fullWidth?: boolean;
    click?: () => void;
    style?: CSSProperties;
}
