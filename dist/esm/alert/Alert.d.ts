import React, { CSSProperties, HTMLAttributes } from 'react';
import './alert.css';
export declare const Alert: (props: IAlert) => JSX.Element;
export interface IAlert extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    style?: CSSProperties;
}
