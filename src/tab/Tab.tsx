import React, { CSSProperties, HTMLAttributes } from 'react';
import './tab.css';


export const Tab = (props: ITab) => {
     
    return (
        <div  className={'dt-tab'}>
            {props.children}
            <TabContent>Ghana</TabContent>
        </div>
    );
};


export const TabItem = (props: ITabItem) => {
    return (
        <div className={'dt-tab-header'} style={props.style}>{props.text}</div>
    );
};

const TabContent = (props: Pick<HTMLAttributes<React.ReactNode>, 'children' | 'style'>) => {
    return (
        <div style={props.style}>{props.children}</div>
    );
};

export interface ITab extends Pick<HTMLAttributes<React.ReactNode>, 'children'> {
    style?: CSSProperties;
}

interface ITabItem extends ITab{
    text?: string;
    icon?: string;
}