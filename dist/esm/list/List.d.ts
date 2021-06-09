import React from 'react';
import { HTMLAttributes } from 'react';
export declare const List: (props: IList) => JSX.Element;
export declare const ListItem: (props: Pick<HTMLAttributes<React.ReactNode>, 'children'>) => JSX.Element;
interface IList extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    bulletLess?: boolean;
}
export {};
