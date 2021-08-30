import { CSSProperties } from 'react';
import './radio.css';
export declare const Radio: (props: IRadio) => JSX.Element;
export interface IRadio {
    style?: CSSProperties;
    text: string;
    name?: string;
    id?: string;
}
