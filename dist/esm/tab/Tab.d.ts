import React, { CSSProperties, HTMLAttributes } from 'react';
import './tab.css';
export declare const Tab: (props: ITab) => JSX.Element;
export declare const TabItem: (props: ITabItem) => JSX.Element;
export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
}
interface ITabItem extends ITab {
    text?: string;
    icon?: string;
}
export {};
