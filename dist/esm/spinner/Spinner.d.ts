import { CSSProperties } from 'react';
import './spinner.css';
export declare const Spinner: (props: ISpinner) => JSX.Element;
export interface ISpinner {
    style?: CSSProperties;
    type: 'glow' | 'circle' | 'basic' | 'classic' | 'square';
}
