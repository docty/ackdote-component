import { CSSProperties } from 'react';
import './spinner.css';
export declare const Spinner: {
    (props: ISpinner): JSX.Element;
    defaultProps: ISpinner;
};
export interface ISpinner {
    style?: CSSProperties;
    type?: 'bar' | 'circle';
}
