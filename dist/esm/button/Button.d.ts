/// <reference types="react" />
import './button.css';
export declare const Button: (props: Pick<IButton, 'text' | 'color' | 'fullWidth' | 'outline'>) => JSX.Element;
export interface IButton {
    text: string;
    color?: 'primary' | 'secondary' | 'dark' | 'success' | 'danger' | 'info' | 'warning' | 'light' | 'pink';
    fullWidth?: boolean;
    outline?: boolean;
}
