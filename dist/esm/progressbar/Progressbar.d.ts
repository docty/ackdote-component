import React, { CSSProperties, HTMLAttributes } from 'react';
import './progressbar.css';
export declare const Progressbar: (props: IProgressbar) => JSX.Element;
export interface IProgressbar extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
    width?: number;
}
