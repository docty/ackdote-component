import React, { CSSProperties } from 'react';
import { HTMLAttributes } from 'react';
export declare const List: (props: IList) => JSX.Element;
export declare const ListItem: (props: IListItem) => JSX.Element;
export interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'className'> {
    type: 'ordered' | 'unordered';
    style?: CSSProperties;
}
export interface IListItem extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style' | 'className'> {
}
