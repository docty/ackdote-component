import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
export declare const Flexbox: (props: IFlexbox) => JSX.Element;
export interface IFlexbox extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    direction?: 'row' | 'column';
    alignContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-around' | 'space-between';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-evenly' | 'space-around' | 'space-between';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    style?: CSSProperties;
}
