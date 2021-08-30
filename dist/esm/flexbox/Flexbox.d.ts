import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
export declare const Flexbox: (props: IFlexbox) => JSX.Element;
export interface IFlexbox extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    direction?: 'row' | 'col';
    alignContent?: 'center' | 'start' | 'end' | 'stretch' | 'around' | 'between';
    justifyContent?: 'center' | 'start' | 'end' | 'evenly' | 'around' | 'between';
    alignItems?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
    style?: CSSProperties;
}
