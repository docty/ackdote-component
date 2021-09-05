import React, { HTMLAttributes } from 'react';
export declare const Tab: (props: ITab) => JSX.Element;
export declare const TabItem: (props: ITabItem) => JSX.Element;
export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style' | 'className'> {
    direction?: 'row' | 'col';
    styling?: IStyling;
}
interface ITabItem extends ITab {
    text?: string;
    icon?: string;
}
interface IStyling {
    hoverColor?: string;
    activeBorderColor?: string;
}
export {};
