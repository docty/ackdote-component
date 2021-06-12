import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
export declare const List: (props: IList) => JSX.Element;
export declare const ListItem: (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'>) => JSX.Element;
export interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    type: 'ordered' | 'unordered';
    style?: CSSProperties;
}
